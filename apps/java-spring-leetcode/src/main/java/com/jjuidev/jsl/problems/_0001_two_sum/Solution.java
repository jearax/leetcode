package com.jjuidev.jsl.problems._0001_two_sum;

import java.util.HashMap;
import java.util.Map;

/** Two Sum (LeetCode #1). Time O(n), Space O(n). */
public class Solution {

  public int[] solve(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      Integer j = seen.get(complement);

      if (j != null) {
        return new int[] {j, i};
      }

      seen.put(nums[i], i);
    }

    throw new IllegalArgumentException("no two-sum solution");
  }
}