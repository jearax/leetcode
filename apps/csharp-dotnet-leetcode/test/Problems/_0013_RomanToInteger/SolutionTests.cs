using Leetcode.Problems._0013_RomanToInteger;
using Xunit;

namespace Leetcode.Tests.Problems._0013_RomanToInteger;

public class SolutionTests
{
	public static TheoryData<string, int> Cases => new()
	{
		{ "III", 3 },
		{ "LVIII", 58 },
		{ "MCMXCIV", 1994 },
		{ "I", 1 },
		{ "M", 1000 },
		{ "IV", 4 },
		{ "IX", 9 },
		{ "CDXLIV", 444 },
		{ "MMMCMXCIX", 3999 },
		{ "MMMDCCCLXXXVIII", 3888 },
	};

	[Theory]
	[MemberData(nameof(Cases))]
	public void Solve_ConvertsRomanNumerals(string s, int expected)
	{
		Assert.Equal(expected, new Solution().Solve(s));
	}

	[Theory]
	[MemberData(nameof(Cases))]
	public void Solve2_ConvertsRomanNumerals(string s, int expected)
	{
		Assert.Equal(expected, new Solution().Solve2(s));
	}

	[Theory]
	[MemberData(nameof(Cases))]
	public void Solve3_ConvertsRomanNumerals(string s, int expected)
	{
		Assert.Equal(expected, new Solution().Solve3(s));
	}
}
