using Leetcode.Problems._0001_TwoSum;
using Xunit;

namespace Leetcode.Tests.Problems._0001_TwoSum;

public class SolutionTests
{
	[Fact]
	public void ReturnsIndicesThatSumToTarget()
	{
		var solution = new Solution();

		Assert.Equal(new[] { 0, 1 }, solution.Solve(new[] { 2, 7, 11, 15 }, 9));
		Assert.Equal(new[] { 1, 2 }, solution.Solve(new[] { 3, 2, 4 }, 6));
		Assert.Equal(new[] { 0, 1 }, solution.Solve(new[] { 3, 3 }, 6));
	}

	[Fact]
	public void ThrowsWhenNoPairExists()
	{
		var solution = new Solution();

		Assert.Throws<ArgumentException>(() => solution.Solve(new[] { 1, 2, 3 }, 100));
	}
}