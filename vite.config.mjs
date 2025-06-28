import { defineConfig } from "vite";
import { join } from "path";

const dirname = import.meta.dirname ?? ".";

export default defineConfig({
  build: {
    minify: true,
    outDir: join(dirname, "dist"),
    lib: {
      entry: join(dirname, "src", "confirm-extended-dialog.ts"),
      formats: ["es"],
    },
  },
});
