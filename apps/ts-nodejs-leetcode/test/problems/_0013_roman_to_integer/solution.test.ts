import { describe, expect, it } from 'vitest';

import { solve, solve2, solve3 } from '@/problems/_0013_roman_to_integer/solution.js';

const solves = {
	solve,
	solve2,
	solve3
} as const;

describe('0013 roman-to-integer', () => {
	for (const [name, solveFn] of Object.entries(solves)) {
		describe(name, () => {
			it('converts the official examples', () => {
				expect(solveFn('III')).toBe(3);
				expect(solveFn('LVIII')).toBe(58);
				expect(solveFn('MCMXCIV')).toBe(1994);
			});

			it('handles a single symbol', () => {
				expect(solveFn('I')).toBe(1);
				expect(solveFn('M')).toBe(1000);
			});

			it('handles subtractive pairs', () => {
				expect(solveFn('IV')).toBe(4);
				expect(solveFn('IX')).toBe(9);
				expect(solveFn('CDXLIV')).toBe(444);
			});

			it('handles the maximum value and maximum length', () => {
				expect(solveFn('MMMCMXCIX')).toBe(3999);
				expect(solveFn('MMMDCCCLXXXVIII')).toBe(3888);
			});
		});
	}
});
