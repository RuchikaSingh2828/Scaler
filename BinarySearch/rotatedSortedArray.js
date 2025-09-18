// Problem Description

// Given a sorted array of integers A of size N and an integer B,
// where array A is rotated at some pivot unknown beforehand.

// For example, the array [0, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2].

// Your task is to search for the target value B in the array. If found, return its index; otherwise, return -1.

// You can assume that no duplicates exist in the array.

// NOTE: You are expected to solve this problem with a time complexity of O(log(N)).

// Problem Constraints

// 1 <= N <= 1000000
// 1 <= A[i] <= 109
// All elements in A are Distinct.

// Input Format

// The First argument given is the integer array A.
// The Second argument given is the integer B.

// Output Format

// Return index of B in array A, otherwise return -1

// Example Input

// Input 1:

// A = [4, 5, 6, 7, 0, 1, 2, 3]
// B = 4
// Input 2:

// A : [ 9, 10, 3, 5, 6, 8 ]
// B : 5

const search = (A, B) => {
  // let left = 0;
  // let right = A.length - 1;

  // while (left <= right) {
  //   let mid = Math.floor((left + right) / 2);

  //   if (A[mid] === B) {
  //     return mid;
  //   }

  //   // check if B is in the right sorted portion
  //   if (B < A[0]) {
  //     // B is in the right portion
  //     if (A[mid] < A[0]) {
  //       // mid is also in the right portion
  //       if (A[mid] < B) {
  //         left = mid + 1;
  //       } else {
  //         right = mid - 1;
  //       }
  //     } else {
  //       // mid is in the left portion
  //       left = mid + 1;
  //     }
  //   } else {
  //     // B is in the left portion
  //     if (A[mid] >= A[0]) {
  //       // mid is also in the left portion
  //       if (A[mid] < B) {
  //         left = mid + 1;
  //       } else {
  //         right = mid - 1;
  //       }
  //     } else {
  //       // mid is in the right portion
  //       right = mid - 1;
  //     }
  //   }
  // }

  // return -1;

  let left = 0;
  let right = A.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (A[mid] === B) return mid;
    if (A[left] <= A[mid]) {
      //that means the left part of mid is sorted
      // lets check if B lies in this left part
      if (A[left] <= B && B < A[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      //left part is sorted
      // check if B is no the left of mid
      if (A[mid] < B && B <= A[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2, 3], 4)); // 0
console.log(search([9, 10, 3, 5, 6, 8], 5)); // 3
console.log(search([1, 2, 3, 4, 5], 3)); // 2
console.log(search([5, 1, 2, 3, 4], 1)); // 1
console.log(search([3, 4, 5, 1, 2], 6)); // -1
console.log(search([30, 40, 50, 10, 20], 10)); // 3
console.log(search([2, 3, 4, 5, 6, 7, 8, 9, 1], 9)); // 7
console.log(search([6, 7, 8, 9, 1, 2, 3, 4, 5], 6)); // 0
console.log(search([1], 1)); // 0
console.log(search([1], 0)); // -1
