# Problem template (C# .NET)

Each problem lives in `src/Problems/<Id>-<Slug>/` with this shape:

```csharp
namespace Leetcode.Problems.<Id>_<Slug>;

public class Solution {
    public Output Solve(Input input) {
        // ...
    }
}
```

```csharp
using Leetcode.Problems.<Id>_<Slug>;
using Xunit;

namespace Leetcode.Tests.Problems;

public class SolutionTests {
    [Fact]
    public void Example1() {
        Assert.Equal(expected, new Solution().Solve(input));
    }
}
```