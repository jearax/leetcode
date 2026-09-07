# TypeScript Setup (`apps/ts-nodejs-leetcode`)

Owner: **user (self-build)**. This guide documents the recommended scaffold
and tools; the actual files are yours to author.

## Goals

- Tight `dev` loop: edit → type-check → test, all in watch mode.
- Single source of truth for tooling: Biome handles both formatting and lint.
- Vitest for tests — fast, ESM-native, plays nicely with `tsx watch`.

## Files to create

```
apps/ts-nodejs-leetcode/
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── vitest.config.ts
├── biome.json
├── .gitignore              # optional; root already covers most
├── README.md               # already exists
└── src/
    ├── problems/
    │   └── _template/      # already exists
    └── index.ts            # optional entry point
```

## `package.json` (sketch)

```json
{
  "name": "ts-nodejs-leetcode",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc -p tsconfig.build.json",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "format:check": "biome format .",
    "typecheck": "tsc --noEmit",
    "clean": "rm -rf dist .turbo coverage"
  },
  "devDependencies": {
    "@biomejs/biome": "^1.9.0",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0",
    "vitest": "^2.1.0"
  }
}
```

## `tsconfig.json` (sketch)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2022"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "verbatimModuleSyntax": true
  },
  "include": ["src/**/*", "test/**/*", "vitest.config.ts"],
  "exclude": ["node_modules", "dist"]
}
```

`tsconfig.build.json` extends `tsconfig.json` with `noEmit: false`,
`declaration: true`, `outDir: "dist"`, `exclude: ["test/**", "vitest.config.ts"]`.

## `vitest.config.ts` (sketch)

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts", "test/**/*.test.ts"],
    coverage: { reporter: ["text", "html"], exclude: ["**/_template/**"] },
  },
});
```

## `biome.json` (sketch)

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "formatter": { "indentStyle": "space", "indentWidth": 2, "lineWidth": 100 },
  "linter": { "rules": { "recommended": true } },
  "javascript": { "formatter": { "quoteStyle": "double", "semicolons": "asNeeded" } },
  "files": { "ignore": ["dist", "coverage", ".turbo"] }
}
```

## Workflow

```bash
pnpm --filter ts-nodejs-leetcode dev          # watch + run current example
pnpm --filter ts-nodejs-leetcode test:watch   # re-run tests on save
pnpm --filter ts-nodejs-leetcode format       # format whole app
pnpm --filter ts-nodejs-leetcode lint:fix     # auto-fix lint issues
pnpm --filter ts-nodejs-leetcode build        # produce dist/
```

Or from the root:

```bash
pnpm dev:ts
pnpm test:ts
```

## Adding a problem

```bash
mkdir apps/ts-nodejs-leetcode/src/problems/0001-two-sum
$EDITOR apps/ts-nodejs-leetcode/src/problems/0001-two-sum/solution.ts
```

The test file is `solution.test.ts`; place it next to `solution.ts` so Vitest
picks it up automatically.