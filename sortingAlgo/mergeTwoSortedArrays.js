// Problem Description

// Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.

// Note: A linear time complexity is expected and you should avoid use of any library function.

// Problem Constraints

// -2×109 <= A[i], B[i] <= 2×109
// 1 <= |A|, |B| <= 5×104

// Input Format

// First Argument is a 1-D array representing  A.
// Second Argument is also a 1-D array representing B.

// Output Format

// Return a 1-D vector which you got after merging A and B.

// Example Input

// Input 1:

// A = [4, 7, 9]
// B = [2, 11, 19]
// Input 2:

// A = [1]
// B = [2]

// Example Output

// Output 1:

// [2, 4, 7, 9, 11, 19]
// Output 2:

// [1, 2]

const mergeTwoSortedArrays = function (A, B) {
  let n = A.length;
  let m = B.length;
  let mergedArray = new Array(n + m);
  let i = 0; // Pointer for A
  let j = 0; // Pointer for B
  let k = 0; // Pointer for mergedArray

  while (i < n && j < m) {
    if (A[i] <= B[j]) {
      mergedArray[k] = A[i];
      i++;
    } else {
      mergedArray[k] = B[j];
      j++;
    }
    k++;
  }

  // If there are remaining elements in A
  while (i < n) {
    mergedArray[k] = A[i];
    i++;
    k++;
  }

  // If there are remaining elements in B
  while (j < m) {
    mergedArray[k] = B[j];
    j++;
    k++;
  }

  return mergedArray;
};
