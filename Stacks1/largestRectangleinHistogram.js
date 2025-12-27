// Largest Rectangle in Histogram
// Problem Description

// Given an array of integers A.

// A represents a histogram i.e A[i] denotes the height of the ith histogram's bar. Width of each bar is 1.

// Find the area of the largest rectangle formed by the histogram.

// Problem Constraints

// 1 <= |A| <= 100000

// 1 <= A[i] <= 10000

// Input Format

// The only argument given is the integer array A.

// Output Format

// Return the area of the largest rectangle in the histogram.

// Example Input

// Input 1:

//  A = [2, 1, 5, 6, 2, 3]
// Input 2:

//  A = [2]

// Example Output

// Output 1:

//  10
// Output 2:

//  2

// Example Explanation

// Explanation 1:

// The largest rectangle has area = 10 unit. Formed by A[3] to A[4].

// Explanation 2:

// Largest rectangle has area 2.

const nearestSmallerToLeft = (A) => {
  const n = A.length;
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
  const n = A.length;
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

const largestRectangleArea = (A) => {
  const n = A.length;
  const left = nearestSmallerToLeft(A);
  const right = nearestSmallerToRight(A);
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    const width = right[i] - left[i] - 1;
    const area = A[i] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};
