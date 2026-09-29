package com.jjuidev.jsl.problems._0013_roman_to_integer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class SolutionTest {

  @Test
  void solveConvertsRomanNumerals() {
    Solution solution = new Solution();

    assertEquals(3, solution.solve("III"));
    assertEquals(58, solution.solve("LVIII"));
    assertEquals(1994, solution.solve("MCMXCIV"));
    assertEquals(1, solution.solve("I"));
    assertEquals(1000, solution.solve("M"));
    assertEquals(4, solution.solve("IV"));
    assertEquals(9, solution.solve("IX"));
    assertEquals(444, solution.solve("CDXLIV"));
    assertEquals(3999, solution.solve("MMMCMXCIX"));
    assertEquals(3888, solution.solve("MMMDCCCLXXXVIII"));
  }

  @Test
  void solve2ConvertsRomanNumerals() {
    Solution solution = new Solution();

    assertEquals(3, solution.solve2("III"));
    assertEquals(58, solution.solve2("LVIII"));
    assertEquals(1994, solution.solve2("MCMXCIV"));
    assertEquals(1, solution.solve2("I"));
    assertEquals(1000, solution.solve2("M"));
    assertEquals(4, solution.solve2("IV"));
    assertEquals(9, solution.solve2("IX"));
    assertEquals(444, solution.solve2("CDXLIV"));
    assertEquals(3999, solution.solve2("MMMCMXCIX"));
    assertEquals(3888, solution.solve2("MMMDCCCLXXXVIII"));
  }

  @Test
  void solve3ConvertsRomanNumerals() {
    Solution solution = new Solution();

    assertEquals(3, solution.solve3("III"));
    assertEquals(58, solution.solve3("LVIII"));
    assertEquals(1994, solution.solve3("MCMXCIV"));
    assertEquals(1, solution.solve3("I"));
    assertEquals(1000, solution.solve3("M"));
    assertEquals(4, solution.solve3("IV"));
    assertEquals(9, solution.solve3("IX"));
    assertEquals(444, solution.solve3("CDXLIV"));
    assertEquals(3999, solution.solve3("MMMCMXCIX"));
    assertEquals(3888, solution.solve3("MMMDCCCLXXXVIII"));
  }
}
