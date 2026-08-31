import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The Studio is a separate package with its own toolchain, and its build
    // output is minified. Linting it here produced ~21,600 warnings that buried
    // the handful of real ones from this app.
    "studio/**",
  ]),
]);

export default eslintConfig;
