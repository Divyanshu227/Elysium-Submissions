# Kadane's Algorithm

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Arrays, Dynamic Programming
- **Time Complexity:** O(N)
- **Space Complexity:** O(1)

## AI-Generated Explanation
### Method Explanation

Kadane's Algorithm is an efficient iterative dynamic programming algorithm used to find the maximum sum of a contiguous subarray within a one-dimensional numeric array.

The core logic revolves around a single pass through the array while maintaining two variables:
1. **`maxending`**: The maximum subarray sum ending at the current position. For each element `arr[i]`, we decide whether to add it to the existing subarray (`maxending + arr[i]`) or start a new subarray starting at the current element (`arr[i]`).
2. **`res`**: The global maximum subarray sum found so far.

### Step-by-Step Execution:
- **Initialization**: We initialize both `res` and `maxending` with the first element of the array `arr[0]`. This handles cases where the array might contain all negative numbers.
- **Iteration**: We iterate from index `1` to `N - 1`:
  - Update `maxending = max(maxending + arr[i], arr[i])`.
  - Update the overall maximum `res = max(res, maxending)`.
- **Result**: Return `res` which holds the maximum contiguous subarray sum.

### Complexity Analysis

- **Time Complexity**: $\mathcal{O}(N)$ where $N$ is the number of elements in the array. We only traverse the array once.
- **Space Complexity**: $\mathcal{O}(1)$ as we only use two integer variables (`res` and `maxending`) to keep track of the sums, requiring no extra space.
