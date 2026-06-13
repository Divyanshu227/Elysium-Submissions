# Indexes of Subarray Sum

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Arrays, Sliding Window, Two Pointer
- **Time Complexity:** O(N)
- **Space Complexity:** O(1)

## AI-Generated Explanation
### Method Explanation

The problem requires finding the 1-based start and end indices of the first continuous subarray that sums up to a given `target`. The solution utilizes an optimal **Sliding Window (Two-Pointer)** approach, which works efficiently under the assumption that the array contains non-negative numbers.

1. **Initialization**: We keep track of the current subarray sum (`sum`) and its left boundary (`start`), initially set to `0`.
2. **Expansion**: We iterate through the array with a right boundary pointer `i`. In each iteration, we add `arr[i]` to our current `sum`.
3. **Contraction**: If `sum` exceeds the `target`, the window is too large. We shrink the window from the left by subtracting `arr[start]` from `sum` and incrementing `start` until `sum` is less than or equal to `target` (or the window becomes empty).
4. **Target Check**: After contraction, if `sum` equals `target`, we have found our subarray. We immediately return the 1-based indices `[start + 1, i + 1]`.
5. **Fallback**: If the loop terminates without finding any such subarray, we return `[-1]`.

### Complexity Analysis

- **Time Complexity**: **O(N)**. Although there is a nested `while` loop inside the `for` loop, both pointers (`start` and `i`) only move from left to right. Each element is processed at most twice (once when entering the window and once when leaving it), resulting in linear time complexity.
- **Space Complexity**: **O(1)**. The algorithm only uses a few auxiliary variables (`start`, `sum`, `i`) and does not allocate any extra memory proportional to the input size.
