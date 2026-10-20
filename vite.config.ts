import { createReadStream, existsSync, statSync } from "node:fs";
import { join, normalize } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";

// Question images live in media/topical/ (not public/, so they are not deployed).
// Production serves them from object storage via VITE_ASSET_BASE; the dev and
// preview servers serve them straight from disk.
function localMedia(): Plugin {
  const root = join(__dirname, "media");
  const serve = (url: string | undefined, res: import("node:http").ServerResponse, next: () => void) => {
    if (!url?.startsWith("/topical/")) return next();
    const file = normalize(join(root, decodeURIComponent(url.split("?")[0])));
    if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) return next();
    res.setHeader("Content-Type", "image/png");
    createReadStream(file).pipe(res);
  };
  return {
    name: "local-media",
    configureServer(server) {
      server.middlewares.use((req, res, next) => serve(req.url, res, next));
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => serve(req.url, res, next));
    },
  };
}

export default defineConfig({
  plugins: [react(), localMedia()],
  build: {
    outDir: "dist",
    // Each topical index is its own chunk, loaded only when that paper's topical
    // view opens. The largest (physics P1, 4,700+ questions) is about 1.5 MB raw
    // and 80 KB gzipped.
    chunkSizeWarningLimit: 2000,
  },
});
