/**
 * Demo: Two-Sum.
 *
 * Given an array of integers and a target, return the indices of the two
 * numbers that add up to the target. This is the canonical LeetCode #1.
 *
 * Time:  O(n) — single hash-map pass.
 * Space: O(n) — store seen values + their indices.
 */
export function solve(nums: number[], target: number): [number, number] {
	const seen = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i] as number;
		const j = seen.get(complement);
		if (j !== undefined) return [j, i];
		seen.set(nums[i] as number, i);
	}
	throw new Error('no pair found');
}