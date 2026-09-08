import { describe, expect, it } from 'vitest'

import { solve, solve2, solve3 } from '@/problems/_0001_two_sum/solution.js'

const solves = {
	solve,
	solve2,
	solve3
} as const

describe('0001 two-sum', () => {
	for (const [name, solveFn] of Object.entries(solves)) {
		describe(name, () => {
			it('returns the indices that sum to the target', () => {
				expect(solveFn([2, 7, 11, 15], 9)).toEqual([0, 1])
				expect(solveFn([3, 2, 4], 6)).toEqual([1, 2])
				expect(solveFn([3, 3], 6)).toEqual([0, 1])
			})

			it('handles negative numbers', () => {
				expect(solveFn([-3, 4, 3, 90], 0)).toEqual([0, 2])
			})

			it('throws when no pair exists', () => {
				expect(() => solveFn([1, 2, 3], 100)).toThrow()
			})
		})
	}
})
