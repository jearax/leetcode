import { describe, expect, it } from 'vitest'

import { solve, solve2, solve3 } from '@/problems/_0001_two_sum/solution.js'

const solves = {
	solve,
	solve2,
	solve3
} as const

/**
 * Đề bài ghi rõ "You can return the answer in any order", nên [0,1] và [1,0]
 * đều hợp lệ. Chuẩn hoá cặp index về thứ tự tăng dần trước khi so sánh, để
 * test bám đúng yêu cầu của đề thay vì chặt hơn.
 */
const pair = (indices: [number, number]): number[] => [...indices].sort((a, b) => a - b)

type Case = {
	about: string
	nums: number[]
	target: number
	expected: number[]
}

/**
 * Mỗi case chỉ có đúng một cặp hợp lệ, đúng ràng buộc của đề. `about` ghi lại
 * tình huống mà case đó canh giữ, để khi test đỏ là biết ngay hỏng chỗ nào.
 */
const cases: Case[] = [
	{
		about: 'ví dụ trong đề',
		nums: [2, 7, 11, 15],
		target: 9,
		expected: [0, 1]
	},
	{
		about: 'mảng chưa sắp xếp',
		nums: [3, 2, 4],
		target: 6,
		expected: [1, 2]
	},
	{
		about: 'hai phần tử trùng giá trị',
		nums: [3, 3],
		target: 6,
		expected: [0, 1]
	},
	{
		about: 'có giá trị trùng nhưng đáp án nằm chỗ khác',
		nums: [3, 3, 4, 5],
		target: 9,
		expected: [2, 3]
	},
	{
		about: 'số âm và target bằng 0',
		nums: [-3, 4, 3, 90],
		target: 0,
		expected: [0, 2]
	},
	{
		about: 'toàn số âm, target âm',
		nums: [-1, -2, -3, -4],
		target: -6,
		expected: [1, 3]
	},
	{
		about: 'mảng ngắn nhất, thứ tự giảm dần',
		nums: [7, 2],
		target: 9,
		expected: [0, 1]
	},
	{
		about: 'đáp án nằm cuối mảng',
		nums: [1, 2, 3, 4, 5, 6],
		target: 11,
		expected: [4, 5]
	},
	{
		about: 'đáp án nằm đầu mảng',
		nums: [1, 2, 3, 4, 5],
		target: 3,
		expected: [0, 1]
	},
	{
		about: 'giá trị 0 tại index 0',
		nums: [0, 4, 3, 0],
		target: 0,
		expected: [0, 3]
	},
	{
		about: 'giá trị lớn',
		nums: [1_000_000_000, 1_000_000_000],
		target: 2_000_000_000,
		expected: [0, 1]
	}
]

const throwCases: Omit<Case, 'expected'>[] = [
	{
		about: 'không tồn tại cặp nào',
		nums: [1, 2, 3],
		target: 100
	},
	{
		about: 'phải nhân đôi một phần tử mới đủ target',
		nums: [5, 1, 4],
		target: 10
	}
]

describe('0001 two-sum', () => {
	for (const [name, solveFn] of Object.entries(solves)) {
		describe(name, () => {
			for (const { about, nums, target, expected } of cases) {
				it(`${about} — nums=[${nums}] target=${target}`, () => {
					expect(pair(solveFn([...nums], target))).toEqual(expected)
				})
			}

			for (const { about, nums, target } of throwCases) {
				it(`ném lỗi khi ${about}`, () => {
					expect(() => solveFn([...nums], target)).toThrow()
				})
			}

			it('không làm thay đổi mảng đầu vào', () => {
				const nums = [3, 2, 4]

				try {
					solveFn(nums, 6)
				} catch {
					// Lời giải đúng hay sai đã có các case phía trên canh. Nuốt lỗi ở đây
					// để test này chỉ đỏ vì đúng lý do của nó: đầu vào bị sửa.
				}

				expect(nums).toEqual([3, 2, 4])
			})
		})
	}
})
