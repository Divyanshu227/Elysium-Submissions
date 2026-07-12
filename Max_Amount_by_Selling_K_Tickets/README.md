# Max Amount by Selling K Tickets

## Problem Information
- **Platform:** GeeksforGeeks (GFG)
- **Difficulty:** Medium
- **Topics:** Greedy Algorithms, Priority Queue, Data Structures
- **Time Complexity:** O((N + k) log N)
- **Space Complexity:** O(N)

## AI-Generated Explanation
### Brute-Force

A straightforward but inefficient approach would be to repeatedly iterate through the array `arr` to find the maximum current ticket price. Once found, that ticket's price is added to the total sum, and its value in the array is decremented by one. This process would be repeated `k` times.

For each of the `k` ticket sales, finding the maximum price in an array of size `N` requires a linear scan, which takes `O(N)` time. After finding it, updating the price is `O(1)`. Therefore, the total time complexity would be `O(k * N)`. Given typical competitive programming constraints where `N` and `k` can be up to `10^5`, `k*N` could be `10^{10}`, which is too slow and would result in a Time Limit Exceeded (TLE) error.

### Optimized

The problem asks to maximize the total amount obtained by selling `k` tickets, where selling a ticket reduces its price by one. This is a classic greedy problem. To maximize the sum, at each step, we should always pick the ticket with the highest available price. Any other choice (picking a ticket with a lower price) would yield less immediate profit and would not create a better future scenario, as the higher-priced ticket would still exist (possibly at a reduced price if it were picked) and could contribute more later.

The optimized solution leverages a `priority_queue` (which acts as a max-heap in C++) to efficiently keep track of the highest available ticket prices.

Here's a step-by-step breakdown of the solution:
1.  **Initialization**: All initial ticket prices from the input `arr` are inserted into the `priority_queue`. This populating step takes `O(N log N)` time, as each of the `N` insertions into a priority queue of size up to `N` takes `O(log N)`.
2.  **Iterative Selling**: The algorithm then enters a `while` loop that runs `k` times. The loop also checks if the priority queue is not empty, handling cases where all tickets might be sold or become 0 before `k` operations are complete.
    *   In each iteration, it retrieves the maximum available price `x` using `pq.top()`. This operation is `O(1)`.
    *   `x` is added to the running total `ans`. The `ans` variable is a `long long` to prevent integer overflow, as the sum can be very large (`k * max_price` could be `10^5 * 10^9 = 10^{14}`). The `modulo 1e9+7` operation is applied at each addition as required by the problem statement for large sums.
    *   The ticket with price `x` is then removed from the priority queue using `pq.pop()`. This operation takes `O(log N)`.
    *   If `x` was greater than 1 (meaning it can still be sold at a reduced price in the future), `x-1` is re-inserted into the priority queue using `pq.push()`. This operation also takes `O(log N)`.

**Time Complexity**: 
*   The initial population of the priority queue takes `O(N log N)`.
*   Each of the `k` operations within the `while` loop (pop and push) takes `O(log N)` time. Thus, the loop contributes `O(k log N)`.
*   Combining these, the total time complexity is `O(N log N + k log N)`, which can be simplified to `O((N + k) log N)`.

**Space Complexity**: 
*   The `priority_queue` stores at most `N` elements (the initial prices). Each time an element is removed and a new one is added, the size remains constant. Thus, the space complexity is `O(N)`.
