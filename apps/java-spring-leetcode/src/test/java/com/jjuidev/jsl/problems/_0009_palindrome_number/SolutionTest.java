package com.jjuidev.jsl.problems._0009_palindrome_number;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  void solveReturnsTrueForPalindromeNumbers() {
    Solution solution = new Solution();

    assertTrue(solution.solve(121));
    assertTrue(solution.solve(1221));
    assertTrue(solution.solve(1000000001));
  }

  @Test
  void solveReturnsFalseForNonPalindromeNumbers() {
    Solution solution = new Solution();

    assertFalse(solution.solve(123));
    assertFalse(solution.solve(1000021));
    assertFalse(solution.solve(2147483647));
  }

  @Test
  void solveReturnsFalseForNegativeNumbers() {
    Solution solution = new Solution();

    assertFalse(solution.solve(-121));
    assertFalse(solution.solve(-101));
  }

  @Test
  void solveReturnsFalseWhenNumberEndsWithZero() {
    Solution solution = new Solution();

    assertFalse(solution.solve(10));
    assertFalse(solution.solve(100));
  }

  @Test
  void solveHandlesSingleDigitNumbers() {
    Solution solution = new Solution();

    assertTrue(solution.solve(0));
    assertTrue(solution.solve(7));
  }

  @Test
  void solve2ReturnsTrueForPalindromeNumbers() {
    Solution solution = new Solution();

    assertTrue(solution.solve2(121));
    assertTrue(solution.solve2(1221));
    assertTrue(solution.solve2(1000000001));
  }

  @Test
  void solve2ReturnsFalseForNonPalindromeNumbers() {
    Solution solution = new Solution();

    assertFalse(solution.solve2(123));
    assertFalse(solution.solve2(1000021));
    assertFalse(solution.solve2(2147483647));
  }

  @Test
  void solve2ReturnsFalseForNegativeNumbers() {
    Solution solution = new Solution();

    assertFalse(solution.solve2(-121));
    assertFalse(solution.solve2(-101));
  }

  @Test
  void solve2ReturnsFalseWhenNumberEndsWithZero() {
    Solution solution = new Solution();

    assertFalse(solution.solve2(10));
    assertFalse(solution.solve2(100));
  }

  @Test
  void solve2HandlesSingleDigitNumbers() {
    Solution solution = new Solution();

    assertTrue(solution.solve2(0));
    assertTrue(solution.solve2(7));
  }

  @Test
  void solve3ReturnsTrueForPalindromeNumbers() {
    Solution solution = new Solution();

    assertTrue(solution.solve3(121));
    assertTrue(solution.solve3(1221));
    assertTrue(solution.solve3(1000000001));
  }

  @Test
  void solve3ReturnsFalseForNonPalindromeNumbers() {
    Solution solution = new Solution();

    assertFalse(solution.solve3(123));
    assertFalse(solution.solve3(1000021));
    assertFalse(solution.solve3(2147483647));
  }

  @Test
  void solve3ReturnsFalseForNegativeNumbers() {
    Solution solution = new Solution();

    assertFalse(solution.solve3(-121));
    assertFalse(solution.solve3(-101));
  }

  @Test
  void solve3ReturnsFalseWhenNumberEndsWithZero() {
    Solution solution = new Solution();

    assertFalse(solution.solve3(10));
    assertFalse(solution.solve3(100));
  }

  @Test
  void solve3HandlesSingleDigitNumbers() {
    Solution solution = new Solution();

    assertTrue(solution.solve3(0));
    assertTrue(solution.solve3(7));
  }
}
