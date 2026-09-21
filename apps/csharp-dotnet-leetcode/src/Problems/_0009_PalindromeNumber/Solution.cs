namespace Leetcode.Problems._0009_PalindromeNumber;

/* ═══════════════════════════════════════════════════════════════════════
 * 🧩 LEETCODE #0009 · PALINDROME NUMBER · Easy
 * 🔗 https://leetcode.com/problems/palindrome-number/
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 📋 TÓM TẮT
 * Cho một số nguyên `n`, kiểm tra xem `n` đọc xuôi và đọc ngược có giống
 * nhau không. Số âm luôn KHÔNG phải palindrome vì dấu `-` chỉ nằm ở đầu.
 * Follow-up của đề: giải mà không đổi số sang chuỗi.
 *
 * 📥 INPUT → 📤 OUTPUT
 *   n : int      — số nguyên 32-bit cần kiểm tra
 *   → bool       — true nếu n là palindrome, ngược lại false
 *
 * 💡 VÍ DỤ
 *   Input : n = 121
 *   Output: true
 *   ← vì đọc từ trái sang phải và từ phải sang trái đều là 121
 *
 * ⏱ COMPLEXITY LADDER (các mức Time O() có thể giải được)
 *   Quy ước: n ở các mức dưới = SỐ CHỮ SỐ của đầu vào (tối đa 10), không
 *   phải giá trị. Cả ba cách cùng lớp Time; thang leo theo Space và độ an
 *   toàn overflow.
 *   1. O(n) time · O(n) space  — string conversion: đảo chuỗi rồi so sánh
 *   2. O(n) time · O(1) space  — reverse cả số bằng toán: dễ tràn số
 *   3. O(n/2) time · O(1) space — reverse nửa số rồi so hai nửa   ⭐ tối ưu
 *
 * 🔑 KEYWORDS / KỸ THUẬT
 *   Math · String · Two Pointers · Reverse Half Number
 *
 * ⚠️ RÀNG BUỘC ĐÁNG CHÚ Ý
 *   -2³¹ ≤ n ≤ 2³¹ - 1     — đảo nguyên số có thể vượt int (hint của đề)
 *   n < 0 → false           — cắt sớm trước khi xử lý
 *   n % 10 == 0 && n != 0   — số tận cùng bằng 0 không thể là palindrome
 * ═══════════════════════════════════════════════════════════════════════ */

public class Solution
{
	/// <summary>
	/// 🧠 Cách 1 — String Conversion.
	///
	/// Ý tưởng: đổi n sang chuỗi, đảo ngược chuỗi rồi so sánh với chuỗi gốc.
	///
	/// ⏱ Time: O(n) · 💾 Space: O(n).
	/// </summary>
	/// <param name="n">Số nguyên 32-bit cần kiểm tra.</param>
	/// <returns>True nếu n là palindrome, ngược lại false.</returns>
	public bool Solve(int n)
	{
		string nString = n.ToString();
		int i = 0, j = nString.Length - 1;

		while (i < j)
		{
			if (nString[i] != nString[j])
			{
				return false;
			}

			i++;
			j--;
		}

		return true;
	}

	/// <summary>
	/// 🧠 Cách 2 — Reverse Full Number (toán học).
	///
	/// Ý tưởng: bóc từng chữ số cuối bằng % 10 và / 10 để dựng số đảo ngược,
	/// rồi so sánh số đảo với n ban đầu. Chú ý khả năng tràn int.
	///
	/// ⏱ Time: O(n) · 💾 Space: O(1).
	/// </summary>
	/// <param name="n">Số nguyên 32-bit cần kiểm tra.</param>
	/// <returns>True nếu n là palindrome, ngược lại false.</returns>
	public bool Solve2(int n)
	{
		if (n < 0)
		{
			return false;
		}

		long reversed = 0; // chỉ biến này có thể vượt int (tối đa 7463847412)
		int original = n;

		while (n > 0)
		{
			int digit = n % 10;

			reversed = reversed * 10 + digit;
			n /= 10;
		}

		return original == reversed;
	}

	/// <summary>
	/// 🧠 Cách 3 — Reverse Half Number.
	///
	/// Ý tưởng: chỉ đảo nửa sau của số cho tới khi nửa đảo &gt;= phần còn lại,
	/// rồi so hai nửa (số lẻ chữ số thì bỏ chữ số giữa). Không bao giờ tràn.
	///
	/// ⏱ Time: O(n/2) · 💾 Space: O(1).
	/// </summary>
	/// <param name="n">Số nguyên 32-bit cần kiểm tra.</param>
	/// <returns>True nếu n là palindrome, ngược lại false.</returns>
	public bool Solve3(int n)
	{
		if (n < 0)
		{
			return false;
		}

		if (n % 10 == 0 && n != 0)
		{
			return false;
		}

		int reversedHalf = 0; // int là đủ: không bao giờ vượt input ban đầu

		while (n > reversedHalf)
		{
			int digit = n % 10;

			reversedHalf = reversedHalf * 10 + digit;
			n /= 10;
		}

		return n == reversedHalf || n == reversedHalf / 10;
	}
}
