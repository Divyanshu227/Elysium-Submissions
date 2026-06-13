# Minimum Jumps

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Greedy, Array, Dynamic Programming
- **Time Complexity:** O(N)
- **Space Complexity:** O(1)

## AI-Generated Explanation
### Method Explanation

The problem asks for the minimum number of jumps to reach the end of the array starting from the first element. This solution uses a **Greedy Approach** that runs in $O(N)$ time and uses $O(1)$ auxiliary space.

#### Key Variables:
- `jumps`: Stores the total number of jumps made to reach the current position.
- `farthest`: The maximum index we can reach from all the positions we have visited so far in the current jump reach.
- `steps`: The number of steps we can still take from the current jump before we must make another jump.

#### Algorithm:
1. **Base Cases**:
   - If the size of the array is $1$ or less, we are already at the end, so return `0` jumps.
   - If the first element is `0`, we cannot make any move forward, so return `-1`.
2. **Initialization**:
   - Set `jumps = 1` because we must make at least one jump from the first index.
   - Set `farthest = arr[0]` and `steps = arr[0]` since we can initially reach up to index `arr[0]`.
3. **Iteration**:
   - Loop through the array from index `1` to `n-1`.
   - At each index `i`, check if we have reached the last element (`n-1`). If so, return the current number of `jumps`.
   - Update `farthest` with the maximum index reachable from the current index: `max(farthest, i + arr[i])`.
   - Decrement `steps` by 1 as we move forward.
   - If `steps` becomes `0`:
     - It means we have exhausted all steps allowed by the previous jump. We must increment `jumps`.
     - If we cannot move further forward from the current position (i.e., `i >= farthest`), we are stuck. Return `-1`.
     - Otherwise, re-initialize `steps` to `farthest - i` (the steps available to reach the farthest point reachable so far).

This greedy strategy ensures that we always choose the jump that maximizes our reach, guaranteeing the minimum number of jumps.
