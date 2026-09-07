namespace Leetcode.Problems._Demo;

/// <summary>
/// Demo: Two-Sum (LeetCode #1). Time O(n), Space O(n).
/// </summary>
public class Solution
{
	public int[] Solve(int[] nums, int target)
	{
		var seen = new Dictionary<int, int>();

		for (var i = 0; i < nums.Length; i++)
		{
			var j = seen.GetValueOrDefault(target - nums[i], -1);

			if (j != -1)
			{
				return [j, i];
			}

			seen[nums[i]] = i;
		}

		throw new ArgumentException("no pair found");
	}
}
