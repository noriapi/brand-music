import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*.ts", "!src/*.test?(-d).ts", "!src/util.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
});
