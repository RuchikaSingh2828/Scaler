// Problem Description

// Given an array of integers A, find and return the count of divisors of each element of the array.

// NOTE: The order of the resultant array should be the same as the input array.

// Problem Constraints

// 1 <= length of the array <= 100000
// 1 <= A[i] <= 106

// Input Format

// The only argument given is the integer array A.

// Output Format

// Return the count of divisors of each element of the array in the form of an array.

// Example Input

// Input 1:

//  A = [2, 3, 4, 5]
// Input 2:

//  A = [8, 9, 10]

// Example Output

// Output 1:

//  [2, 2, 3, 2]
// Output 1:

//  [4, 3, 4]

// Example Explanation

// Explanation 1:

//  The number of divisors of 2 : [1, 2], 3 : [1, 3], 4 : [1, 2, 4], 5 : [1, 5]
//  So the count will be [2, 2, 3, 2].
// Explanation 2:

//  The number of divisors of 8 : [1, 2, 4, 8], 9 : [1, 3, 9], 10 : [1, 2, 5, 10]
//  So the count will be [4, 3, 4].

const countDivisor = (A) => {
  let heigest = -Infinity;
  let n = A.length;
  for (let index = 0; index < n; index++) {
    if (heigest < A[index]) heigest = A[index];
  }
  let len = heigest + 1;
  const divisor_arr = new Array(len + 1).fill(0);
  for (let i = 1; i < len; i++) {
    for (let j = i; j < len; j = j + i) {
      if (j % i === 0) divisor_arr[j] += 1;
    }
  }

  let ans = [];
  for (let i = 0; i < n; i++) {
    // let index = A[i];
    ans.push(divisor_arr[A[i]]);
  }
  return ans;
};

console.log(countDivisor([8, 9, 10]));
