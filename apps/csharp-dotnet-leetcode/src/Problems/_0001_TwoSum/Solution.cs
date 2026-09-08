namespace Leetcode.Problems._0001_TwoSum;

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
 *   nums   : int[]    — mảng số nguyên đầu vào
 *   target : int      — tổng cần tìm
 *   → int[]           — chỉ số [i, j] của hai số hợp lệ
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

public class Solution
{
	/// <summary>
	/// 🧠 Cách 1 — Brute Force.
	///
	/// Ý tưởng: duyệt mọi cặp chỉ số (i, j) với i &lt; j, trả về cặp đầu tiên
	/// có nums[i] + nums[j] == target.
	///
	/// ⏱ Time: O(n²) · 💾 Space: O(1).
	/// </summary>
	/// <param name="nums">Mảng số nguyên đầu vào.</param>
	/// <param name="target">Tổng cần tìm.</param>
	/// <returns>Chỉ số [i, j] của hai phần tử cộng lại bằng target.</returns>
	/// <exception cref="ArgumentException">Khi không tồn tại cặp hợp lệ.</exception>
	public int[] Solve(int[] nums, int target)
	{
		throw new NotImplementedException("chưa giải — implement tại đây");
	}

	/// <summary>
	/// 🧠 Cách 2 — Sort + Two Pointers.
	///
	/// Ý tưởng: cặp (value, originalIndex) rồi sort theo value; hai con trỏ
	/// đi từ hai đầu, nếu tổng nhỏ thì tăng trái, lớn thì giảm phải; trả về
	/// originalIndex để giữ đúng thứ tự gốc.
	///
	/// ⏱ Time: O(n·log n) · 💾 Space: O(n).
	/// </summary>
	/// <param name="nums">Mảng số nguyên đầu vào.</param>
	/// <param name="target">Tổng cần tìm.</param>
	/// <returns>Chỉ số [i, j] của hai phần tử cộng lại bằng target.</returns>
	/// <exception cref="ArgumentException">Khi không tồn tại cặp hợp lệ.</exception>
	public int[] Solve2(int[] nums, int target)
	{
		throw new NotImplementedException("chưa giải — implement tại đây");
	}

	/// <summary>
	/// 🧠 Cách 3 — Hash Table (một lượt duyệt).
	///
	/// Ý tưởng: với mỗi nums[i], tra complement = target - nums[i] trong map;
	/// chưa có thì lưu nums[i] → i vào map rồi đi tiếp.
	///
	/// ⏱ Time: O(n) · 💾 Space: O(n).
	/// </summary>
	/// <param name="nums">Mảng số nguyên đầu vào.</param>
	/// <param name="target">Tổng cần tìm.</param>
	/// <returns>Chỉ số [i, j] của hai phần tử cộng lại bằng target.</returns>
	/// <exception cref="ArgumentException">Khi không tồn tại cặp hợp lệ.</exception>
	public int[] Solve3(int[] nums, int target)
	{
		throw new NotImplementedException("chưa giải — implement tại đây");
	}
}
