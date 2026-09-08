using Leetcode.Problems._0001_TwoSum;
using Xunit;

namespace Leetcode.Tests.Problems._0001_TwoSum;

public class SolutionTests
{
	[Fact]
	public void Solve_ReturnsIndicesThatSumToTarget()
	{
		var solution = new Solution();

		Assert.Equal(new[] { 0, 1 }, solution.Solve(new[] { 2, 7, 11, 15 }, 9));
		Assert.Equal(new[] { 1, 2 }, solution.Solve(new[] { 3, 2, 4 }, 6));
		Assert.Equal(new[] { 0, 1 }, solution.Solve(new[] { 3, 3 }, 6));
	}

	[Fact]
	public void Solve_HandlesNegativeNumbers()
	{
		var solution = new Solution();

		Assert.Equal(new[] { 0, 2 }, solution.Solve(new[] { -3, 4, 3, 90 }, 0));
	}

	[Fact]
	public void Solve_ThrowsWhenNoPairExists()
	{
		Assert.Throws<ArgumentException>(() => new Solution().Solve(new[] { 1, 2, 3 }, 100));
	}

	[Fact]
	public void Solve2_ReturnsIndicesThatSumToTarget()
	{
		var solution = new Solution();

		Assert.Equal(new[] { 0, 1 }, solution.Solve2(new[] { 2, 7, 11, 15 }, 9));
	}

	[Fact]
	public void Solve3_ReturnsIndicesThatSumToTarget()
	{
		var solution = new Solution();

		Assert.Equal(new[] { 0, 1 }, solution.Solve3(new[] { 2, 7, 11, 15 }, 9));
	}
}
