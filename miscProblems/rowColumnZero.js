// Problem Description
// You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.

// Problem Constraints
// 1 <= A.size() <= 103

// 1 <= A[i].size() <= 103

// 0 <= A[i][j] <= 103

// Input Format
// First argument is a 2D integer matrix A.

// Output Format
// Return a 2D matrix after doing required operations.

// Example Input
// Input 1:

// [1,2,3,4]
// [5,6,7,0]
// [9,2,0,4]

// Example Output
// Output 1:

// [1,2,0,0]
// [0,0,0,0]
// [0,0,0,0]

// Example Explanation
// Explanation 1:

// A[2][4] = A[3][3] = 0, so make 2nd row, 3rd row, 3rd column and 4th column zero.

function rowColumnZero(A) {
  for (let r = 0; r < A.length; r++) {
    let flag = false;
    for (let c = 0; c < A[0].length; c++) {
      if (A[r][c] === 0) {
        flag = true;
      }
    }
    if (flag) {
      for (let c = 0; c < A[0].length; c++) {
        if (A[r][c] != 0) {
          A[r][c] = -1;
        }
      }
    }
  }

  for (let c = 0; c < A[0].length; c++) {
    let flag = false;
    for (let r = 0; r < A.length; r++) {
      if (A[r][c] === 0) {
        flag = true;
      }
    }
    if (flag) {
      for (let r = 0; r < A.length; r++) {
        if (A[r][c] != 0) {
          A[r][c] = -1;
        }
      }
    }
  }

  for (let c = 0; c < A[0].length; c++) {
    for (let r = 0; r < A.length; r++) {
      if (A[r][c] === -1) {
        A[r][c] = 0;
      }
    }
  }

  return A;
}
