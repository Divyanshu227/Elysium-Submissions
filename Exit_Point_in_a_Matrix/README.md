# Exit Point in a Matrix

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Easy
- **Topics:** Matrix, Simulation
- **Time Complexity:** O(N * M)
- **Space Complexity:** O(1)

## AI-Generated Explanation
### Method Explanation

The problem asks us to find the coordinates of the cell from which we exit the matrix. We start at $(0, 0)$ facing **Right**.

We can simulate the movement step-by-step using a direction variable `d` mapped as follows:
- `0` $\rightarrow$ **Right**
- `1` $\rightarrow$ **Down**
- `2` $\rightarrow$ **Left**
- `3` $\rightarrow$ **Up**

At each step:
1. We cache the current coordinates `(i, j)` into `(x, y)`. If we go out of bounds in the next movement, `(x, y)` will correctly represent our last valid position (the exit point).
2. We inspect the value of `mat[i][j]`:
   - If `mat[i][j] == 0`, we continue in the same direction.
   - If `mat[i][j] == 1`, we turn 90 degrees to the right: `d = (d + 1) % 4`, and reset the cell to `0` so we don't trigger another direction change if we visit this cell again.
3. We move one step forward based on the updated direction `d`.
4. The loop terminates when `(i, j)` goes out of bounds, at which point we return `{x, y}`.

### Complexity Analysis

- **Time Complexity**: $\mathcal{O}(N \times M)$. In the worst case, we can visit each cell a constant number of times. Since each `1` is turned to `0` upon the first visit, we avoid infinite loops and terminate in linear time relative to the number of cells.
- **Space Complexity**: $\mathcal{O}(1)$ auxiliary space since we modify the input matrix in-place and only use a few helper variables for tracking coordinates and direction.
