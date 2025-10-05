// Problem Description

// Given a matrix of integers A of size N x M in which each row is sorted.

// Find and return the overall median of matrix A.

// NOTE: No extra memory is allowed.

// NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.

// Problem Constraints

// 1 <= N, M <= 10^5

// 1 <= N*M <= 10^6

// 1 <= A[i] <= 10^9

// N*M is odd

// Input Format

// The first and only argument given is the integer matrix A.

// Output Format

// Return the overall median of matrix A.

// Example Input

// Input 1:

// A = [   [1, 3, 5],
//         [2, 6, 9],
//         [3, 6, 9]   ]
// Input 2:

// A = [   [5, 17, 100]    ]

// Example Output

// Output 1:

//  5
// Output 2:

//  17

// Example Explanation

// Explanation 1:

// A = [1, 2, 3, 3, 5, 6, 6, 9, 9]
// Median is 5. So, we return 5.
// Explanation 2:

// Median is 17.

const upperBound = (arr, x, n) => {
  let low = 0;
  let high = n - 1;
  let ans = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

const countSmallerElements = (A, mid, r, c) => {
  let count = 0;
  //counting through  each row values less than x
  for (let i = 0; i < r; i++) {
    count += upperBound(A[i], mid, c);
  }

  return count;
};
const matrixMedian = (A) => {
  const row = A.length;
  const col = A[0].length;
  const total = row * col;
  const req = Math.floor(total / 2);
  // defining the search space
  let low = A[0][0];
  let high = A[0][col - 1];

  for (let i = 1; i < row; i++) {
    low = Math.min(A[i][0], low);
    high = Math.max(A[i][col - 1], high);
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const smallEqual = countSmallerElements(A, mid, row, col);

    if (smallEqual <= req) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

console.log(
  matrixMedian([
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9],
  ])
); //5
console.log(matrixMedian([[5, 17, 100]])); //17
console.log(
  matrixMedian([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //5
console.log(
  matrixMedian([
    [1, 10, 20],
    [15, 25, 35],
    [30, 40, 50],
  ])
); //25
console.log(matrixMedian([[1]])); //1
console.log(matrixMedian([[1, 2, 3, 4, 5]])); //3
console.log(matrixMedian([[1], [2], [3], [4], [5]])); //3
console.log(
  matrixMedian([
    [1, 3, 5],
    [7, 9, 11],
    [13, 15, 17],
  ])
); //9
