# Project Overview (PDR)

## Purpose

Practice LeetCode problems in three languages at once, with one workspace per
language that has its own build, lint, format, and watch setup.

Two learning goals run in parallel:

1. **Algorithms & data structures (CTDL)** — solve problems, study trade-offs,
   compare idiomatic patterns across languages.
2. **Language fluency** — re-activate Java and C# syntax, learn each
   ecosystem's tooling and conventions while coding real (small) problems.

## Scope (in)

- Three language workspaces (`apps/ts-nodejs-leetcode`, `apps/java-spring-leetcode`,
  `apps/csharp-dotnet-leetcode`).
- Per-app: build, format, lint, test, watch.
- One workspace root with pnpm + Turborepo orchestration and shared scripts.

## Scope (out)

- Production backend / frontend / API.
- Shared problem metadata across apps (each app owns its problems folder).
- CI pipelines, deployment, Docker.

## Roles

| App                       | Owner | Reason                                                |
| ------------------------- | ----- | ----------------------------------------------------- |
| `ts-nodejs-leetcode`      | user  | Primary language — fastest iteration, anchor for C#.  |
| `java-spring-leetcode`    | user  | Re-activate Java; learn Spring Boot idioms.            |
| `csharp-dotnet-leetcode`  | claude| Reference built from the user-built TS + Java apps.   |

## Non-goals

- Mirror LeetCode's full problem bank.
- Score tracking or difficulty progression system.
- Code golf or performance leaderboard.

## Acceptance criteria

- A single `pnpm install` at the root installs the workspace.
- A single `pnpm run build` builds all three apps.
- Each app exposes `dev`, `build`, `lint`, `format`, `test` tasks that turbo
  orchestrates with proper cache boundaries.
- Watch mode works in each app (TS: tsx + Vitest watch; Java: Gradle
  `--continuous`; C#: `dotnet watch`).
- A new problem in any app lives under `<app>/src/problems/<id>-<slug>/` and
  follows the per-app template.

## Tech stack decisions

| Concern       | Choice                                            |
| ------------- | ------------------------------------------------- |
| Workspace     | pnpm workspaces                                    |
| Orchestration | Turborepo 2.x (cache-aware, env-aware)            |
| TS runtime    | Node.js 20+, TypeScript 5, Vitest, Biome          |
| Java build    | Gradle 8.x with `--continuous`                    |
| Java test     | JUnit 5 + Spring Boot Test                        |
| Java format   | Spotless (Google Java Format) + Checkstyle        |
| C# runtime    | .NET 8 SDK, C# 12, xUnit                          |
| C# watch      | `dotnet watch` (built-in)                         |
| C# format     | `dotnet format` + Roslynator                      |

## Risks

- Three different package managers (pnpm / Gradle / dotnet) coexist under one
  repo. Mitigation: keep `apps/<x>/` self-contained, root only orchestrates.
- Tooling versions drift. Mitigation: pin via `engines`, `gradle/wrapper/`,
  and `global.json` per app.
- Cache poisoning from mixed runtimes. Mitigation: explicit `inputs`/`outputs`
  per turbo task, `globalEnv` for environment variables.