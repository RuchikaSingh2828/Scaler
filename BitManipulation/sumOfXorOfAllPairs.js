// Problem Description

// Given an array A of N integers. Find the sum of bitwise XOR all pairs of numbers in the array.

// Since the answer can be large, return the remainder after the dividing the answer by 109+7.

// Problem Constraints

// 1 <= N <= 105

// 1 <= A[i] < 109

// Input Format

// Only argument A is an array of integers

// Output Format

// Return an integer denoting the sum of xor of all pairs of number in the array.

// Example Input

// Input 1:
// A = [1, 2, 3]
// Input 2:
// A = [3, 4, 2]

// Example Output

// Output 1:
// 6
// Output 2:
// 14

// Example Explanation

// For Input 1:
// Pair    Xor
// {1, 2}  3
// {1, 3}  2
// {2, 3}  1
// Sum of xor of all pairs = 3 + 2 + 1 = 6.
// For Input 2:
// Pair    Xor
// {3, 4}  7
// {3, 2}  1
// {4, 2}  6
// Sum of xor of all pairs = 7 + 1 + 6 = 14.

//! HINT:
// If there are X elements with the i-th bit set and
// Y elements with i-th bit unset, then the number of xor
// pair where the i-th bit will be set is X*Y

// For any bit position in all numbers:

// If k numbers have 1 in that position, and (n-k) numbers have 0
// How many pairs will contribute 1 to the XOR sum in that position?

const sumOfXorPairs = (A) => {
  const MOD = 1000000007;
  let sum = 0;
  for (let i = 0; i < 31; i++) {
    let setCount = 0;

    for (let j = 0; j < A.length; j++) {
      if ((A[j] & (1 << i)) !== 0) {
        setCount++;
      }
    }
    sum = (sum + ((setCount * (A.length - setCount)) % MOD) * (1 << i)) % MOD;
  }
  return sum % MOD;
};

// The issue is with handling large numbers. When we do (1<<i) for larger i values and multiply, it might overflow. Let's modify the calculation:
function sumOfXorPairs(A) {
  const MOD = 1000000007;
  let sum = 0;
  for (let i = 0; i < 31; i++) {
    let setCount = 0;
    for (let j = 0; j < A.length; j++) {
      if ((A[j] & (1 << i)) !== 0) {
        setCount++;
      }
    }
    let pairs = (BigInt(setCount) * BigInt(A.length - setCount)) % BigInt(MOD);
    let contribution = (pairs * BigInt(1 << i)) % BigInt(MOD);
    sum = (sum + Number(contribution)) % MOD;
  }
  return sum;
}
