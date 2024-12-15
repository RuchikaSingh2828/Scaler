// Problem Description

// You are given two integers A and B.
// Set the A-th bit and B-th bit in 0, and return output in decimal Number System.

// Note:
// The bit positions are 0-indexed, which means that the least significant bit (LSB) has index 0.

// Problem Constraints

// 0 <= A <= 30
// 0 <= B <= 30

// Input Format

// First argument A is an integer.
// Second argument B is an integer.

// Output Format

// Return an integer.

// Example Input

// Input 1:
// A = 3
// B = 5
// Input 2:
// A = 4
// B = 4
// Input 3:
// A=2
// B=3

// Example Output

// Output 1:
// 40
// Output 2:
// 16
// Output 3:
// 12

// Example Explanation

// For Input 1:
// The binary expression is 101000 which is 40 in decimal.
// For Input 2:
// The binary expression is 10000 which is 16 in decimal.
// For Input 3:
// The binary expression is 1100 which is 12 in decimal

const setBit = (A, B) => {
  let ans = 0;
  ans = ans | (1 << A);
  ans = ans | (1 << B);
  return ans;
};

console.log(setBit(3, 5)); // 40
console.log(setBit(4, 4)); // 16
console.log(setBit(2, 3)); // 12
