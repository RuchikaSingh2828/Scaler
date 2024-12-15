//! Problem Description

// Given an integer A, find and return the total number of digit 1 appearing in all non-negative integers less than or equal to A.

// Problem Constraints

// 0 <= A <= 109

// Input Format

// The only argument given is the integer A.

// Output Format

// Return the total number of digit 1 appearing in all non-negative integers less than or equal to A.

// Example Input

// Input 1:
//  A = 10
// Input 2:
//  A = 11

// Example Output

// Output 1:
//  2
// Output 2:
//  4

//? APPROACH :
// up to 10, there is 1 one.
// up to 20, there are 2 one’s.
// .
// .
// up to 131, there are 14 one’s
// up to 13x(x>1), there are 14 one’s.

// Number of 1’s at one’s position = (n/10) + (n%10!=0)

// Try to find the formula for ten’s place, hundred’s place, and so on.

// Solution can be summarised into 4 steps:
// 1) Initialize ans = 0
// 2) Iterate over i from 1 to n incrementing by 10 times in each iteration.
// 3) Add (n / (i * 10 ) ) * i to ans after each (i * 10) interval.
// 4) Add min( max((n mod (i * 10) – i + 1, 0), i) to ans.

const countOfOnes = (A) => {
  let ans = 0;
  for (let i = 1; i <= A; i *= 10) {
    const divider = i * 10;
    const completeSets = Math.floor(A / divider);
    const remainder = A % divider;
    ans += completeSets * i + Math.min(Math.max(remainder - i + 1, 0), i);
  }
  return ans;
};

// console.log(countOfOnes(800)); //260
// console.log(countOfOnes(10)); //2
console.log(countOfOnes(13)); //6
console.log(countOfOnes(80)); //18
