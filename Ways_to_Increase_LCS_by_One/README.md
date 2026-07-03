# Ways to Increase LCS by One

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Hard
- **Topics:** Dynamic Programming, Strings
- **Time Complexity:** O(N * M)
- **Space Complexity:** O(N * M)

## AI-Generated Explanation
### Brute-Force

### Brute-Force Approach

#### Idea
To find the number of ways to increase the LCS by exactly $1$, we can directly simulate the process:
1. Find the LCS of the original strings `s1` and `s2` using the standard $O(N \times M)$ DP approach.
2. Iterate through all possible $N + 1$ insertion positions in `s1`.
3. At each position, try inserting every unique character present in `s2` (inserting a character not in `s2` can never increase the LCS).
4. For each insertion, construct the modified string, compute its LCS with `s2` from scratch, and check if it is equal to $\text{originalLCS} + 1$.

#### Complexity
- **Time Complexity:** $O(N \cdot \Sigma \cdot (N \cdot M))$ where $\Sigma \le 26$ is the alphabet size of `s2`. For $N, M \le 1000$, this will result in roughly $10^9$ operations, which easily TLEs.
- **Space Complexity:** $O(N \cdot M)$ to compute LCS of the modified string.

### Optimized

### Optimized Approach (Prefix & Suffix DP)

#### Idea
Instead of recomputing the LCS from scratch for every potential insertion, we can determine the effect of inserting a character in $O(1)$ time by precomputing prefix and suffix LCS values.

Let:
- `pref[i][j]` be the LCS of $s1[0 \dots i-1]$ and $s2[0 \dots j-1]$.
- `suff[i][j]` be the LCS of $s1[i \dots n-1]$ and $s2[j \dots m-1]$.

If we insert a character `c` at index `i` in `s1` (meaning before $s1[i]$), and we want this character to match $s2[j]$ (where $s2[j] == c$):
- The prefix $s1[0 \dots i-1]$ can match with $s2[0 \dots j-1]$, yielding a contribution of `pref[i][j]` to the LCS.
- The matched character itself adds $1$ to the LCS.
- The suffix $s1[i \dots n-1]$ can match with $s2[j+1 \dots m-1]$, yielding a contribution of `suff[i][j+1]`.

Thus, the length of the new LCS if we insert $s2[j]$ at index `i` of `s1` is:
$$\text{New LCS} = \text{pref}[i][j] + 1 + \text{suff}[i][j+1]$$

For the LCS to increase by $1$, we require:
$$\text{pref}[i][j] + 1 + \text{suff}[i][j+1] = \text{oldLCS} + 1 \implies \text{pref}[i][j] + \text{suff}[i][j+1] = \text{oldLCS}$$

To avoid overcounting identical character insertions at the same index, we use a hash set `used` for each position `i` to keep track of characters from `s2` that we have already successfully inserted.

#### Complexity
- **Time Complexity:** $O(N \cdot M)$ to populate the `pref` and `suff` arrays and $O(N \cdot M)$ to find the answer. Total Time Complexity is $O(N \cdot M)$, which easily runs within the time limit.
- **Space Complexity:** $O(N \cdot M)$ for storing DP states of `pref` and `suff` arrays.
