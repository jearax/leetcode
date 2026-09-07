# csharp-dotnet-leetcode

C# .NET workspace for LeetCode practice.

## Owner

Claude (agent-build). Will be built after user completes TS + Java Spring skeletons.

## Status

**Empty skeleton — pending build by Claude based on TS + Java Spring references.**

## Planned Stack

- Runtime: .NET 8 SDK
- Language: C# 12
- Tests: xUnit
- Watch: `dotnet watch` (built-in)
- Format: `dotnet format` + Roslynator analyzers

## Planned Commands

```bash
dotnet watch run            # dev watch
dotnet watch test           # test watch
dotnet format               # format
dotnet build
dotnet test
```

## Structure (target)

```
csharp-dotnet-leetcode/
├── src/
│   ├── Problems/<id>-<Slug>/
│   │   └── Solution.cs
│   └── Leetcode.csproj
├── tests/
│   ├── Problems/<id>-<Slug>/
│   │   └── SolutionTests.cs
│   └── Leetcode.Tests.csproj
├── Leetcode.sln
└── global.json
```