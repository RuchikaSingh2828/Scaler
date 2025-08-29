// Problem Description

// Given an array of integers A and an integer B.
// Find the total number of subarrays having sum equals to B.

// Problem Constraints

//  1 <= length of the array <= 50000
// -1000 <= A[i] <= 1000

// Input Format

// The first argument given is the integer array A.
// The second argument given is integer B.

// Output Format

// Return the total number of subarrays having sum equals to B.

// Example Input

// Input 1:
// A = [1, 0, 1]
// B = 1
// Input 2:
// A = [0, 0, 0]
// B = 0

// Example Output

// Output 1:
// 4
// Output 2:
// 6

const createMap = (A) => {
  let sum = A[0];
  let map = new Map();
  map.set(sum, 1);
  for (let i = 1; i < A.length; i++) {
    sum += A[i];
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return map;
};

const subarrayWithSumk = (A, B) => {
  let map = new Map();
  map.set(0, 1);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (map.has(sum - B)) {
      count += map.get(sum - B);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};

// console.log(subarrayWithSumk([1, 0, 1], 1)); // 4
// console.log(subarrayWithSumk([0, 0, 0], 0)); // 6
// console.log(subarrayWithSumk([3, 4, 7, 2, -3, 1, 4, 2], 7)); // 4
// console.log(subarrayWithSumk([1, 2, 3], 3)); // 2

console.log(
  subarrayWithSumk(
    [
      -1, -21, 20, -48, 13, -8, 26, 25, 12, 26, 19, 25, -29, -32, -24, -18, 41,
      -22, -39, -32, -26, 0, -37, -47, -42, -17, -23, 20, -50, 37, 37, 15, 48,
      -5, 35, 38, -37, -24, 15, 49, 6, -35, -5, 41, 42, -4, -18, -23, 36, 30,
      -17, -5, 32, 2, 15, 18, 4, -40, -15, 19, -21, 22, -25, -5, -42, -28, -34,
      -13, -23, -7, 49, 34, 30,
    ],
    -48
  )
); // 7
