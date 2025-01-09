// Problem Description

// Given an integer array A of N integers, find the pair of integers in the array which have minimum XOR value. Report the minimum XOR value.

// Problem Constraints

// 2 <= length of the array <= 100000
// 0 <= A[i] <= 109

// Input Format

// First and only argument of input contains an integer array A.

// Output Format

// Return a single integer denoting minimum xor value.

// Example Input

// Input 1:

//  A = [0, 2, 5, 7]
// Input 2:

//  A = [0, 4, 7, 9]

// Example Output

// Output 1:

//  2
// Output 2:

//  3

// Example Explanation

// Explanation 1:

//  0 xor 2 = 2

// Hint: Sort the array.

// Think of how you can use the sorted array to find the minimum XOR.
// Let’s suppose that the answer is not X[i] XOR X[i+1], but A XOR B and there exists C in the array such as A <= C <= B.

// Next is the proof that either A XOR C or C XOR B is smaller than A XOR B.

// Let A[i] = 0/1 be the i-th bit in the binary representation of A
// Let B[i] = 0/1 be the i-th bit in the binary representation of B
// Let C[i] = 0/1 be the i-th bit in the binary representation of C

// This is with the assumption that all of A, B and C are padded with 0 on the left until they all have the same length

// Example: A = 169, B = 187, C = 185

// A = 10101001
// B = 10111011
// C = 10111001

// A^C - 00010000
// B^C - 00000010 // smallest
// A^B - 00010010

// Let i be the leftmost (biggest) index such that A[i] differs from B[i]. There are 2 cases now:
// 1) C[i] = A[i] = 0,
// then (A XOR C)[i] = 0 and (A XOR B)[i] = 1
// This implies (A XOR C) < (A XOR B)
// 2) C[i] = B[i] = 1,
// then (B XOR C)[i] = 0 and (A XOR B)[i] = 1
// This implies (B XOR C) < (A XOR B)

// Time complexity: O(N * logN) to sort the array and O(N) to find the smallest XOR
// Space complexity: O(N)

// intuition is for xor same bits give zero and differnt bits give set bit. thus to minimize maximum the XOR value the two bits should be same
// therefore giving us unset bit . Example : 110 ^110 = 000.
// thusit will be only logical to keep number of closer range together thus sorting it
// if differnt bits are to occur ther are to be as right as possible - least significant as possible

const findPairWithinXORValue = (A) => {
  let min = Infinity;
  A = A.sort((a, b) => a - b);
  for (let index = 1; index < A.length; index++) {
    const prev = A[index - 1];
    let xor = prev ^ A[index];
    if (xor < min) {
      min = xor;
    }
  }

  return min;
};
// console.log(findPairWithinXORValue([0, 2, 5, 7])); // 2
// console.log(findPairWithinXORValue([0, 4, 7, 9])); // 3
// console.log(findPairWithinXORValue([12, 4, 6, 2])); // 2
console.log(findPairWithinXORValue([15, 5, 1, 10, 2])); // 3
