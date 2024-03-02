import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsdoc from "eslint-plugin-tsdoc";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/", "node_modules/"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-console": "error",
    },
  },
  {
    files: ["src/**/*"],
    languageOptions: {
      globals: { ...globals.es2021 },
    },
    plugins: {
      tsdoc: tsdoc,
    },
    rules: {
      "tsdoc/syntax": "warn",
    },
  },
  {
    files: ["*.js", "*.cjs"],
    ...tseslint.configs.disableTypeChecked,
  },

  prettier,
);
