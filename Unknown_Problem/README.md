# Unknown Problem

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Bit Magic, Arrays, Algorithms
- **Time Complexity:** O(Q log Q)
- **Space Complexity:** O(Q)

## AI-Generated Explanation
### Problem Analysis

The problem asks us to maintain a list of integers, initially containing a single element `[0]`. We need to process $Q$ queries of two types:
1. **`0 X`**: Insert the integer `X` into the list.
2. **`1 X`**: XOR all elements currently present in the list with `X`.

Finally, we must return the sorted list after all queries are executed.

### Why Brute Force Fails
If we perform a naive simulation, a type 1 query (`1 X`) requires iterating through all existing elements and updating them. In the worst case, we could have up to $O(Q)$ elements, leading to a quadratic time complexity of $O(Q^2)$. This will result in a **Time Limit Exceeded (TLE)** error for large inputs ($Q \approx 10^5$).

### The Optimized Approach: Reverse Processing
Instead of applying the XOR operations forward, we can process the queries in **reverse order** (from right to left):
- An element inserted at some point in the timeline will only be affected by the XOR operations that occur *after* its insertion.
- By traversing the queries backwards, we can easily maintain a running cumulative XOR sum, `xori`.
- When we encounter a XOR query `1 X` (moving backwards), we accumulate the operation: `xori ^= X`.
- When we encounter an insertion query `0 X` (moving backwards), this element `X` will eventually be XORed with all subsequent XOR operations. Since we have already accumulated all those operations in `xori` during our backwards traversal, its final state is simply `X ^ xori`. We can immediately compute this and push it to our result list.
- After processing all queries, the initial element `0` of the list will have been subjected to *all* XOR queries. Thus, its final value is `0 ^ xori = xori`, which we append to the list.
- Finally, we sort the list as requested by the problem description.

### Complexity Analysis
- **Time Complexity:** $\mathcal{O}(Q \log Q)$. Processing the queries in reverse takes $\mathcal{O}(Q)$ time. Sorting the final list of size $Q + 1$ takes $\mathcal{O}(Q \log Q)$ time.
- **Space Complexity:** $\mathcal{O}(Q)$ to store the output array containing at most $Q + 1$ elements.
