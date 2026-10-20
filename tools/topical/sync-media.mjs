// Uploads the question images to a Cloudflare R2 bucket (S3-compatible API), so
// the site can serve them from object storage instead of its own deployment.
// Only new or changed files (by size) are uploaded; re-running is cheap.
//
// Credentials come from a git-ignored .env.r2 file at the repository root:
//
//   R2_ACCOUNT_ID=...        (Cloudflare dashboard > R2 > Account details)
//   R2_ACCESS_KEY_ID=...     (R2 > Manage API tokens > Create, Object Read & Write)
//   R2_SECRET_ACCESS_KEY=...
//   R2_BUCKET=past-papers
//
//   node tools/topical/sync-media.mjs [--dry-run] [--delete] [--dir media/topical]
//
// Objects are stored under "topical/...", matching the /topical/... paths in the
// indexes, so the site only needs VITE_ASSET_BASE set to the bucket's public URL.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { S3Client, ListObjectsV2Command, PutObjectCommand, DeleteObjectsCommand } from "@aws-sdk/client-s3";

const root = new URL("../../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const prune = args.includes("--delete");
const dirArg = args[args.indexOf("--dir") + 1];
const localDir = join(root, args.includes("--dir") ? dirArg : "media/topical");
const prefix = "topical/";

function loadEnv() {
  const file = join(root, ".env.r2");
  if (!existsSync(file)) throw new Error("Missing .env.r2 (see the comment at the top of this script).");
  const env = {};
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  for (const k of ["R2_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY", "R2_BUCKET"]) {
    if (!env[k]) throw new Error(`.env.r2 is missing ${k}`);
  }
  // Accept the bare 32-character account ID or the whole S3 endpoint URL.
  const id = env.R2_ACCOUNT_ID.match(/[0-9a-f]{32}/i)?.[0];
  if (!id) throw new Error("R2_ACCOUNT_ID should contain the 32-character account ID");
  env.R2_ACCOUNT_ID = id;
  return env;
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (name.endsWith(".png")) out.push({ full, key: prefix + relative(localDir, full).split(sep).join("/"), size: st.size });
  }
  return out;
}

async function listRemote(s3, bucket) {
  const remote = new Map();
  let token;
  do {
    const page = await s3.send(new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix, ContinuationToken: token }));
    for (const o of page.Contents ?? []) remote.set(o.Key, o.Size);
    token = page.IsTruncated ? page.NextContinuationToken : undefined;
  } while (token);
  return remote;
}

async function pool(items, size, fn) {
  let i = 0;
  let done = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (i < items.length) {
        const item = items[i++];
        for (let attempt = 1; ; attempt++) {
          try {
            await fn(item);
            break;
          } catch (err) {
            if (attempt >= 4) throw err;
            await new Promise((r) => setTimeout(r, 500 * attempt));
          }
        }
        if (++done % 500 === 0) console.log(`  ${done}/${items.length}`);
      }
    }),
  );
}

const env = loadEnv();
const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: env.R2_ACCESS_KEY_ID, secretAccessKey: env.R2_SECRET_ACCESS_KEY },
});

const local = walk(localDir);
console.log(`${local.length} local images in ${relative(root, localDir)}`);
const remote = await listRemote(s3, env.R2_BUCKET);
console.log(`${remote.size} objects already in ${env.R2_BUCKET}`);

const upload = local.filter((f) => remote.get(f.key) !== f.size);
const localKeys = new Set(local.map((f) => f.key));
const stale = [...remote.keys()].filter((k) => !localKeys.has(k));
console.log(`${upload.length} to upload, ${stale.length} remote-only${prune ? " (will delete)" : ""}`);
if (dryRun) process.exit(0);

await pool(upload, 32, (f) =>
  s3.send(
    new PutObjectCommand({
      Bucket: env.R2_BUCKET,
      Key: f.key,
      Body: readFileSync(f.full),
      ContentType: "image/png",
      // Re-splitting can rewrite an image under the same name, so don't cache forever.
      CacheControl: "public, max-age=604800",
    }),
  ),
);

if (prune && stale.length) {
  for (let i = 0; i < stale.length; i += 1000) {
    const batch = stale.slice(i, i + 1000).map((Key) => ({ Key }));
    await s3.send(new DeleteObjectsCommand({ Bucket: env.R2_BUCKET, Delete: { Objects: batch } }));
  }
  console.log(`deleted ${stale.length}`);
}
console.log("done");
