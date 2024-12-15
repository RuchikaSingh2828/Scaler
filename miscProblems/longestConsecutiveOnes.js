// Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.

// Input Format

// The only argument given is string A.
// Output Format

// Return the length of the longest consecutive 1’s that can be achieved.
// Constraints

// 1 <= length of string <= 1000000
// A contains only characters 0 and 1.
// For Example

// Input 1:
//     A = "111000"
// Output 1:
//     3

// Input 2:
//     A = "111011101"
// Output 2:
//     7

const longestConsequtiveTraversal = (A) => {
  let arr = A.split('');
  let ps = new Array(arr.length),
    ss = new Array(arr.length);
  let countOf1s = 0,
    noOfOnesOnLeftAndRight = +arr[0] === 1 ? 1 : 0,
    psum = 0,
    ssum = 0,
    ans = 0;

  // Calculation for prefix sum
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === 1) {
      countOf1s++;
      psum += 1;
      ps[i] = psum;
    } else if (+arr[i] === 0) {
      psum = 0;
      ps[i] = 0;
    }
  }

  // calculation for suffix sum
  for (let i = arr.length - 1; i >= 0; i--) {
    if (+arr[i] === 1) {
      ssum += 1;
      ss[i] = ssum;
    } else if (+arr[i] === 0) {
      ssum = 0;
      ss[i] = 0;
    }
  }

  // iterating through each element ans checking its left 1's and right 1's
  for (let i = 1; i < arr.length - 1; i++) {
    if (+arr[i] === 1) {
      noOfOnesOnLeftAndRight = ps[i - 1] + ss[i + 1] + 1;
      if (countOf1s - noOfOnesOnLeftAndRight > 1) {
        noOfOnesOnLeftAndRight += 1;
      }
    } else {
      if (countOf1s - (ps[i - 1] + ss[i + 1]) > 1) {
        noOfOnesOnLeftAndRight = ps[i - 1] + ss[i + 1] + 1;
      } else {
        noOfOnesOnLeftAndRight = ps[i - 1] + ss[i + 1];
      }
    }
    ans = Math.max(ans, noOfOnesOnLeftAndRight);
  }

  return ans;
};
// let A = 11010110000000000;
// let A = 111011101;
// let A = '00000011111111'; // 8
// let A = '0111110110'; // 7
let A = '11110000100111000101110010111101'; // 6

console.log(longestConsequtiveTraversal(A));
