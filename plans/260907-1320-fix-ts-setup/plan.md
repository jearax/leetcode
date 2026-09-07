# Plan: fix-ts-setup (260907-1320)

## Outcome

`apps/ts-nodejs-leetcode/` is a clean, monorepo-aware TS workspace with:
- Vitest as the test runner (with watch mode for hot reload)
- `dev`, `build`, `test`, `test:watch`, `typecheck`, `lint`, `format`, `format:check`, `clean` scripts
- Correct tsconfig (`test/` singular; `tsconfig.build.json` for emits)
- TS files formatted as tab+4 (matches user's Prettier choice and root .editorconfig)
- No nested `.git/` (root git manages the app)
- Turbo cache inputs updated to include all TS-app config files
- `docs/setup-guides/ts-setup.md` reflects the user's actual stack
  (ESLint + Prettier + Husky + commitlint + lint-staged, not Biome)

## Decisions applied

- Test framework: **Vitest**.
- Format style: **tab + width 4** for TS files (matches user's `.prettierrc.json`).
- Nested cleanup: **xóa `.git/` only**, giữ `node_modules/` per user request.
- Docs: **update TS setup guide** + **update turbo.json inputs**.
- Hot reload scripts: `dev` (tsx watch + vitest watch), `dev:run` (single file watch).

## Files changed

### Created

- `apps/ts-nodejs-leetcode/tsconfig.build.json`
- `apps/ts-nodejs-leetcode/vitest.config.ts`
- `apps/ts-nodejs-leetcode/src/index.ts` (LeetCode demo entry)
- `apps/ts-nodejs-leetcode/src/problems/_demo/solution.ts`
- `apps/ts-nodejs-leetcode/src/problems/_demo/solution.test.ts`
- `apps/ts-nodejs-leetcode/src/problems/_demo/README.md`
- `plans/260907-1320-fix-ts-setup/plan.md` (this file)
- `plans/260907-1320-fix-ts-setup/reports/fix-completion-260907-1320.md`

### Modified

- `apps/ts-nodejs-leetcode/package.json` — add scripts + deps
- `apps/ts-nodejs-leetcode/tsconfig.json` — fix include path
- `.editorconfig` (root) — TS files = tab+4
- `turbo.json` — add config files to inputs
- `docs/setup-guides/ts-setup.md` — sync with user's stack

### Removed

- `apps/ts-nodejs-leetcode/.git/` (nested git)
- `apps/ts-nodejs-leetcode/src/main.ts` (replaced by index.ts + demo problem)

## Steps

1. Delete nested `.git/`.
2. Update root `.editorconfig` for TS = tab+4.
3. Update `apps/ts-nodejs-leetcode/package.json`:
   - add scripts: `dev`, `dev:run`, `build`, `test`, `test:watch`, `typecheck`, `clean`
   - add deps: `tsx`, `vitest`
4. Fix `tsconfig.json` (include `test/` not `tests/`).
5. Create `tsconfig.build.json` with `noEmit: false`, `outDir: "dist"`, `tsc-alias` chain.
6. Create `vitest.config.ts`.
7. Replace `src/main.ts` with `src/index.ts` + `src/problems/_demo/{solution,solution.test,README}.ts`.
8. Update `turbo.json` inputs: add eslint.config.mjs, .prettierrc.json, .husky/**, vitest.config.ts, tsconfig.build.json.
9. Rewrite `docs/setup-guides/ts-setup.md` to match user's actual stack.
10. Commit.

## Validation

- `pnpm --filter ts-nodejs-leetcode typecheck` runs without error.
- `pnpm --filter ts-nodejs-leetcode test` runs the demo test successfully.
- `pnpm --filter ts-nodejs-leetcode test:watch` starts in watch mode.
- `pnpm --filter ts-nodejs-leetcode dev` starts hot reload (tsx + vitest watch).
- `pnpm --filter ts-nodejs-leetcode build` emits to `dist/` via tsc + tsc-alias.
- `pnpm --filter ts-nodejs-leetcode lint` and `format:check` work via existing config.
- `pnpm install` at root completes without conflict on `ts-nodejs-leetcode` deps
  (some manual reconciliation may be needed for the kept nested dir).

## Rollback

`git reset` for the commit. Re-add nested `.git/` manually if needed.