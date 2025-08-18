// Use Hint
// Problem Description

// Given an Array of integers B, and a target sum A.
// Check if there exists a pair (i,j) such that Bi + Bj = A and i!=j.


// Problem Constraints

// 1 <= Length of array B <= 105
// 0 <= Bi <= 109
// 0 <= A <= 109


// Input Format

// First argument A is the Target sum, and second argument is the array B


// Output Format

// Return an integer value 1 if there exists such pair, else return 0.


// Example 

// Input 1:
// A = 8   
// B = [3, 5, 1, 2, 1, 2]

// Input 2:
// A = 21   
// B = [9, 10, 7, 10, 9, 1, 5, 1, 5]


// Output 1: 1
// Output 2: 0


const checkPairSum = (A, B) => {
  const seen = new Set();

  for (let i = 0; i < B.length; i++) {
    const complement = A - B[i];
    if (seen.has(complement)) {
      return 1; // Pair found
    }
    seen.add(B[i]);
  }

  return 0; // No pair found
}

console.log(checkPairSum(8, [3, 5, 1, 2, 1, 2])); // Output: 1
console.log(checkPairSum(21, [9, 10, 7, 10, 9, 1, 5, 1, 5])); // Output: 0




