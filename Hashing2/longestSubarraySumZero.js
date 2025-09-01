// Problem Description

// Given an array A of N integers.
// Find the length of the longest subarray in the array which sums to zero.

// If there is no subarray which sums to zero then return 0.

// Problem Constraints

// 1 <= N <= 105
// -109 <= A[i] <= 109

// Input Format

// Single argument which is an integer array A.

// Output Format

// Return an integer.

// Example Input

// Input 1:

//  A = [1, -2, 1, 2]
// Input 2:

//  A = [3, 2, -1]

// Example Output

// Output 1:

// 3
// Output 2:

// 0

const longestSubarraySumZero = (A) => {
  let prefixSum = 0;
  let maxLength = 0;
  let sumMap = new Map();

  for (let i = 0; i < A.length; i++) {
    prefixSum += A[i];

    if (prefixSum === 0) {
      maxLength = i + 1;
    } else if (sumMap.has(prefixSum)) {
      maxLength = Math.max(maxLength, i - sumMap.get(prefixSum));
    } else {
      sumMap.set(prefixSum, i);
    }
  }
  return maxLength;
};
