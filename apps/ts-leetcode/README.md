# ts-leetcode

TypeScript workspace for LeetCode practice.

## Owner

User (self-build). Reference implementation for the C# .NET workspace.

## Status

**Empty skeleton — pending build.**

## Planned Stack

- Runtime: Node.js >= 20
- Language: TypeScript
- Build: tsc / tsx
- Tests: Vitest
- Lint/Format: Biome
- Watch: `tsx watch` + Vitest watch mode

## Planned Commands

```bash
pnpm --filter ts-leetcode dev      # watch mode
pnpm --filter ts-leetcode test     # run tests
pnpm --filter ts-leetcode test:watch
pnpm --filter ts-leetcode lint
pnpm --filter ts-leetcode format
```

## Structure (target)

```
ts-leetcode/
├── src/
│   └── problems/
│       └── <id>-<slug>/
│           ├── solution.ts
│           └── README.md
├── test/
├── package.json
├── tsconfig.json
├── biome.json
└── vitest.config.ts
```