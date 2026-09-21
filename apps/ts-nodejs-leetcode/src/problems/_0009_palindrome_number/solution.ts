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
 *   n : number   — số nguyên 32-bit cần kiểm tra
 *   → boolean    — true nếu n là palindrome, ngược lại false
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
 *   -2³¹ ≤ n ≤ 2³¹ - 1     — đảo nguyên số có thể vượt 32-bit (hint của đề)
 *   n < 0 → false           — cắt sớm trước khi xử lý
 *   n % 10 === 0 && n !== 0 — số tận cùng bằng 0 không thể là palindrome
 * ═══════════════════════════════════════════════════════════════════════ */

/**
 * 🧠 Cách 1 — String Conversion
 *
 * Ý tưởng: đổi n sang chuỗi, đảo ngược chuỗi rồi so sánh với chuỗi gốc.
 *
 * ⏱ Time: O(n) · 💾 Space: O(n)
 *
 * @param n — số nguyên 32-bit cần kiểm tra
 * @returns true nếu n là palindrome, ngược lại false
 */
export const solve = (n: number): boolean => {
	const nString = n.toString()

	let i = 0
	let j = nString.length - 1

	while (i < j) {
		if (nString[i] !== nString[j]) {
			return false
		}

		i++
		j--
	}

	return true
}

/**
 * 🧠 Cách 2 — Reverse Full Number (toán học)
 *
 * Ý tưởng: bóc từng chữ số cuối bằng % 10 và / 10 để dựng số đảo ngược,
 * rồi so sánh số đảo với n ban đầu. Chú ý khả năng tràn 32-bit.
 *
 * ⏱ Time: O(n) · 💾 Space: O(1)
 *
 * @param n — số nguyên 32-bit cần kiểm tra
 * @returns true nếu n là palindrome, ngược lại false
 */
export const solve2 = (n: number): boolean => {
	if (n < 0) {
		return false
	}

	const original = n
	let reversed = 0

	while (n > 0) {
		const digital = n % 10

		reversed = reversed * 10 + digital
		n = Math.trunc(n / 10)
	}

	return reversed === original
}

/**
 * 🧠 Cách 3 — Reverse Half Number
 *
 * Ý tưởng: chỉ đảo nửa sau của số cho tới khi nửa đảo ≥ phần còn lại, rồi
 * so hai nửa (số lẻ chữ số thì bỏ chữ số giữa). Không bao giờ tràn số.
 *
 * ⏱ Time: O(n/2) · 💾 Space: O(1)
 *
 * @param n — số nguyên 32-bit cần kiểm tra
 * @returns true nếu n là palindrome, ngược lại false
 */
export const solve3 = (n: number): boolean => {
	if (n < 0) {
		return false
	}

	if (n % 10 === 0 && n !== 0) {
		return false
	}

	let reversed = 0

	while (n > reversed) {
		const digital = n % 10

		reversed = reversed * 10 + digital
		n = Math.trunc(n / 10)
	}

	return n === reversed || n === Math.trunc(reversed / 10)
}
