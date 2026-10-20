import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    // Each topical index is its own chunk, loaded only when that paper's topical
    // view opens. The largest (physics P1, 4,700+ questions) is about 1.5 MB raw
    // and 80 KB gzipped.
    chunkSizeWarningLimit: 2000,
  },
});
