using Leetcode.Problems._Demo;

Console.WriteLine("Hello, World!");

int[] input = [2, 7, 11, 15];
const int target = 9;
Console.WriteLine($"two-sum input: [{string.Join(", ", input)}], target: {target}");
Console.WriteLine(
	$"two-sum output: [{string.Join(", ", new Solution().Solve(input, target))}]"
);
