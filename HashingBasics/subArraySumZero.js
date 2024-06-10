// Problem Description
// Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.

// If the given array contains a sub-array with sum zero return 1, else return 0.

// Problem Constraints
// 1 <= |A| <= 100000

// -10^9 <= A[i] <= 10^9

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return whether the given array contains a subarray with a sum equal to 0.

// Example Input
// Input 1:

//  A = [1, 2, 3, 4, 5]
// Input 2:

//  A = [4, -1, 1]

// Example Output
// Output 1:

//  0
// Output 2:

//  1

// Example Explanation
// Explanation 1:

//  No subarray has sum 0.
// Explanation 2:

//  The subarray [-1, 1] has sum 0.

//! prefix sum
// if prefix sum = 0 then the sum would have cancelled each other
//  if prefix sum is equsl at two indices that meand in between worl hve cancelled each other

const createPrefixSum = (A) => {
  let sum = 0;
  let pf = [];
  for (let el of A) {
    sum = sum + el;
    pf.push(sum);
  }
  return pf;
};

const subArrSumZero = (A) => {
  let pf = createPrefixSum(A);
  let mapSet = new Set();
  for (let el of pf) {
    if (el === 0) return 1;
    else mapSet.add(el);
  }
  if (mapSet.size === A.length) return 0;
  else return 1;
};

console.log(subArrSumZero([1, 2, 3, 4, 5]));
console.log(subArrSumZero([4, -1, 1]));
