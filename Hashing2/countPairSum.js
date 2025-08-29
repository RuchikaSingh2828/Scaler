// Problem Description

// You are given an array A of N integers and an integer B. Count the number of pairs (i,j) such that A[i] + A[j] = B and i ≠ j.

// Since the answer can be very large, return the remainder after dividing the count with 109+7.

// Note - The pair (i,j) is same as the pair (j,i) and we need to count it only once.

// Problem Constraints

// 1 <= N <= 105
// 1 <= A[i] <= 109
// 1 <= B <= 109

// Input Format

// First argument A is an array of integers and second argument B is an integer.

// Output Format

// Return an integer.

// Example Input

// Input 1:

// A = [3, 5, 1, 2]
// B = 8
// Input 2:

// A = [1, 2, 1, 2]
// B = 3

// Example Output

// Output 1:

// 1
// Output 2:

// 4

// Example Explanation

// Example 1:

// The only pair is (1, 2) which gives sum 8
// Example 2:

// The pair which gives sum as 3 are (1, 2), (1, 4), (2, 3) and (3, 4).

const createMap = (A) => {
  let freqMap = new Map();

  for (let i = 0; i < A.length; i++) {
    if (freqMap.has(A[i])) {
      freqMap.set(A[i], freqMap.get(A[i]) + 1);
    } else {
      freqMap.set(A[i], 1);
    }
  }
  return freqMap;
};

const countPairSum = (A, B) => {
  const createMap = (arr) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    return map;
  };
  const mod = 10e9 + 7;
  let freqMap = createMap(A);
  let set = new Set();
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) continue;

    let target = B - A[i];

    if (target !== A[i] && freqMap.has(target)) {
      count = (count + freqMap.get(target) * freqMap.get(A[i])) % mod;
      set.add(A[i]);
      set.add(target);
    } else if ((target === A[i]) & freqMap.has(A[i])) {
      const pairs = Math.floor(
        (freqMap.get(target) * (freqMap.get(target) - 1)) / 2
      );
      count = (count + pairs) % mod;
      set.add(target);
    }
  }

  return count;
};

console.log(countPairSum([3, 5, 1, 2], 8)); // Output: 1
console.log(countPairSum([1, 2, 1, 2], 3)); // Output: 4
console.log(countPairSum([9, 18, 17, 17, 6, 16, 13, 11, 15, 7], 15)); // Output: 1
console.log(countPairSum([11, 19, 11, 9, 1, 2], 2)); // Output: 0
