import { defineConfig } from "vite";
import path from "node:path";

const dirname = import.meta.dirname ?? ".";

export default defineConfig({
  build: {
    minify: true,
    outDir: path.join(dirname, "dist"),
    lib: {
      entry: path.join(dirname, "src", "confirm-extended-dialog.ts"),
      formats: ["es"],
    },
  },
});
