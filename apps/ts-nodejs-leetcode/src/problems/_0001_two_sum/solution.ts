/**
 * Two Sum (LeetCode #1).
 *
 * Return indices of the two numbers that add up to the target.
 *
 * Time: O(n) — single hash-map pass. Space: O(n).
 */
export const solve = (nums: number[], target: number): [number, number] => {
	const seen = new Map<number, number>()

	for (let i = 0; i < nums.length; i++) {
		const complement = (target - nums[i]) as number
		const j = seen.get(complement)

		if (j !== undefined) {
			return [j, i]
		}

		seen.set(nums[i] as number, i)
	}

	throw new Error('no two-sum solution')
}
