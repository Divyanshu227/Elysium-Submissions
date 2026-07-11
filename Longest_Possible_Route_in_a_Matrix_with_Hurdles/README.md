# Longest Possible Route in a Matrix with Hurdles

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Graphs, Backtracking, Depth First Search
- **Time Complexity:** O(4^(N * M))
- **Space Complexity:** O(N * M)

## AI-Generated Explanation
### Brute-Force

### Brute-Force Backtracking Approach

#### Concept
Finding the longest simple path (a path with no repeated vertices) in a grid graph is an NP-hard problem. Therefore, standard polynomial-time shortest-path algorithms like BFS or Dijkstra cannot be used. We must explore all possible simple paths from the source `(xs, ys)` to the destination `(xd, yd)` using Depth First Search (DFS) and Backtracking.

#### Algorithm
1. Check if the source or destination is blocked (`0`). If so, return `-1`.
2. Initialize a 2D boolean array `vis` of size $N \times M$ to keep track of visited cells.
3. Implement a recursive `dfs` function:
   - **Base Case**: If the current position `(xs, ys)` equals the destination `(xd, yd)`, return `0`.
   - **Step 1**: Mark the current cell `(xs, ys)` as visited.
   - **Step 2**: Traverse in all 4 cardinal directions (Up, Down, Left, Right).
   - **Step 3**: For each valid neighboring cell that is not a hurdle (`mat[nx][ny] == 1`) and is unvisited, recursively calculate the path length.
   - **Step 4**: Track the maximum length path returned from the neighbors.
   - **Step 5 (Backtracking)**: Mark the current cell `(xs, ys)` as unvisited (`false`) so it can be reused in other path permutations.
4. Return the maximum path found.

### Optimized

### Optimized Space / Constant-Factor Approach

#### Concept
While the time complexity remains exponential due to the nature of the Hamiltonian/longest simple path problem, we can optimize the **auxiliary space complexity** and **allocation overhead**.

#### Optimization
- Instead of maintaining an auxiliary 2D boolean array `vis` (which requires $O(N \times M)$ dynamic memory allocation), we can modify the grid in-place.
- When we visit a cell `mat[xs][ys]`, we temporarily set its value to `0` (hurdle). This automatically prevents the DFS from visiting it again, acting as our `visited` marker.
- During backtracking, we restore its value back to `1`.
- This reduces memory consumption and prevents extra cache misses caused by referencing an external `vis` matrix.
