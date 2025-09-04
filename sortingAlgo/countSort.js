// Problem Description

// Given an array A. Sort this array using Count Sort Algorithm and return the sorted array.

// Problem Constraints

// 1 <= |A| <= 105
// 1 <= A[i] <= 105

// Input Format

// The first argument is an integer array A.

// Output Format

// Return an integer array that is the sorted array A.

// Example Input

// Input 1:
// A = [1, 3, 1]
// Input 2:
// A = [4, 2, 1, 3]

// Example Output

// Output 1:
// [1, 1, 3]
// Output 2:
// [1, 2, 3, 4]

// Example Explanation

// For Input 1:
// The array in sorted order is [1, 1, 3].
// For Input 2:
// The array in sorted order is [1, 2, 3, 4].

function countSort(A) {
  let n = A.length;
  A = A.map(Number);
  let max = Math.max(...A);
  let frqArr = new Array(max + 1).fill(0);

  for (let i = 0; i < n; i++) {
    let val = A[i];
    frqArr[val]++;
  }
  let k = 0;
  for (let i = 0; i <= max; i++) {
    // iterating through frqArr;
    for (let j = 0; j < frqArr[i]; j++) {
      A[k] = i;
      k++;
    }
  }

  return A;
}
