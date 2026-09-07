# LeetCode Practice Monorepo

Multi-language workspace for solving LeetCode problems while learning new
languages and data structures (CTDL) hands-on.

## Why

Practice LeetCode while:

1. Mastering **TypeScript** as the primary working language.
2. Re-learning **Java** with modern Spring Boot idioms.
3. Re-learning **C#** with the .NET ecosystem.
4. Studying **data structures (CTDL)** — built-in and re-built from scratch —
   across all three languages.

## Layout

```
.
├── apps/
│   ├── ts-leetcode/              # TypeScript workspace (user-built)
│   ├── java-spring-leetcode/     # Java + Spring Boot workspace (user-built)
│   └── csharp-dotnet-leetcode/   # C# + .NET workspace (Claude-built)
├── docs/                        # Durable documentation
├── plans/                        # Work-in-progress plans & reports
├── package.json                 # Workspace root
├── pnpm-workspace.yaml          # pnpm workspace declaration
├── turbo.json                   # Turborepo task pipeline
└── .editorconfig                # Shared editor conventions
```

## Quickstart

```bash
pnpm install               # install workspace deps
pnpm run build             # build all apps
pnpm run dev               # watch all apps (where supported)
pnpm run lint              # lint all apps
pnpm run format            # format all apps
pnpm run test              # test all apps
```

Per-app commands (replace `<app>` with `ts-leetcode | java-spring-leetcode | csharp-dotnet-leetcode`):

```bash
pnpm --filter <app> <task>
# example
pnpm --filter ts-leetcode test:watch
```

## Status

| App                       | Owner | State                |
| ------------------------- | ----- | -------------------- |
| `ts-leetcode`             | user  | empty skeleton       |
| `java-spring-leetcode`    | user  | empty skeleton       |
| `csharp-dotnet-leetcode`  | claude| empty skeleton       |

## Conventions

- File naming: kebab-case for JS/TS/Python/shell; PascalCase for Java/C#;
  snake_case for Go/Rust.
- Each LeetCode problem lives under `src/problems/<id>-<slug>/` per app.
- Shared editor rules live in `.editorconfig`; per-app formatters are
  defined in each app's workspace.

## Docs

- [Project overview](./docs/project-overview-pdr.md)
- [Codebase summary](./docs/codebase-summary.md)
- [Setup guides](./docs/setup-guides/)
  - [TypeScript setup](./docs/setup-guides/ts-setup.md)
  - [Java Spring setup](./docs/setup-guides/java-spring-setup.md)
  - [C# .NET setup](./docs/setup-guides/csharp-dotnet-setup.md)