import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    // The physics topical index is one ~4 MB chunk (about 180 KB gzipped) that
    // only loads when someone opens physics topical mode.
    chunkSizeWarningLimit: 4500,
  },
});

