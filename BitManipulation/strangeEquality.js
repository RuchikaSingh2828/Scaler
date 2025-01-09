// Problem Description

// Given an integer A.
// Two numbers, X and Y, are defined as follows:

// X is the greatest number smaller than A such that the XOR sum of X and A is the same as the sum of X and A.
// Y is the smallest number greater than A, such that the XOR sum of Y and A is the same as the sum of Y and A.
// Find and return the XOR of X and Y.

// NOTE 1: XOR of X and Y is defined as X ^ Y where '^' is the BITWISE XOR operator.

// NOTE 2: Your code will be run against a maximum of 100000 Test Cases.

// Problem Constraints

// 1 <= A <= 109

// Input Format

// First and only argument is an integer A.

// Output Format

// Return an integer denoting the XOR of X and Y.

// Example Input

// A = 5

// Example Output

// 10

// Example Explanation

// The value of X will be 2 and the value of Y will be 8. The XOR of 2 and 8 is 10.
// BRUTE FORCE;
// const strangeEquality = A => {
//   let x = A - 1;
//   let y = A + 1;
//   let i = 1;
//   while ((A ^ x) !== A + x) {
//     i++;
//     x = A - i;
//   }
//   i = 1;
//   while ((A ^ y) !== A + y) {
//     i++;
//     y = A + i;
//   }

//   return x ^ y;
// }

const strangeEquality = (A) => {
  let countOfSignificantBits = 0;
  let tempA = A;

  // Count the number of significant bits in A
  while (tempA !== 0) {
    tempA = tempA >> 1;
    countOfSignificantBits++;
  }

  // Calculate x: Flip all the 0-bits in A
  let x = 0;
  for (let i = countOfSignificantBits - 1; i >= 0; i--) {
    if ((A & (1 << i)) === 0) {
      x = x + (1 << i);
    }
  }

  // Calculate y: Set the first bit beyond the most significant bit of A
  let y = 1 << countOfSignificantBits;

  // Return XOR of x and y
  return x ^ y;
};

console.log(strangeEquality(10)); // 21 | x=5 | y=16

console.log(strangeEquality(5804174)); // 10973041
