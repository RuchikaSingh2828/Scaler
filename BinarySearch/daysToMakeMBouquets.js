// You have a garden with
// n
// n flowers arranged in a row. Each flower blooms on a specific day given by the array bloomDay, where bloomDay[i] represents the day when the
// i
// i-th flower will bloom.

// Your goal is to make
// m
// m bouquets, where each bouquet requires exactly
// k
// k adjacent flowers that have already bloomed. Once a flower is used in a bouquet, it cannot be used in another bouquet.

// Find the minimum number of days you need to wait before you can make
// m
// m bouquets. If it's impossible to make
// m
// m bouquets (for example, if there aren't enough flowers total, i.e.,
// n
// <
// m
// ×
// k
// n<m×k), return
// −
// 1
// −1.

// Constraints:

// Flowers must be adjacent (consecutive) in the garden to form a bouquet.

// Each flower can only be used in one bouquet.

// A flower can only be used after it has bloomed (on or after day bloomDay[i]).

// Example 1:
// Input: bloomDay = [1][10][3][10][2],
// m
// =
// 3
// m=3,
// k
// =
// 1
// k=1
// Output: 3
// Explanation: On day 3, flowers at indices 0, 2, and 4 have bloomed (3 flowers total, can make 3 bouquets of size 1).

// Example 2:
// Input: bloomDay = [1][10][3][10][2],
// m
// =
// 3
// m=3,
// k
// =
// 2
// k=2
// Output: -1
// Explanation: We need 3 bouquets with 2 adjacent flowers each (6 flowers total). We only have 5 flowers, so it's impossible.

// Example 3:
// Input: bloomDay = [7][7][7][7][12][7],
// m
// =
// 2
// m=2,
// k
// =
// 3
// k=3​
// Output: 12
// Explanation: We need 2 bouquets, each should have 3 adjacent flowers. The earliest day is 12 when this becomes possible.

// Task:
// Return the minimum day such that you can form at least
// m
// m bouquets, each requiring
// k
// k adjacent flowers that have bloomed (return
// −
// 1
// −1 if impossible, e.g., when
// m
// ×
// k
// >
// n
// m×k>n)
