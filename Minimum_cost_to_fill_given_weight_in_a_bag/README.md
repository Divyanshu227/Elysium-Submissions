# Minimum cost to fill given weight in a bag

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Dynamic Programming, Knapsack
- **Time Complexity:** O(W * N)
- **Space Complexity:** O(W)

## AI-Generated Explanation
### Method Explanation

The problem asks us to find the minimum cost to fill a bag of exactly weight `w` using packets of different weights. A packet at index `j` has a weight of `j + 1` and a cost of `cost[j]`. Since we can buy any quantity of any packet, this is a variation of the **Unbounded Knapsack Problem**.

We can solve this efficiently using Dynamic Programming:
1. **DP State**: Let `dp[i]` represent the minimum cost to achieve an exact weight of `i`.
2. **Initialization**: 
   - `dp[0] = 0` because the cost to get a weight of `0` is `0`.
   - All other states from `1` to `w` are initialized to a large value (`INF = 1e9`), representing that they are initially unreachable.
3. **Transition**: For each target weight `i` from `1` to `w`, we try to form it using every available packet `j` (weight `j + 1` with cost `cost[j]`):
   - If `cost[j] == -1`, we cannot use this packet.
   - If `i >= j + 1`, we can potentially transition from the state `dp[i - (j + 1)]` by adding the current packet: 
     $$dp[i] = \min(dp[i], dp[i - (j + 1)] + cost[j])$$
4. **Result**: If `dp[w]` is still `INF`, it means it's impossible to make exactly weight `w`, so we return `-1`. Otherwise, we return `dp[w]`.

### Complexity Analysis
- **Time Complexity**: $\mathcal{O}(W \times N)$, where $W$ is the target weight `w` and $N$ is the number of packet types (size of `cost`). The nested loops iterate exactly $W \times N$ times.
- **Space Complexity**: $\mathcal{O}(W)$ to store the 1D DP state array of size $W + 1$.
