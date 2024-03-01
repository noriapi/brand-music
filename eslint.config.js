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
      tsdoc: tsdoc,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "tsdoc/syntax": "warn",
      "no-console": "error",
    },
  },
  {
    files: ["src/**/*"],
    languageOptions: {
      globals: { ...globals.es2021 },
    },
  },
  {
    files: ["*.js", "*.cjs"],
    ...tseslint.configs.disableTypeChecked,
  },

  prettier,
);
