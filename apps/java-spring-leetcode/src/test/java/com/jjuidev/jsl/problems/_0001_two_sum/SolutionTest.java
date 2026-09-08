package com.jjuidev.jsl.problems._0001_two_sum;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  void solveReturnsIndicesThatSumToTarget() {
    Solution solution = new Solution();

    assertArrayEquals(new int[]{ 0, 1 }, solution.solve(new int[]{ 2, 7, 11, 15 }, 9));
    assertArrayEquals(new int[]{ 1, 2 }, solution.solve(new int[]{ 3, 2, 4 }, 6));
    assertArrayEquals(new int[]{ 0, 1 }, solution.solve(new int[]{ 3, 3 }, 6));
  }

  @Test
  void solveHandlesNegativeNumbers() {
    Solution solution = new Solution();

    assertArrayEquals(new int[]{ 0, 2 }, solution.solve(new int[]{ -3, 4, 3, 90 }, 0));
  }

  @Test
  void solveThrowsWhenNoPairExists() {
    Solution solution = new Solution();

    assertThrows(IllegalArgumentException.class, () -> solution.solve(new int[]{ 1, 2, 3 }, 100));
  }

  @Test
  void solve2ReturnsIndicesThatSumToTarget() {
    Solution solution = new Solution();

    assertArrayEquals(new int[]{ 0, 1 }, solution.solve2(new int[]{ 2, 7, 11, 15 }, 9));
  }

  @Test
  void solve3ReturnsIndicesThatSumToTarget() {
    Solution solution = new Solution();

    assertArrayEquals(new int[]{ 0, 1 }, solution.solve3(new int[]{ 2, 7, 11, 15 }, 9));
  }
}
