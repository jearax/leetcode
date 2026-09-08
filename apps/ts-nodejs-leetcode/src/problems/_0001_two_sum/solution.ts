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
	throw new Error('chưa giải — implement tại đây')
}

/**
 * 🧠 Cách 2 — Sort + Two Pointers
 *
 * Ý tưởng: cặp (value, originalIndex) rồi sort theo value; hai con trỏ
 * đi từ hai đầu, nếu tổng nhỏ thì tăng trái, lớn thì giảm phải; trả về
 * originalIndex để giữ đúng thứ tự gốc.
 *
 * ⏱ Time: O(n·log n) · 💾 Space: O(n)
 *
 * @param nums   — mảng số nguyên đầu vào
 * @param target — tổng cần tìm
 * @returns chỉ số [i, j] của hai phần tử cộng lại bằng target
 * @throws Error khi không tồn tại cặp nào hợp lệ
 */
export const solve2 = (nums: number[], target: number): [number, number] => {
	throw new Error('chưa giải — implement tại đây')
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
	throw new Error('chưa giải — implement tại đây')
}
