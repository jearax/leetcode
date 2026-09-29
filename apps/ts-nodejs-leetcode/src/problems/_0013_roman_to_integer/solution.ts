/* ═══════════════════════════════════════════════════════════════════════
 * 🧩 LEETCODE #0013 · ROMAN TO INTEGER · Easy
 * 🔗 https://leetcode.com/problems/roman-to-integer/
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 📋 TÓM TẮT
 * Cho chuỗi số La Mã `s` (chỉ gồm I, V, X, L, C, D, M), đổi sang số
 * nguyên. Thường các ký hiệu được cộng dồn từ lớn đến nhỏ, nhưng khi một
 * ký hiệu nhỏ đứng TRƯỚC ký hiệu lớn hơn (IV, IX, XL, XC, CD, CM) thì nó
 * bị trừ đi.
 *
 * 📥 INPUT → 📤 OUTPUT
 *   s : string  — số La Mã hợp lệ
 *   → number    — giá trị số nguyên tương ứng
 *
 * 💡 VÍ DỤ
 *   Input : s = "MCMXCIV"
 *   Output: 1994
 *   ← vì M = 1000, CM = 900, XC = 90, IV = 4
 *
 * ⏱ COMPLEXITY LADDER (các mức Time O() có thể giải được)
 *   1. O(n) — replace 6 cặp trừ (IV, IX, …) thành token rồi cộng dồn
 *   2. O(n) — duyệt trái → phải: so ký hiệu hiện tại với ký hiệu kế tiếp
 *   3. O(n) — duyệt phải → trái: nhỏ hơn giá trị trước đó thì trừ   ⭐ tối ưu
 *   ℹ️ Không có class nhanh hơn O(n) — phải đọc mọi ký tự; các cách chỉ
 *      khác chiến lược (số lượt duyệt, cách phát hiện cặp trừ).
 *
 * 🔑 KEYWORDS / KỸ THUẬT
 *   String · Hash Table · Math · Simulation
 *
 * ⚠️ RÀNG BUỘC ĐÁNG CHÚ Ý
 *   1 ≤ s.length ≤ 15                 — input rất nhỏ, mọi cách O(n) đều AC
 *   s hợp lệ, giá trị trong [1, 3999] — không cần validate / xử lý lỗi
 * ═══════════════════════════════════════════════════════════════════════ */

/** Bảng tra giá trị của 7 ký hiệu La Mã — dùng chung, tạo một lần. */
const ROMAN_VALUES: Record<string, number> = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
};

/** 6 cặp trừ → dạng chỉ có phép cộng, cùng giá trị. */
const SUBTRACTIVE_REPLACEMENTS: Record<string, string> = {
	IV: 'IIII', // 4
	IX: 'VIIII', // 9
	XL: 'XXXX', // 40
	XC: 'LXXXX', // 90
	CD: 'CCCC', // 400
	CM: 'DCCCC' // 900
};

/**
 * 🧠 Cách 1 — Replace Subtractive Pairs
 *
 * Ý tưởng: thay 6 cặp trừ (IV, IX, XL, XC, CD, CM) bằng giá trị/token
 * riêng, sau đó chỉ việc cộng dồn giá trị từng ký hiệu.
 *
 * ⏱ Time: O(n) · 💾 Space: O(n)
 *
 * @param s — số La Mã hợp lệ
 * @returns giá trị số nguyên tương ứng
 */
export const solve = (s: string): number => {
	let replacementsString = s;

	Object.entries(SUBTRACTIVE_REPLACEMENTS).forEach(([pair, replacement]) => {
		replacementsString = replacementsString.replaceAll(pair, replacement);
	});

	return replacementsString.split('').reduce((total, char) => total + ROMAN_VALUES[char], 0);
};

/**
 * 🧠 Cách 2 — Left-to-Right with Lookahead
 *
 * Ý tưởng: duyệt trái → phải; nếu giá trị s[i] nhỏ hơn giá trị s[i + 1]
 * thì trừ s[i], ngược lại cộng s[i].
 *
 * ⏱ Time: O(n) · 💾 Space: O(1)
 *
 * @param s — số La Mã hợp lệ
 * @returns giá trị số nguyên tương ứng
 */
export const solve2 = (s: string): number => {
	let total = 0;

	for (let i = 0; i < s.length; i++) {
		const current = ROMAN_VALUES[s[i]];
		const next = i + 1 < s.length ? ROMAN_VALUES[s[i + 1]] : 0;

		if (current < next) {
			total -= current;
		} else {
			total += current;
		}
	}

	return total;
};

/**
 * 🧠 Cách 3 — Right-to-Left Scan
 *
 * Ý tưởng: duyệt phải → trái, nhớ giá trị vừa xét; ký hiệu hiện tại nhỏ
 * hơn giá trị đó thì trừ, ngược lại cộng.
 *
 * ⏱ Time: O(n) · 💾 Space: O(1)
 *
 * @param s — số La Mã hợp lệ
 * @returns giá trị số nguyên tương ứng
 */
export const solve3 = (s: string): number => {
	let total = 0;

	let i = s.length - 1;
	let previous = 0;

	while (i >= 0) {
		const current = ROMAN_VALUES[s[i]];

		if (current < previous) {
			total -= current;
		} else {
			total += current;
		}

		previous = current;
		i--;
	}

	return total;
};
