# Max Subarray Sum by Removing At Most One

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Dynamic Programming, Arrays
- **Time Complexity:** O(N)
- **Space Complexity:** O(1)

## AI-Generated Explanation
### Method Explanation

This problem is an elegant extension of the classic **Kadane's Algorithm** for finding the maximum subarray sum. By allowing at most one deletion, we introduce a decision point at each element: *Should we keep it, or should we delete it?*

We can track this using Dynamic Programming with two state variables at each step `i`:

1. **`keep`**: The maximum subarray sum ending at index `i` with **zero** deletions.
2. **`del`**: The maximum subarray sum ending at index `i` with **exactly one** deletion.

### State Transitions

For each element `arr[i]` (from `i = 1` to `n - 1`):

* **`del` state transition:**
  To end up with exactly one deletion at index `i`, we have two choices:
  1. Extend a previously deleted state by keeping the current element: `del + arr[i]`.
  2. Perform the deletion on the current element `arr[i]`, transitioning from the non-deleted subarray prefix: `keep` (equivalent to skipping `arr[i]`).
  
  $$\text{del}_{\text{new}} = \max(\text{del}_{\text{old}} + \text{arr}[i], \text{keep}_{\text{old}})$$

* **`keep` state transition:**
  This is the standard Kadane's recurrence. We either start a new subarray at `arr[i]` or extend the previous non-deleted subarray:
  
  $$\text{keep}_{\text{new}} = \max(\text{arr}[i], \text{keep}_{\text{old}} + \text{arr}[i])$$

* **Global Maximum:**
  At each step, we update our overall answer with the maximum of both states: `ans = max(ans, max(keep, del))`.

### Complexity Analysis

- **Time Complexity:** $\mathcal{O}(N)$ because we perform a single linear scan of the array.
- **Space Complexity:** $\mathcal{O}(1)$ auxiliary space as we only maintain a few state variables (`keep`, `del`, `ans`).
