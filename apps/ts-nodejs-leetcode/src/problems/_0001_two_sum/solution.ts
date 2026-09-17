/* ═══════════════════════════════════════════════════════════════════════
 * 🧩 LEETCODE #0001 · TWO SUM · Easy
 * 🔗 https://leetcode.com/problems/two-sum/
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 📋 TÓM TẮT
 * Cho mảng số nguyên `nums` và số nguyên `target`, trả về chỉ số của hai
 * số cộng lại đúng bằng `target`. Luôn tồn tại đúng một đáp án, mỗi phần
 * tử chỉ được dùng một lần.
 *
 * 📥 INPUT → 📤 OUTPUT
 *   nums   : number[]   — mảng số nguyên đầu vào
 *   target : number     — tổng cần tìm
 *   → [number, number]  — chỉ số [i, j] của hai số hợp lệ
 *
 * 💡 VÍ DỤ
 *   Input : nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1]
 *   ← vì nums[0] + nums[1] = 2 + 7 = 9
 *
 * ⏱ COMPLEXITY LADDER (các mức Time O() có thể giải được)
 *   1. O(n²)      — brute force: duyệt mọi cặp (i, j)
 *   2. O(n·log n) — sort + two pointers (mất thứ tự gốc, phải lưu index)
 *   3. O(n)       — hash table một lượt duyệt: tra complement   ⭐ tối ưu
 *
 * 🔑 KEYWORDS / KỸ THUẬT
 *   Array · Hash Table · One-Pass Hash Map
 *
 * ⚠️ RÀNG BUỘC ĐÁNG CHÚ Ý
 *   2 ≤ nums.length ≤ 10⁴      — O(n²) vẫn AC được nhưng chậm
 *   Chỉ tồn tại một đáp án      — được phép throw nếu không tìm thấy
 * ═══════════════════════════════════════════════════════════════════════ */

/**
 * 🧠 Cách 1 — Brute Force
 *
 * Ý tưởng: duyệt mọi cặp chỉ số (i, j) với i < j, trả về cặp đầu tiên
 * có nums[i] + nums[j] === target.
 *
 * ⏱ Time: O(n²) · 💾 Space: O(1)
 *
 * @param nums   — mảng số nguyên đầu vào
 * @param target — tổng cần tìm
 * @returns chỉ số [i, j] của hai phần tử cộng lại bằng target
 * @throws Error khi không tồn tại cặp nào hợp lệ
 */
export const solve = (nums: number[], target: number): [number, number] => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}

	throw new Error('Constraints guarantee that there is exactly one solution.')
}

/**
 * 🧠 Cách 2 — Sort + Two Pointers
 *
 * Ý tưởng: cặp (value, originalIndex) rồi sort theo value; hai con trỏ
 * đi từ hai đầu, nếu tổng nhỏ thì tăng trái, lớn thì giảm phải; trả về
 * originalIndex của cặp tìm được — thứ tự bám theo value đã sort nên
 * KHÔNG đảm bảo tăng dần (vd nums=[7,2], target=9 → trả [1,0]).
 *
 * ⏱ Time: O(n·log n) · 💾 Space: O(n)
 *
 * @param nums   — mảng số nguyên đầu vào
 * @param target — tổng cần tìm
 * @returns chỉ số [i, j] của hai phần tử cộng lại bằng target
 * @throws Error khi không tồn tại cặp nào hợp lệ
 */
export const solve2 = (nums: number[], target: number): [number, number] => {
	const numsWithIndices = nums.map((value, index) => {
		return [value, index]
	})

	numsWithIndices.sort((a, b) => {
		return a[0] - b[0]
	})

	let left = 0,
		right = numsWithIndices.length - 1

	while (left < right) {
		const sum = numsWithIndices[left][0] + numsWithIndices[right][0]

		if (sum === target) {
			return [numsWithIndices[left][1], numsWithIndices[right][1]]
		} else if (sum < target) {
			left++
		} else {
			right--
		}
	}

	throw new Error('Constraints guarantee that there is exactly one solution.')
}

/**
 * 🧠 Cách 3 — Hash Table (một lượt duyệt)
 *
 * Ý tưởng: với mỗi nums[i], tra complement = target - nums[i] trong map;
 * chưa có thì lưu nums[i] → i vào map rồi đi tiếp.
 *
 * ⏱ Time: O(n) · 💾 Space: O(n)
 *
 * @param nums   — mảng số nguyên đầu vào
 * @param target — tổng cần tìm
 * @returns chỉ số [i, j] của hai phần tử cộng lại bằng target
 * @throws Error khi không tồn tại cặp nào hợp lệ
 */
export const solve3 = (nums: number[], target: number): [number, number] => {
	const valueToIndex = new Map<number, number>()

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		const j = valueToIndex.get(complement)

		if (j !== undefined) {
			return [i, j]
		}

		valueToIndex.set(nums[i], i)
	}

	throw new Error('Constraints guarantee that there is exactly one solution.')
}
