using Leetcode.Problems._0009_PalindromeNumber;
using Xunit;

namespace Leetcode.Tests.Problems._0009_PalindromeNumber;

public class SolutionTests
{
	[Fact]
	public void Solve_ReturnsTrueForPalindromeNumbers()
	{
		var solution = new Solution();

		Assert.True(solution.Solve(121));
		Assert.True(solution.Solve(1221));
		Assert.True(solution.Solve(1000000001));
	}

	[Fact]
	public void Solve_ReturnsFalseForNonPalindromeNumbers()
	{
		var solution = new Solution();

		Assert.False(solution.Solve(123));
		Assert.False(solution.Solve(1000021));
		Assert.False(solution.Solve(2147483647));
	}

	[Fact]
	public void Solve_ReturnsFalseForNegativeNumbers()
	{
		var solution = new Solution();

		Assert.False(solution.Solve(-121));
		Assert.False(solution.Solve(-101));
	}

	[Fact]
	public void Solve_ReturnsFalseWhenNumberEndsWithZero()
	{
		var solution = new Solution();

		Assert.False(solution.Solve(10));
		Assert.False(solution.Solve(100));
	}

	[Fact]
	public void Solve_HandlesSingleDigitNumbers()
	{
		var solution = new Solution();

		Assert.True(solution.Solve(0));
		Assert.True(solution.Solve(7));
	}

	[Fact()]
	public void Solve2_ReturnsTrueForPalindromeNumbers()
	{
		var solution = new Solution();

		Assert.True(solution.Solve2(121));
		Assert.True(solution.Solve2(1221));
		Assert.True(solution.Solve2(1000000001));
	}

	[Fact()]
	public void Solve2_ReturnsFalseForNonPalindromeNumbers()
	{
		var solution = new Solution();

		Assert.False(solution.Solve2(123));
		Assert.False(solution.Solve2(1000021));
		Assert.False(solution.Solve2(2147483647));
	}

	[Fact()]
	public void Solve2_ReturnsFalseForNegativeNumbers()
	{
		var solution = new Solution();

		Assert.False(solution.Solve2(-121));
		Assert.False(solution.Solve2(-101));
	}

	[Fact()]
	public void Solve2_ReturnsFalseWhenNumberEndsWithZero()
	{
		var solution = new Solution();

		Assert.False(solution.Solve2(10));
		Assert.False(solution.Solve2(100));
	}

	[Fact]
	public void Solve2_HandlesSingleDigitNumbers()
	{
		var solution = new Solution();

		Assert.True(solution.Solve2(0));
		Assert.True(solution.Solve2(7));
	}

	[Fact()]
	public void Solve3_ReturnsTrueForPalindromeNumbers()
	{
		var solution = new Solution();

		Assert.True(solution.Solve3(121));
		Assert.True(solution.Solve3(1221));
		Assert.True(solution.Solve3(1000000001));
	}

	[Fact()]
	public void Solve3_ReturnsFalseForNonPalindromeNumbers()
	{
		var solution = new Solution();

		Assert.False(solution.Solve3(123));
		Assert.False(solution.Solve3(1000021));
		Assert.False(solution.Solve3(2147483647));
	}

	[Fact()]
	public void Solve3_ReturnsFalseForNegativeNumbers()
	{
		var solution = new Solution();

		Assert.False(solution.Solve3(-121));
		Assert.False(solution.Solve3(-101));
	}

	[Fact()]
	public void Solve3_ReturnsFalseWhenNumberEndsWithZero()
	{
		var solution = new Solution();

		Assert.False(solution.Solve3(10));
		Assert.False(solution.Solve3(100));
	}

	[Fact()]
	public void Solve3_HandlesSingleDigitNumbers()
	{
		var solution = new Solution();

		Assert.True(solution.Solve3(0));
		Assert.True(solution.Solve3(7));
	}
}
