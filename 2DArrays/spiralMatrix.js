// Q2. Spiral Order Matrix II

// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.

// Problem Constraints
// 1 <= A <= 1000

// Input Format
// First and only argument is integer A

// Output Format
// Return a 2-D matrix which consists of the elements added in spiral order.

// Example Input
// Input 1:

// 1
// Input 2:

// 2
// Input 3:

// 5

// Example Output
// Output 1:

// [ [1] ]
// Output 2:

// [ [1, 2],
//   [4, 3] ]
// Output 3:

// [ [1,   2,  3,  4, 5],
//   [16, 17, 18, 19, 6],
//   [15, 24, 25, 20, 7],
//   [14, 23, 22, 21, 8],
//   [13, 12, 11, 10, 9] ]

// Example Explanation
// Explanation 1:

// Only 1 is to be arranged.
// Explanation 2:

// 1 --> 2
//       |
//       |
// 4<--- 3
// Explanation 3:
function spiralMatrix(A) {
  let printLopp = A - 1;
  let i = 0;
  let j = 0;
  let ans = new Array(A).fill(0).map(() => new Array(A).fill(0));
  let val = 1;
  while (printLopp >= 0) {
    if (printLopp === 0) ans[i][j] = val;
    // first row
    for (let k = 0; k < printLopp; k++) {
      ans[i][j] = val++;
      j++;
    }
    // last column
    for (let k = 0; k < printLopp; k++) {
      ans[i][j] = val++;
      i++;
    }
    // last row
    for (let k = 0; k < printLopp; k++) {
      ans[i][j] = val++;
      j--;
    }
    // first column
    for (let k = 0; k < printLopp; k++) {
      ans[i][j] = val++;
      i--;
    }
    printLopp -= 2;
    i++;
    j++;
  }
  return ans;
}

console.log(spiralMatrix(80));
