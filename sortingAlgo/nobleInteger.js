// Problem Description
// Given an integer array A, find if an integer p exists in the array such that the number of integers greater than p in the array equals p.

// Problem Constraints
// 1 <= |A| <= 2*105
// -108 <= A[i] <= 108

// Input Format
// First and only argument is an integer array A.

// Output Format
// Return 1 if any such integer p is present else, return -1.

// Example Input
// Input 1:

//  A = [3, 2, 1, 3]
// Input 2:

//  A = [1, 1, 3, 3]

// Example Output
// Output 1:

//  1
// Output 2:

//  -1

// Example Explanation
// Explanation 1:

//  For integer 2, there are 2 greater elements in the array..
// Explanation 2:

//  There exist no integer satisfying the required conditions.
function findNobleInteger(A) {
  const reverseArr = A.sort((a, b) => b - a);
  if (A[0] === 0) return 1;
  for (let i = 1; i < A.length; i++) {
    if (A[i] === i) return 1;
  }
  return -1;
}

const input1 = [-4, -2, 0, -1, -6];
console.log(findNobleInteger(input1));
