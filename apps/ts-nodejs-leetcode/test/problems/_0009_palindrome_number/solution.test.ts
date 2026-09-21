import { describe, expect, it } from 'vitest'

import { solve, solve2, solve3 } from '@/problems/_0009_palindrome_number/solution.js'

const solves = {
	solve,
	solve2,
	solve3
} as const

describe('0009 palindrome-number', () => {
	for (const [name, solveFn] of Object.entries(solves)) {
		describe(name, () => {
			it('returns true for palindrome numbers', () => {
				expect(solveFn(121)).toBe(true)
				expect(solveFn(1221)).toBe(true)
				expect(solveFn(1000000001)).toBe(true)
			})

			it('returns false for non-palindrome numbers', () => {
				expect(solveFn(123)).toBe(false)
				expect(solveFn(1000021)).toBe(false)
				expect(solveFn(2147483647)).toBe(false)
			})

			it('returns false for negative numbers', () => {
				expect(solveFn(-121)).toBe(false)
				expect(solveFn(-101)).toBe(false)
			})

			it('returns false when the number ends with zero', () => {
				expect(solveFn(10)).toBe(false)
				expect(solveFn(100)).toBe(false)
			})

			it('handles single digit numbers', () => {
				expect(solveFn(0)).toBe(true)
				expect(solveFn(7)).toBe(true)
			})
		})
	}
})
