// Problem Description

// Given a 2-D binary matrix A of size N x M filled with 0's and 1's, find the largest rectangle containing only ones and return its area.

// Problem Constraints

// 1 <= N, M <= 100

// Input Format

// The first argument is a 2-D binary array A.

// Output Format

// Return an integer denoting the area of the largest rectangle containing only ones.

// Example Input

// Input 1:

//  A = [
//        [1, 1, 1]
//        [0, 1, 1]
//        [1, 0, 0]
//      ]
// Input 2:

//  A = [
//        [0, 1, 0]
//        [1, 1, 1]
//      ]

// Example Output

// Output 1:

//  4
// Output 2:

//  3

// Example Explanation

// Explanation 1:

//  As the max area rectangle is created by the 2x2 rectangle created by (0, 1), (0, 2), (1, 1) and (1, 2).
// Explanation 2:

//  As the max area rectangle is created by the 1x3 rectangle created by (1, 0), (1, 1) and (1, 2).

// Brute Force Approach: O(N^3 * M)
// 1. For each cell in the matrix, consider it as the top-left corner of a rectangle.
// 2. Expand the rectangle downwards and rightwards while counting the number of 1's.
// 3. Keep track of the maximum area found.

// Optimized Approach: O(N * M)
// 1. Use a histogram approach where each row is treated as the base of a histogram.
// 2. For each row, update the heights of the histogram based on the number of consecutive 1's above it.
// 3. Use a stack-based method to find the largest rectangle in the histogram for each row.

// For each bar:
// 1. While stack not empty and current height < stack top height:
//    - Pop from stack
//    - Calculate area with popped height
//    - Width = current_index - stack_top_index - 1
   
// 2. Push current index to stack

// 3. After processing all bars, pop remaining and calculate areas

function maxRectangleInBinaryMatrix(A) {
  const n = A.length;
  const m = A[0].length;
  let maxArea = 0;
  const heights = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (A[i][j] === 1) {
        heights[j] += 1;
      } else {
        heights[j] = 0;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  heights.push(0); // Sentinel value to pop all elements at the end

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  heights.pop(); // Remove the sentinel value
  return maxArea;
}

// Example usage:
const A1 = [
  [1, 1, 1],
  [0, 1, 1],
  [1, 0, 0],
];

const A2 = [
  [0, 1, 0],
  [1, 1, 1],
];

console.log(maxRectangleInBinaryMatrix(A1)); // Output: 4
console.log(maxRectangleInBinaryMatrix(A2)); // Output: 3
