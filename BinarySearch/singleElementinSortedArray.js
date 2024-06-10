// Problem Description
// Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

// Elements which are appearing twice are adjacent to each other.

// NOTE: Users are expected to solve this in O(log(N)) time.

// Problem Constraints
// 1 <= |A| <= 100000

// 1 <= A[i] <= 10^9

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return the single element that appears only once.

// Example Input
// Input 1:

// A = [1, 1, 7]
// Input 2:

// A = [2, 3, 3]

// Example Output
// Output 1:

//  7
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  7 appears once
// Explanation 2:

//  2 appears once

function findSingleElement(A) {
  let l = 0;
  let r = A.length;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (A[mid] !== A[mid - 1] && A[mid] !== A[mid + 1]) return A[mid];

    let firstOccurance = mid;
    if (A[mid] === A[mid - 1]) {
      firstOccurance = mid - 1;
    }
    if (firstOccurance % 2 === 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}
