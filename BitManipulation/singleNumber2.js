// Problem Description

// Given an array of integers, every element appears thrice except for one, which occurs once.

// Find that element that does not appear thrice.

// NOTE: Your algorithm should have a linear runtime complexity.

// Could you implement it without using extra memory?

// Problem Constraints

// 2 <= A <= 5*106

// 0 <= A <= INTMAX

// Input Format

// First and only argument of input contains an integer array A.

// Output Format

// Return a single integer.

// Example Input

// Input 1:

//  A = [1, 2, 4, 3, 3, 2, 2, 3, 1, 1]
// Input 2:

//  A = [0, 0, 0, 1]

// Example Output

// Output 1:

//  4
// Output 2:

//  1

const getSingleElement = (A) => {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let countOf1s = 0;
    for (const element of A) {
      if ((element & (1 << i)) !== 0) countOf1s++;
    }
    if (countOf1s % 3 !== 0) ans += Math.pow(2, i);
  }
  return ans;
};

console.log(getSingleElement([0, 0, 0, 1]));
console.log(getSingleElement([1, 2, 4, 3, 3, 2, 2, 3, 1, 1]));
