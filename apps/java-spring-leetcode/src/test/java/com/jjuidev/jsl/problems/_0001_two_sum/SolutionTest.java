package com.jjuidev.jsl.problems._0001_two_sum;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.Arrays;
import java.util.stream.Stream;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

class SolutionTest {

  private static final String[] SOLVERS = { "solve", "solve2", "solve3" };

  private static int[] run(String solver, int[] nums, int target) {
    Solution solution = new Solution();

    return switch (solver) {
      case "solve" -> solution.solve(nums, target);
      case "solve2" -> solution.solve2(nums, target);
      default -> solution.solve3(nums, target);
    };
  }

  /**
   * Đề bài ghi rõ "You can return the answer in any order", nên [0,1] và [1,0]
   * đều hợp lệ. Chuẩn hoá cặp index về thứ tự tăng dần trước khi so sánh, để test
   * bám đúng yêu cầu của đề thay vì chặt hơn.
   */
  private static int[] pair(int[] indices) {
    int[] sorted = indices.clone();
    Arrays.sort(sorted);
    return sorted;
  }

  /**
   * Mỗi case chỉ có đúng một cặp hợp lệ, đúng ràng buộc của đề. Chuỗi mô tả ghi
   * lại tình huống mà case đó canh giữ, để khi test đỏ là biết ngay hỏng chỗ nào.
   */
  private static Object[][] pairCases() {
    return new Object[][]{ { "ví dụ trong đề", new int[]{ 2, 7, 11, 15 }, 9, new int[]{ 0, 1 } },
        { "mảng chưa sắp xếp", new int[]{ 3, 2, 4 }, 6, new int[]{ 1, 2 } },
        { "hai phần tử trùng giá trị", new int[]{ 3, 3 }, 6, new int[]{ 0, 1 } },
        { "có giá trị trùng nhưng đáp án nằm chỗ khác", new int[]{ 3, 3, 4, 5 }, 9, new int[]{ 2, 3 } },
        { "số âm và target bằng 0", new int[]{ -3, 4, 3, 90 }, 0, new int[]{ 0, 2 } },
        { "toàn số âm, target âm", new int[]{ -1, -2, -3, -4 }, -6, new int[]{ 1, 3 } },
        { "mảng ngắn nhất, thứ tự giảm dần", new int[]{ 7, 2 }, 9, new int[]{ 0, 1 } },
        { "đáp án nằm cuối mảng", new int[]{ 1, 2, 3, 4, 5, 6 }, 11, new int[]{ 4, 5 } },
        { "đáp án nằm đầu mảng", new int[]{ 1, 2, 3, 4, 5 }, 3, new int[]{ 0, 1 } },
        { "giá trị 0 tại index 0", new int[]{ 0, 4, 3, 0 }, 0, new int[]{ 0, 3 } },
        { "giá trị lớn", new int[]{ 1_000_000_000, 1_000_000_000 }, 2_000_000_000, new int[]{ 0, 1 } } };
  }

  private static Object[][] throwCases() {
    return new Object[][]{ { "không tồn tại cặp nào", new int[]{ 1, 2, 3 }, 100 },
        { "phải nhân đôi một phần tử mới đủ target", new int[]{ 5, 1, 4 }, 10 } };
  }

  private static Stream<Arguments> solverAndPairCase() {
    return Arrays.stream(SOLVERS)
        .flatMap(solver -> Arrays.stream(pairCases()).map(c -> Arguments.of(solver, c[0], c[1], c[2], c[3])));
  }

  private static Stream<Arguments> solverAndThrowCase() {
    return Arrays.stream(SOLVERS)
        .flatMap(solver -> Arrays.stream(throwCases()).map(c -> Arguments.of(solver, c[0], c[1], c[2])));
  }

  @ParameterizedTest(name = "{0}: {1}")
  @MethodSource("solverAndPairCase")
  void returnsIndicesThatSumToTarget(String solver, String about, int[] nums, int target, int[] expected) {
    assertArrayEquals(expected, pair(run(solver, nums.clone(), target)));
  }

  @ParameterizedTest(name = "{0}: ném lỗi khi {1}")
  @MethodSource("solverAndThrowCase")
  void throwsWhenNoPairExists(String solver, String about, int[] nums, int target) {
    assertThrows(IllegalArgumentException.class, () -> run(solver, nums.clone(), target));
  }

  @ParameterizedTest(name = "{0}: không làm thay đổi mảng đầu vào")
  @ValueSource(strings = { "solve", "solve2", "solve3" })
  void doesNotMutateInput(String solver) {
    int[] nums = { 3, 2, 4 };

    try {
      run(solver, nums, 6);
    } catch (RuntimeException ignored) {
      // Lời giải đúng hay sai đã có các case phía trên canh. Nuốt lỗi ở đây
      // để test này chỉ đỏ vì đúng lý do của nó: đầu vào bị sửa.
    }

    assertArrayEquals(new int[]{ 3, 2, 4 }, nums);
  }
}
