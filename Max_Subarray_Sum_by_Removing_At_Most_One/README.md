# Max Subarray Sum by Removing At Most One

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Dynamic Programming, Arrays
- **Time Complexity:** O(N)
- **Space Complexity:** O(1)

## AI-Generated Explanation
### Method Explanation

This problem is a variation of the classic **Kadane's Algorithm** for finding the maximum subarray sum. Here, we are allowed to delete at most one element to maximize the sum of a non-empty subarray.

We can solve this efficiently using **Dynamic Programming** with two states:
1. `keep`: Represents the maximum subarray sum ending at the current index $i$ with **zero** deletions.
2. `del`: Represents the maximum subarray sum ending at the current index $i$ with **exactly one** deletion.

### State Transitions
For each element $arr[i]$ from index $1$ to $n-1$:
- **`del` transition**:
  `del = max(del + arr[i], keep)`
  - `del + arr[i]`: We carry over a previous deletion and must include the current element $arr[i]$.
  - `keep`: We make our single deletion *right now* at $arr[i]$. This means we take the previous subarray sum ending at $i-1$ without any deletions (`keep`) and skip the current element $arr[i]$.

- **`keep` transition**:
  `keep = max(arr[i], keep + arr[i])`
  - This is the standard Kadane's recurrence. We either start a new subarray at $arr[i]$ or extend the existing subarray without deletions.

- **Global Maximum (`ans`)**:
  At each step, we update our answer with the maximum of `keep` and `del` to find the overall maximum subarray sum.

### Complexity Analysis
- **Time Complexity:** $\mathcal{O}(N)$ as we only iterate through the array of size $N$ once.
- **Space Complexity:** $\mathcal{O}(1)$ because we only use a few variables (`keep`, `del`, `ans`) to store the states, requiring constant auxiliary space.
