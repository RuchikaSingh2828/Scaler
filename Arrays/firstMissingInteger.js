// Q3. First Missing Integer

// Problem Description
// Given an unsorted integer array, A of size N. Find the first missing positive integer.

// Note: Your algorithm should run in O(n) time and use constant space.

// Problem Constraints
// 1 <= N <= 1000000

// -109 <= A[i] <= 109

// Input Format
// First argument is an integer array A.

// Output Format
// Return an integer denoting the first missing positive integer.

// Example Input
// Input 1:

// [1, 2, 0]
// Input 2:

// [3, 4, -1, 1]
// Input 3:

// [-8, -7, -6]

// Example Output
// Output 1:

// 3
// Output 2:

// 2
// Output 3:

// 1

// Example Explanation
// Explanation 1:

// A = [1, 2, 0]
// First positive integer missing from the array is 3.
// Explanation 2:

// A = [3, 4, -1, 1]
// First positive integer missing from the array is 2.
// Explanation 3:

// A = [-8, -7, -6]
// First positive integer missing from the array is 1.

const swap = (A, i, j) => {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
  return A;
};

const firstMissingInteger = (A) => {
  let i = 0;
  let n = A.length;
  while (i < n) {
    let correctIndex = A[i] - 1;
    if (correctIndex >= 0 && correctIndex < n) {
      if (i !== correctIndex) {
        swap(A, i, correctIndex);
      } else {
        i++;
      }
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    let correctIndex = A[i] - 1;
    if (i !== correctIndex) {
      return i + 1;
    }
  }

  return A.length;
};

const A1 = [1, 2, 0];
const A2 = [3, 4, -1, 1];
const A3 = [-8, -7, -6];
console.log(firstMissingInteger(A1));
console.log(firstMissingInteger(A2));
console.log(firstMissingInteger(A3));
