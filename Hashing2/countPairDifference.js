// Problem Description

// You are given an array A of N integers and an integer B.
// Count the number of pairs (i,j) such that A[i] - A[j] = B and i ≠ j.

// Since the answer can be very large, return the remainder after dividing the count with 109+7.

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
// B = 4
// Input 2:

// A = [1, 2, 1, 2]
// B = 1

// Example Output

// Output 1:

// 1
// Output 2:

// 4

// Example Explanation

// Example 1:

// The only pair is (2, 3) which gives difference as 4
// Example 2:

// The pair which gives difference as 3 are (2, 1), (4, 1), (2, 3) and (4, 3).
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

const countPairDifference = (A, B) => {
  const mod = 1e9 + 7;
  const map = createMap(A);
  let count = 0;
  // A.length;
  if (B === 0) {
    for (let val of map.values()) {
      count = (count + val * (val - 1)) % mod;
    }
  } else {
    for (let i = 0; i < A.length; i++) {
      let target = A[i] - B;
      if (map.has(target)) {
        count = (count + map.get(target)) % mod;
      }
    }
  }

  return count;
};

// console.log(countPairDifference([3, 5, 1, 2], 4)); // Output: 1
// console.log(countPairDifference([1, 2, 1, 2], 1)); // Output: 4
// console.log(countPairDifference([1, 1, 1, 2], 1)); // Output: 3
console.log(countPairDifference([1, 1, 1, 1], 0)); // Output: 12
console.log(countPairDifference([1, 2, 3, 4, 5], 2)); // Output: 3
console.log(countPairDifference([10, 20, 30, 40, 50], 10)); // Output: 4
console.log(countPairDifference([1, 3, 5, 7, 9], 4)); // Output: 3
console.log(countPairDifference([1000000000, 999999999, 999999998], 1)); // Output: 2
console.log(countPairDifference([1], 1)); // Output: 0
console.log(countPairDifference([], 1)); // Output: 0
console.log(countPairDifference([1, 2, 3, 4, 5], 10)); // Output: 0
console.log(countPairDifference([5, 5, 5, 5, 5], 0)); // Output: 20
console.log(countPairDifference([1, 2, 3, 4, 5], -1)); // Output: 4
console.log(countPairDifference([1, 2, 3, 4, 5], -2)); // Output: 3
console.log(countPairDifference([1, 2, 3, 4, 5], -3)); // Output: 2
console.log(countPairDifference([1, 2, 3, 4, 5], -4)); // Output: 1
