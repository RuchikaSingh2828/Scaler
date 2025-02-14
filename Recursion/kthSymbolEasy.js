// Problem Description

// On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

// Given row number A and index B, return the Bth indexed symbol in row A. (The values of B are 0-indexed.).

// Problem Constraints

// 1 <= A <= 20

// 0 <= B < 2A - 1

// Input Format

// First argument is an integer A.

// Second argument is an integer B.

// Output Format

// Return an integer denoting the Bth indexed symbol in row A.

// Example Input

// Input 1:

//  A = 3
//  B = 0
// Input 2:

//  A = 4
//  B = 4

// Example Output

// Output 1:

//  0
// Output 2:

//  1

// Example Explanation

// Explanation 1:

//  Row 1: 0
//  Row 2: 01
//  Row 3: 0110
// Explanation 2:

//  Row 1: 0
//  Row 2: 01
//  Row 3: 0110
//  Row 4: 01101001
function A_th_Row(A) {
  if (A == 1) {
    return [0];
  }
  let v1 = A_th_Row(A - 1);
  let v2 = [];
  for (let i = 0; i < v1.length; i++) {
    if (v1[i] == 0) {
      v2.push(0);
      v2.push(1);
    } else {
      v2.push(1);
      v2.push(0);
    }
  }
  return v2;
}

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let v = A_th_Row(A);
    return v[B];
  },
};

// Example usage:
const A = 39866;
const B = 479540875878896909n;
console.log(kthSymbol(A, B)); // Output: 0 or 1 depending on the position

// console.log(kthSymbol(4, 6)); // 0
// console.log(kthSymbol(4, 5)); // 0
// console.log(kthSymbol(277, 887)); // 0
// console.log(kthSymbol(39866, 479540875878896909)); // 0
