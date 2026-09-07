# Codebase Summary

## Top-level layout

```
.
├── apps/                            # language workspaces
│   ├── ts-leetcode/                 # user-built (TS)
│   ├── java-spring-leetcode/        # user-built (Java + Spring)
│   └── csharp-dotnet-leetcode/      # Claude-built (C# + .NET)
├── docs/                            # durable docs
│   ├── project-overview-pdr.md
│   ├── codebase-summary.md
│   └── setup-guides/
├── plans/                           # WIP plans & reports
├── .editorconfig                    # shared editor rules
├── .gitignore                       # ignore rules (TS/Node/Java/.NET)
├── package.json                     # root, scripts + devDeps
├── pnpm-workspace.yaml              # workspace declaration
├── README.md                        # entry point
└── turbo.json                       # turbo pipeline + cache rules
```

## Root files

| File                    | Purpose                                            |
| ----------------------- | -------------------------------------------------- |
| `package.json`          | Workspace metadata, scripts, dev deps.             |
| `pnpm-workspace.yaml`   | `apps/*` and `packages/*` globs.                   |
| `turbo.json`            | Tasks (`build`, `dev`, `lint`, `format`, `test`...) with explicit `inputs`/`outputs`/`globalEnv` for cache correctness. |
| `.gitignore`            | Ignores `node_modules`, `dist`, `target`, `bin`, `obj`, `*.class`, `*.jar`, `*.pdb`, `.turbo`, etc. |
| `.editorconfig`         | 2-space indent for web, 4-space for Java/C#.       |
| `README.md`             | Repo entry point, layout, commands, status.        |

## Apps

Each app is self-contained. The owner (user or Claude) builds the per-app
tooling; turbo orchestrates via the root.

### `apps/ts-leetcode`

- Owner: user (self-build).
- Target stack: TypeScript 5, tsx watch, Vitest, Biome.
- Planned layout: `src/problems/<id>-<slug>/solution.ts` + `.test.ts`.

### `apps/java-spring-leetcode`

- Owner: user (self-build).
- Target stack: Java 21 LTS, Gradle 8.x, Spring Boot 3.x, JUnit 5, Spotless,
  Checkstyle.
- Planned layout: `src/main/java/com/leetcode/problems/<id>-<Slug>/Solution.java`
  with parallel `src/test/java/.../SolutionTest.java`.

### `apps/csharp-dotnet-leetcode`

- Owner: Claude (built after user-built apps exist).
- Target stack: .NET 8 SDK, C# 12, xUnit, `dotnet watch`, `dotnet format`,
  Roslynator.
- Planned layout: `src/Problems/<Id>-<Slug>/Solution.cs` with parallel
  `tests/Problems/.../SolutionTests.cs`.

## Scripts (root)

| Script              | Effect                                                   |
| ------------------- | -------------------------------------------------------- |
| `pnpm build`        | `turbo run build` — builds all apps with cache.          |
| `pnpm build:ts`     | builds only `ts-leetcode`.                               |
| `pnpm build:java`   | builds only `java-spring-leetcode`.                      |
| `pnpm build:cs`     | builds only `csharp-dotnet-leetcode`.                    |
| `pnpm dev`          | starts all `dev` tasks (TS watch, dotnet watch, etc.).   |
| `pnpm dev:ts`       | starts TS watch only.                                    |
| `pnpm dev:java`     | starts Gradle continuous build only.                    |
| `pnpm dev:cs`       | starts `dotnet watch` only.                              |
| `pnpm lint`         | runs lint per app.                                      |
| `pnpm lint:fix`     | runs lint with `--fix` forwarded.                        |
| `pnpm format`       | formats per app.                                         |
| `pnpm format:check` | checks formatting without writing.                       |
| `pnpm test`         | runs tests per app.                                      |
| `pnpm test:watch`   | starts `test:watch` tasks (persistent, cache off).       |
| `pnpm test:ts`/`test:java`/`test:cs` | per-app tests.                          |
| `pnpm clean`        | turbo `clean` + remove `node_modules` + `.turbo`.        |
| `pnpm reset`        | clean then reinstall.                                    |
| `pnpm typecheck`    | runs `typecheck` per app.                                |
| `pnpm graph`        | prints turbo task graph for the apps.                    |
| `pnpm prune`        | subset turbo workspace for one target (Docker-ready).    |
| `pnpm diff`         | dry-run summary of what would change.                    |

## Turbo cache boundaries

`turbo.json` declares:

- `globalDependencies`: files that affect every task.
- `globalEnv`: env vars that affect every task.
- Per-task `inputs` / `outputs`: ensure cache keys are accurate when source
  files move.
- `dev`, `test:watch`, `format`, `clean`: `cache: false` (long-running,
  side-effecting, or write-only).
- `persistent: true` for `dev` and `test:watch`.

## Problem convention

Each LeetCode problem lives at:

```
<app>/src/problems/<id>-<slug>/
```

Where:

- `<id>` is the LeetCode problem number (zero-padded to 4 digits, optional).
- `<slug>` is the problem's kebab-case slug.
- Each app owns its own copy of the problem — no cross-app sharing in v1.