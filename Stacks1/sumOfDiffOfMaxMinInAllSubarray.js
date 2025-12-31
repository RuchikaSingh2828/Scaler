// Problem Description

// Given an array of integers A.

// The value of an array is computed as the difference between the maximum element in the array and the minimum element in the array A.

// Calculate and return the sum of values of all possible subarrays of A modulo 109+7.

// Problem Constraints

// 1 <= |A| <= 100000

// 1 <= A[i] <= 1000000

// Input Format

// The first and only argument given is the integer array A.

// Output Format

// Return the sum of values of all possible subarrays of A modulo 109+7.

// Example Input

// Input 1:

//  A = [1]

// Input 2:

//  A = [4, 7, 3, 8]

// Example Output

// Output 1:

//  0
// Output 2:

//  26

// Example Explanation

// Explanation 1:

// Only 1 subarray exists. Its value is 0.
// Explanation 2:

// value ( [4] ) = 4 - 4 = 0
// value ( [7] ) = 7 - 7 = 0
// value ( [3] ) = 3 - 3 = 0
// value ( [8] ) = 8 - 8 = 0
// value ( [4, 7] ) = 7 - 4 = 3
// value ( [7, 3] ) = 7 - 3 = 4
// value ( [3, 8] ) = 8 - 3 = 5
// value ( [4, 7, 3] ) = 7 - 3 = 4
// value ( [7, 3, 8] ) = 8 - 3 = 5
// value ( [4, 7, 3, 8] ) = 8 - 3 = 5
// sum of values % 10^9+7 = 26

function sumOfDiffOfMaxMinInAllSubarray(A) {
  const MOD = 1e9 + 7;
  const n = A.length;

  const nextGreater = (A) => {
    const result = new Array(n).fill(n);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && A[stack[stack.length - 1]] <= A[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    return result;
  };

  const nextSmaller = (A) => {
    const result = new Array(n).fill(n);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    return result;
  };

  const nearestSmallerToLeft = (A) => {
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    return result;
  };

  const nearestSmallerToRight = (A) => {
    const result = new Array(n).fill(n);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    return result;
  };

  const prevGreater = nearestSmallerToLeft(A);
  const prevSmaller = nearestSmallerToRight(A);
  const nextG = nextGreater(A);
  const nextS = nextSmaller(A);

  let totalMax = 0;
  let totalMin = 0;

  for (let i = 0; i < n; i++) {
    const maxCount = (i - prevGreater[i]) * (nextG[i] - i);
    const minCount = (i - prevSmaller[i]) * (nextS[i] - i);

    totalMax = (totalMax + A[i] * maxCount) % MOD;
    totalMin = (totalMin + A[i] * minCount) % MOD;
  }

  return (totalMax - totalMin + MOD) % MOD;
}
