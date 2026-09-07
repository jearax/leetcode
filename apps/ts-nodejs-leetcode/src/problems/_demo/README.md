# _demo (two-sum)

Demo problem — safe playground.

## Shape (test mirror layout — same model as java and csharp apps)

```
src/problems/
├── _template/                 # reference shape — never edit
│   └── README.md
├── _demo/                     # this folder
│   ├── solution.ts
│   └── README.md
└── <id>-<slug>/
    ├── solution.ts
    └── README.md              # optional per-problem notes

test/problems/                 # mirrors src/problems paths
├── _demo/
│   └── solution.test.ts
└── <id>-<slug>/
    └── solution.test.ts
```

Import trong test dùng alias: `@/problems/_demo/solution.js`.

## Run

```bash
pnpm dev            # watch src/main.ts (uses this problem)
pnpm test:watch     # watch vitest — demo test chạy thật (2 tests)
```

Demo test chạy trong `vitest` như test thường; chỉ bị loại khỏi
coverage metrics.