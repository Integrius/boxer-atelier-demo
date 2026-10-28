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
    // Nested git worktrees (e.g. .claude/worktrees/**) carry their own
    // node_modules/.next build output; eslint-config-next's ".next/**"
    // ignore isn't recursive, so without this, linting from the repo
    // root walks into a worktree's build output and lints minified,
    // generated JS as if it were project source.
    ".claude/**",
  ]),
]);

export default eslintConfig;
