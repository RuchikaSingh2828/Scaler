// Q1. Add One To Number

// Problem Description
// Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ).

// The digits are stored such that the most significant digit is at the head of the list.

// NOTE: Certain things are intentionally left unclear in this question which you should practice asking the interviewer. For example: for this problem, the following are some good questions to ask :

// Q: Can the input have 0's before the most significant digit. Or, in other words, is 0 1 2 3 a valid input?
// A: For the purpose of this question, YES
// Q: Can the output have 0's before the most significant digit? Or, in other words, is 0 1 2 4 a valid output?
// A: For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.

// Problem Constraints
// 1 <= size of the array <= 1000000

// Input Format
// First argument is an array of digits.

// Output Format
// Return the array of digits after adding one.

// Example Input
// Input 1:

// [1, 2, 3]

// Example Output
// Output 1:

// [1, 2, 4]

const plusOne = (A) => {
  let i = A.length - 1;
  let diff = -1;
  while (i >= 0) {
    let sum = A[i] + 1;
    if (sum > 9) {
      diff = sum - 10;
      A[i] = diff;
      i--;
    } else {
      A[i] = sum;
      diff = -1;
      break;
    }
  }
  if (diff >= 0) A.unshift(1);

  for (let i = 0; i < A.length; ) {
    if (A[i] === 0) {
      A.shift();
    } else break;
  }
  return A;
};

console.log(plusOne([0]));
console.log(plusOne([9, 9, 9, 9, 9]));
console.log(plusOne([0, 0, 1, 9, 9, 9, 9, 9]));
