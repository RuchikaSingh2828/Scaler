// You are given an array of positive integers nums and an integer threshold. Your task is to find the smallest positive integer divisor such that when you divide each element in the array by this divisor and sum up the results, the total sum is less than or equal to threshold.

// When dividing each element, the result must be rounded up to the nearest integer (use the ceiling function).

// For example:

// ⌈
// 7
// /
// 3
// ⌉
// =
// 3
// ⌈7/3⌉=3

// ⌈
// 10
// /
// 2
// ⌉
// =
// 5
// ⌈10/2⌉=5

// The problem guarantees that there will always be a valid answer.

// Example 1:
// Input: nums = [1][2][5][9], threshold = 6
// Output: 5
// Explanation:

// If divisor = 5:
// ⌈
// 1
// /
// 5
// ⌉
// +
// ⌈
// 2
// /
// 5
// ⌉
// +
// ⌈
// 5
// /
// 5
// ⌉
// +
// ⌈
// 9
// /
// 5
// ⌉
// =
// 1
// +
// 1
// +
// 1
// +
// 2
// =
// 5
// ≤
// 6
// ⌈1/5⌉+⌈2/5⌉+⌈5/5⌉+⌈9/5⌉=1+1+1+2=5≤6

// If divisor = 4:
// 1
// +
// 1
// +
// 2
// +
// 3
// =
// 7
// >
// 6
// 1+1+2+3=7>6
// So, 5 is the smallest divisor that works.

// Example 2:
// Input: nums = [44][22][33][11][1], threshold = 5
// Output: 44
// Explanation:

// Only a very large divisor (44) will keep the sum
// ≤
// 5
// ≤5.

// Task:
// Return the smallest positive integer divisor such that the sum of the results as described above does not exceed threshold.
