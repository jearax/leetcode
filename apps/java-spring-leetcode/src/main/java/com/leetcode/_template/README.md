# Problem template (Java Spring)

Each problem lives in `src/main/java/com/leetcode/problems/<id>-<Slug>/` with this shape:

```java
package com.leetcode.problems.<id>.<slug>;

public class Solution {
    public Output solve(Input input) {
        // ...
    }
}
```

```java
package com.leetcode.problems.<id>.<slug>;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    @Test
    void example1() {
        // assertEquals(expected, new Solution().solve(input));
    }
}
```