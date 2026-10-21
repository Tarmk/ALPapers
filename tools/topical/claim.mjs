// Hands out labelling packets to parallel workers. Each call moves one packet
// name from offline/work/queue/ to offline/work/claimed/ (a rename, so two
// workers can never claim the same one) and prints it, or prints DONE.
//
//   node tools/topical/claim.mjs --fill   (queue every packet without a label file)
//   node tools/topical/claim.mjs          (claim the next packet)

import { existsSync, mkdirSync, readdirSync, renameSync, writeFileSync } from "node:fs";

const root = new URL("../../", import.meta.url);
const dir = (p) => new URL(p, root);
const queue = dir("offline/work/queue/");
const claimed = dir("offline/work/claimed/");
mkdirSync(queue, { recursive: true });
mkdirSync(claimed, { recursive: true });

if (process.argv.includes("--fill")) {
  const done = new Set(
    existsSync(dir("tools/topical/labels/parts/")) ? readdirSync(dir("tools/topical/labels/parts/")).map((f) => f.replace(".json", "")) : [],
  );
  const busy = new Set(readdirSync(claimed));
  let n = 0;
  for (const f of readdirSync(dir("offline/work/packets/"))) {
    const name = f.replace(".md", "");
    if (done.has(name) || busy.has(name)) continue;
    writeFileSync(new URL(name, queue), "");
    n++;
  }
  console.log(`${n} packets queued`);
} else {
  for (const name of readdirSync(queue).sort()) {
    try {
      renameSync(new URL(name, queue), new URL(name, claimed));
      console.log(name);
      process.exit(0);
    } catch {
      // another worker took it first
    }
  }
  console.log("DONE");
}
