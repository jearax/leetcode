import { describe, expect, it } from 'vitest'

import { solve } from '@/problems/0001-two-sum/solution.js'

describe('0001 two-sum', () => {
	it('returns the indices that sum to the target', () => {
		expect(solve([2, 7, 11, 15], 9)).toEqual([0, 1])
		expect(solve([3, 2, 4], 6)).toEqual([1, 2])
		expect(solve([3, 3], 6)).toEqual([0, 1])
	})

	it('throws when no pair exists', () => {
		expect(() => solve([1, 2, 3], 100)).toThrow('no two-sum solution')
	})
})
