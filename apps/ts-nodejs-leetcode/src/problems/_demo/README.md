# _demo (two-sum)

Demo problem scaffold for the workspace. Excluded from `vitest` runs and
coverage so it does not skew metrics while you experiment.

## Shape

```
src/problems/
├── _template/                 # reference shape — never edit
│   └── README.md
├── _demo/                     # this folder — safe playground
│   ├── solution.ts
│   ├── solution.test.ts
│   └── README.md
└── <id>-<slug>/
    ├── solution.ts
    ├── solution.test.ts
    └── README.md              # optional per-problem notes
```

## Run

```bash
pnpm dev:run        # hot reload index.ts (uses this problem)
pnpm test:watch     # hot reload vitest; remove _demo from exclude to try
```