# C# .NET Setup (`apps/csharp-dotnet-leetcode`)

Owner: **Claude (agent-build)**. This guide documents the scaffold Claude
will produce once the user-built `ts-leetcode` and `java-spring-leetcode`
apps exist as references.

## Goals

- Match the layout style of the user-built apps.
- Tight `dev` loop via `dotnet watch` (built-in, no extra plugin).
- xUnit for tests.
- `dotnet format` + Roslynator for lint/format.

## Files to create

```
apps/csharp-dotnet-leetcode/
├── Leetcode.sln
├── global.json                # pins SDK version
├── Directory.Build.props      # shared MSBuild properties
├── Directory.Packages.props  # central package versions
├── .gitignore                  # optional; root covers most
├── README.md                  # already exists
├── src/
│   ├── Problems/              # already exists
│   │   └── _Template/         # already exists
│   └── Leetcode.csproj
└── tests/
    ├── Problems/
    └── Leetcode.Tests.csproj
```

## `Leetcode.sln` (sketch)

```
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio Version 17
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "Leetcode", "src\Leetcode.csproj", "{<guid>}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "Leetcode.Tests", "tests\Leetcode.Tests.csproj", "{<guid>}"
EndProject
Global
    GlobalSection(SolutionConfigurationPlatforms) = preSolution
        Debug|Any CPU = Debug|Any CPU
        Release|Any CPU = Release|Any CPU
    EndGlobalSection
    GlobalSection(ProjectConfigurationPlatforms) = postSolution
        {<guid>}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
        {<guid>}.Debug|Any CPU.Build.0 = Debug|Any CPU
        {<guid>}.Release|Any CPU.ActiveCfg = Release|Any CPU
        {<guid>}.Release|Any CPU.Build.0 = Release|Any CPU
    EndGlobalSection
EndGlobal
```

Use `dotnet new sln`, `dotnet sln add` to author it deterministically — see
the build prompt.

## `global.json`

```json
{
  "sdk": {
    "version": "8.0.0",
    "rollForward": "latestFeature"
  }
}
```

## `src/Leetcode.csproj` (sketch)

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.CodeAnalysis.NetAnalyzers" Version="8.0.0" PrivateAssets="all" />
    <PackageReference Include="Roslynator.Analyzers" Version="4.12.0" PrivateAssets="all" />
  </ItemGroup>
</Project>
```

## `tests/Leetcode.Tests.csproj` (sketch)

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <IsPackable>false</IsPackable>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.11.0" />
    <PackageReference Include="xunit" Version="2.9.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.8.0" />
    <PackageReference Include="coverlet.collector" Version="6.0.2" />
  </ItemGroup>
  <ItemGroup>
    <ProjectReference Include="..\src\Leetcode.csproj" />
  </ItemGroup>
</Project>
```

## Watch / continuous mode

```bash
dotnet watch test    # from inside the app
dotnet watch run     # if a program entry is needed

# from the root
pnpm dev:cs
pnpm test:cs
```

## Workflow

```bash
pnpm --filter csharp-dotnet-leetcode dev      # dotnet watch
pnpm --filter csharp-dotnet-leetcode test     # dotnet test
pnpm --filter csharp-dotnet-leetcode build    # dotnet build
pnpm --filter csharp-dotnet-leetcode format   # dotnet format
pnpm --filter csharp-dotnet-leetcode lint     # dotnet format --verify-no-changes
```

## Adding a problem

```bash
mkdir -p apps/csharp-dotnet-leetcode/src/Problems/0001_TwoSum
mkdir -p apps/csharp-dotnet-leetcode/tests/Problems/0001_TwoSum
$EDITOR apps/csharp-dotnet-leetcode/src/Problems/0001_TwoSum/Solution.cs
```

Parallel test at
`tests/Problems/0001_TwoSum/SolutionTests.cs`.