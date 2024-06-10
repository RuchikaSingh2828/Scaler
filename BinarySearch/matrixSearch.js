// Problem Description
// Given a matrix of integers A of size N x M and an integer B. Write an efficient algorithm that searches for integer B in matrix A.

// This matrix A has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than or equal to the last integer of the previous row.
// Return 1 if B is present in A, else return 0.

// NOTE: Rows are numbered from top to bottom, and columns are from left to right.

// Problem Constraints
// 1 <= N, M <= 1000
// 1 <= A[i][j], B <= 106

// Input Format
// The first argument given is the integer matrix A.
// The second argument given is the integer B.

// Output Format
// Return 1 if B is present in A else, return 0.

// Example Input
// Input 1:

// A = [
//       [1,   3,  5,  7]
//       [10, 11, 16, 20]
//       [23, 30, 34, 50]
//     ]
// B = 3
// Input 2:

// A = [
//       [5, 17, 100, 111]
//       [119, 120, 127, 131]
//     ]
// B = 3

// Example Output
// Output 1:

// 1
// Output 2:

// 0

// Example Explanation
// Explanation 1:

//  3 is present in the matrix at A[0][1] position so return 1.
// Explanation 2:

//  3 is not present in the matrix so return 0.

const matrixSearch = (A, B) => {
  let rowStart = 0;
  let columnStart = 0;
  let rowEnd = A.length - 1;
  let columnEnd = A[0].length;

  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    const midr = Math.floor((rowStart + rowEnd) / 2);
    const midc = Math.floor((columnStart + columnEnd) / 2);

    if (A[midr][midc] === B) return 1;
    else if (A[midr][midc] < B) {
      if (A[midr][A[0].length - 1] < B) {
        rowStart = midr + 1;
      } else {
        columnStart = midc + 1;
      }
    } else {
      if (A[midr][0] > B) {
        rowEnd = midr - 1;
      } else {
        columnEnd = midc - 1;
      }
    }
  }
  return 0;
};

const A = [
  [3, 3, 11, 12, 14],
  [16, 17, 30, 34, 35],
  [45, 48, 49, 50, 52],
  [56, 59, 63, 63, 65],
  [67, 71, 72, 73, 79],
  [80, 84, 85, 85, 88],
  [88, 91, 92, 93, 94],
];
const B = 94;

console.log(matrixSearch(A, B));
