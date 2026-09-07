# TypeScript Setup (`apps/ts-nodejs-leetcode`)

Owner: **user (self-build)**. This guide documents the actual scaffold
shipped in the workspace. Authored by the user; documented here so the C#
.NET app can mirror it.

## Stack chosen

- Runtime: Node.js 20+
- Language: TypeScript 5 (ESM, `type: "module"`)
- Tests: **Vitest** (ESM-native, watch mode)
- Format: **Prettier** (tabs, width 4)
- Lint: **ESLint flat config** + typescript-eslint, import-x, prettier,
  prefer-arrow-functions, autofix
- Path alias: `@/*` → `src/*` (resolved via `tsc-alias` on build)
- Git hooks: **Husky** + **commitlint** (TICKET-XXX or conventional) +
  **lint-staged**

The original plan referenced Biome; this workspace landed on
ESLint + Prettier + Husky because that stack is already in place and
familiar. C# .NET setup mirrors the principle: a fast inner loop + clean
format/lint + git hooks.

## Files (shipped)

```
apps/ts-nodejs-leetcode/
├── package.json
├── tsconfig.json              # type-check only, no emit
├── tsconfig.build.json        # emits dist/, used by build script
├── vitest.config.ts           # test discovery + coverage + alias
├── eslint.config.mjs          # flat config
├── .prettierrc.json           # tabs + width 4
├── commitlint.config.mjs      # TICKET-XXX | conventional
├── .husky/
│   ├── pre-commit             # lint-staged
│   └── commit-msg             # commitlint
├── .gitignore
├── src/
│   ├── index.ts               # ad-hoc demo entry, used by `dev:run`
│   └── problems/
│       ├── _template/         # reference shape (do not edit)
│       ├── _demo/             # safe playground (excluded from tests)
│       └── <id>-<slug>/       # real problems
└── test/                      # mirror of src/, alt location for tests
```

## Scripts (root + per-app)

| Script                | Effect                                                |
| --------------------- | ----------------------------------------------------- |
| `pnpm --filter ... dev`     | `vitest --watch` — hot reload tests on save.    |
| `pnpm --filter ... dev:run` | `tsx watch src/index.ts` — hot reload demo.     |
| `pnpm --filter ... build`   | `tsc -p tsconfig.build.json && tsc-alias …` — emit to `dist/`. |
| `pnpm --filter ... test`    | `vitest run` — one-shot.                       |
| `pnpm --filter ... test:watch` | `vitest --watch` — alias of `dev`.           |
| `pnpm --filter ... typecheck` | `tsc --noEmit`                              |
| `pnpm --filter ... lint`    | `eslint .`                                     |
| `pnpm --filter ... lint:fix`| `eslint . --fix`                                |
| `pnpm --filter ... format`  | ESLint --fix + Prettier --write                |
| `pnpm --filter ... format:check` | Prettier --check                          |
| `pnpm --filter ... clean`   | removes `dist/`, `.turbo/`, `coverage/`.        |

Root shortcuts: `pnpm dev:ts`, `pnpm test:ts`, `pnpm build:ts`,
`pnpm typecheck`, etc.

## Hot reload flow

1. `pnpm --filter ts-nodejs-leetcode dev` — Vitest reruns the affected test
   on save. This is the primary inner loop for LeetCode practice.
2. `pnpm --filter ts-nodejs-leetcode dev:run` — tsx watch reruns
   `src/index.ts`. Edit `src/index.ts` to point at any problem file and
   watch the demo run on save.
3. `pnpm --filter ts-nodejs-leetcode typecheck` — quick type-check, no emit.

## Adding a problem

```bash
mkdir apps/ts-nodejs-leetcode/src/problems/0001-two-sum
$EDITOR apps/ts-nodejs-leetcode/src/problems/0001-two-sum/solution.ts
$EDITOR apps/ts-nodejs-leetcode/src/problems/0001-two-sum/solution.test.ts
```

The test file is `solution.test.ts` next to `solution.ts`; Vitest picks it
up automatically. `_template/` shows the canonical shape; `_demo/` is a
safe playground excluded from coverage.

## Format / lint conventions

- Prettier tabs (width 4), singleQuote, no semicolons, no trailing commas,
  lineWidth 120. Root `.editorconfig` matches.
- ESLint enforces: arrow functions, import ordering, no-unused-vars
  (allow `_` prefix), consistent-type-imports, no-duplicates, padding lines
  around blocks. Prettier is the source of truth for formatting — ESLint
  defers to it via `eslint-config-prettier`.

## Git hooks

- `pre-commit` → `lint-staged` → runs ESLint --fix + Prettier --write on
  staged files; reformats `package.json` via `prettier-package-json`.
- `commit-msg` → `commitlint` → header must match `TICKET-<n> - <desc>` or
  conventional `<type>[(<scope>)][:!]: <desc>`.

## Notes for the C# mirror

When building `apps/csharp-dotnet-leetcode/` later, the same principles
apply:

- inner loop = `dotnet watch test`
- format = `dotnet format`
- lint = Roslynator + `dotnet format --verify-no-changes`
- git hooks are optional in C#; pre-commit framework is not standard in
  .NET. Replicate the lint-staged idea with a `dotnet format --verify-no-changes`
  check in CI.