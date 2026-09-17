using Leetcode.Problems._0001_TwoSum;

namespace Leetcode.Tests.Problems._0001_TwoSum;

public class SolutionTests
{
	private static readonly string[] Solvers = ["Solve", "Solve2", "Solve3"];

	private static int[] Run(string solver, int[] nums, int target)
	{
		var solution = new Solution();

		return solver switch
		{
			"Solve" => solution.Solve(nums, target),
			"Solve2" => solution.Solve2(nums, target),
			_ => solution.Solve3(nums, target),
		};
	}

	/// <summary>
	/// Đề bài ghi rõ "You can return the answer in any order", nên [0,1] và [1,0]
	/// đều hợp lệ. Chuẩn hoá cặp index về thứ tự tăng dần trước khi so sánh, để
	/// test bám đúng yêu cầu của đề thay vì chặt hơn.
	/// </summary>
	private static int[] Pair(int[] indices)
	{
		var sorted = (int[])indices.Clone();
		Array.Sort(sorted);
		return sorted;
	}

	/// <summary>
	/// Mỗi case chỉ có đúng một cặp hợp lệ, đúng ràng buộc của đề. Chuỗi mô tả ghi
	/// lại tình huống mà case đó canh giữ, để khi test đỏ là biết ngay hỏng chỗ nào.
	/// </summary>
	private static readonly (string About, int[] Nums, int Target, int[] Expected)[] PairCases =
	[
		("ví dụ trong đề", [2, 7, 11, 15], 9, [0, 1]),
		("mảng chưa sắp xếp", [3, 2, 4], 6, [1, 2]),
		("hai phần tử trùng giá trị", [3, 3], 6, [0, 1]),
		("có giá trị trùng nhưng đáp án nằm chỗ khác", [3, 3, 4, 5], 9, [2, 3]),
		("số âm và target bằng 0", [-3, 4, 3, 90], 0, [0, 2]),
		("toàn số âm, target âm", [-1, -2, -3, -4], -6, [1, 3]),
		("mảng ngắn nhất, thứ tự giảm dần", [7, 2], 9, [0, 1]),
		("đáp án nằm cuối mảng", [1, 2, 3, 4, 5, 6], 11, [4, 5]),
		("đáp án nằm đầu mảng", [1, 2, 3, 4, 5], 3, [0, 1]),
		("giá trị 0 tại index 0", [0, 4, 3, 0], 0, [0, 3]),
		("giá trị lớn", [1_000_000_000, 1_000_000_000], 2_000_000_000, [0, 1]),
	];

	private static readonly (string About, int[] Nums, int Target)[] ThrowCases =
	[
		("không tồn tại cặp nào", [1, 2, 3], 100),
		("phải nhân đôi một phần tử mới đủ target", [5, 1, 4], 10),
	];

	public static TheoryData<string, string, int[], int, int[]> SolverAndPairCase()
	{
		var data = new TheoryData<string, string, int[], int, int[]>();

		foreach (var solver in Solvers)
		{
			foreach (var (about, nums, target, expected) in PairCases)
			{
				data.Add(solver, about, nums, target, expected);
			}
		}

		return data;
	}

	public static TheoryData<string, string, int[], int> SolverAndThrowCase()
	{
		var data = new TheoryData<string, string, int[], int>();

		foreach (var solver in Solvers)
		{
			foreach (var (about, nums, target) in ThrowCases)
			{
				data.Add(solver, about, nums, target);
			}
		}

		return data;
	}

	public static TheoryData<string> SolverNames() => [.. Solvers];

	[Theory]
	[MemberData(nameof(SolverAndPairCase))]
	public void ReturnsIndicesThatSumToTarget(string solver, string about, int[] nums, int target, int[] expected)
	{
		int[] actual = Pair(Run(solver, (int[])nums.Clone(), target));

		Assert.True(
			expected.SequenceEqual(actual),
			$"{solver} — {about}: mong đợi [{string.Join(", ", expected)}], nhận [{string.Join(", ", actual)}]");
	}

	[Theory]
	[MemberData(nameof(SolverAndThrowCase))]
	public void ThrowsWhenNoPairExists(string solver, string about, int[] nums, int target)
	{
		Exception? thrown = Record.Exception(() => Run(solver, (int[])nums.Clone(), target));

		Assert.True(
			thrown is ArgumentException,
			$"{solver} — {about}: mong đợi ArgumentException, nhận {thrown?.GetType().Name ?? "không có exception"}");
	}

	[Theory]
	[MemberData(nameof(SolverNames))]
	public void DoesNotMutateInput(string solver)
	{
		int[] nums = [3, 2, 4];

		// Lời giải đúng hay sai đã có các case phía trên canh. Nuốt lỗi ở đây
		// để test này chỉ đỏ vì đúng lý do của nó: đầu vào bị sửa.
		Record.Exception(() => Run(solver, nums, 6));

		Assert.Equal([3, 2, 4], nums);
	}
}
