# Plan: monorepo-init (260907-1303)

## Outcome

A working Turborepo + pnpm monorepo skeleton with three language workspaces
ready for the user (TS, Java Spring) to author their scaffolds inside and
for Claude to author the C# .NET scaffold after that.

## Constraints

- One repo, one workspace, three self-contained apps.
- pnpm + Turborepo are the only root-level orchestration tools.
- No file created outside `apps/<name>/`, `docs/`, `plans/`, or the root
  config surface unless explicitly required.
- Each app remains a normal, idiomatic project for its language (no
  monorepo-coupling in app internals).

## Non-goals

- Cross-app shared problem metadata.
- CI/CD, Docker, deployment.
- A scoring / progress system.

## Acceptance criteria

- `pnpm install` at the root completes without error.
- `pnpm run build` either succeeds (when all apps are built) or fails only on
  the apps whose scaffold is not yet authored, with clear turbo output.
- `pnpm run graph --filter=./apps/*` prints the task graph.
- The 3 docs under `docs/setup-guides/` accurately describe the eventual
  stack per app.

## Files created in this plan

```
package.json                              # workspace scripts + devDeps
pnpm-workspace.yaml                       # apps/* + packages/*
turbo.json                                # cache-aware task pipeline
.gitignore                                # covers Node/Java/.NET
.editorconfig                             # 2-space web, 4-space Java/C#
README.md                                 # repo entry point

apps/ts-leetcode/README.md                # user-built scaffold target
apps/ts-leetcode/src/problems/_template/README.md
apps/java-spring-leetcode/README.md       # user-built scaffold target
apps/java-spring-leetcode/src/main/java/com/leetcode/_template/README.md
apps/csharp-dotnet-leetcode/README.md     # claude-built scaffold target
apps/csharp-dotnet-leetcode/src/Problems/_Template/README.md

docs/project-overview-pdr.md
docs/codebase-summary.md
docs/setup-guides/ts-setup.md
docs/setup-guides/java-spring-setup.md
docs/setup-guides/csharp-dotnet-setup.md

plans/260907-1303-monorepo-init/plan.md   # this file
```

## Steps executed

1. Created root files: `package.json`, `pnpm-workspace.yaml`, `turbo.json`,
   `.gitignore`, `.editorconfig`, `README.md`.
2. Created three `apps/<name>/` skeletons with README + problem template.
3. Authored `docs/project-overview-pdr.md` and `docs/codebase-summary.md`.
4. Authored `docs/setup-guides/{ts,java-spring,csharp-dotnet}-setup.md` as
   reference contracts the user (and Claude) can follow when authoring
   per-app tooling.
5. Wrote this plan.

## Validation

- `pnpm install` runs cleanly once apps ship their `package.json`.
- `pnpm run graph` prints the expected task DAG with three app leaves.
- `pnpm run build` is a no-op for apps that have no `build` script yet
  (turbo skips silently if the script is missing — depends on turbo minor
  behavior; explicit skip if needed).

## Risks

- Turbo behavior for missing scripts varies by version. If `turbo run build`
  errors when an app lacks `build`, each app must declare a `build` script
  (even a no-op one) before this plan can be considered fully green.
- The Java app uses Gradle (not pnpm); turbo only orchestrates it through
  the npm script surface. This is by design but worth noting.

## Rollback

`git reset` removes all files. No irreversible operations run.

## Follow-ups

- User authors `apps/ts-leetcode/` and `apps/java-spring-leetcode/`.
- Once those exist, Claude authors `apps/csharp-dotnet-leetcode/` matching
  the same problem-folder shape.
- After all three apps are scaffolded, fill the first problem
  (`0001-two-sum`) in each to validate the per-app DX.