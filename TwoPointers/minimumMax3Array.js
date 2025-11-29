// Problem Description

// You are given 3 sorted arrays A, B and C.

// Find i, j, k such that : max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized.

// Return the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])).

// Problem Constraints

// 1 <= len(A), len(B), len(c) <= 106

// 0 <= A[i], B[i], C[i] <= 107

// Input Format

// First argument is an integer array A.

// Second argument is an integer array B.

// Third argument is an integer array C.

// Output Format

// Return an single integer denoting the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])).

// Example Input

// Input 1:

//  A = [1, 4, 10]
//  B = [2, 15, 20]
//  C = [10, 12]
// Input 2:

//  A = [3, 5, 6]
//  B = [2]
//  C = [3, 4]

// This problem asks us to find indices i, j, and k from three sorted arrays A, B, and C, respectively,
// such that the maximum difference between any two of the selected elements A[i], B[j], and C[k] is minimized.

// Let x = A[i], y = B[j], and z = C[k].

// We are trying to minimize the value:
// M = max(|x - y|, |y - z|, |z - x|)
// The term M represents the maximum pairwise difference among the three chosen elements.

// When three numbers are chosen, x, y, and z, if we sort them as n1 <= n2 <= n3,
// then the maximum pairwise difference is simply the difference between the largest and the smallest number: n3 - n1.

// Therefore, minimizing M is equivalent to minimizing the difference between the maximum and minimum elements chosen from the three arrays.

// If we let Min = min(A[i], B[j], C[k]) and Max = max(A[i], B[j], C[k]), the expression to minimize becomes:
// M = Max - Min

// Since the arrays are sorted, we can use a three-pointer approach (similar to merging three sorted lists) to efficiently find the minimum possible value of Max - Min.

// Algorithm: Three-Pointer Approach

// The core idea is to maintain pointers i, j, and k for arrays A, B, and C, respectively,
// and at each step, try to reduce the maximum pairwise difference by incrementing the pointer that points to the minimum of the three current elements.

// Incrementing the minimum element’s pointer is the only action that guarantees the current minimum value will not increase
// and has the best chance to reduce the overall range Max - Min.

// 	1.	Initialization: Initialize three pointers: i = 0, j = 0, k = 0.
//     Initialize the variable to store the minimum max difference found so far (our result): Result = infinity.
// 2. Iteration: Continue the loop as long as all pointers are within the bounds of their respective arrays (i < len(A), j < len(B), and k < len(C)).
//    Current elements:
//    x = A[i]
//    y = B[j]
//    z = C[k]
//    Find Min and Max:
//    Min = min(x, y, z).
//    Max = max(x, y, z)
//    Update Result:
//    Current_Diff = Max - Min
//    Result = min(Result, Current_Diff)
//    Advance the pointer:
//    To minimize the difference in the next step, we must try to increase the minimum element so that the range Max - Min shrinks.
//    If x is the minimum element (x == Min), increment i.
//    Else if y is the minimum element (y == Min), increment j.
//    Else (z must be the minimum element, z == Min), increment k.
// 3. Termination: The loop terminates when any one of the pointers reaches the end of its array.
//    Since the arrays are sorted and we always advance the pointer corresponding to the minimum value,
//       once we run out of elements in one array,
//       we cannot form any new triplet that has a better chance of a smaller range than the ones already processed.

// This checks only O(len(A)+len(B)+len(C)) states (each pointer only moves forward), so time complexity is linear. Space is O(1).

const minimumMax3Array = (A, B, C) => {
  let i = 0,
    j = 0,
    k = 0;
  let result = Infinity;
  let nA = A.length;
  let nB = B.length;
  let nC = C.length;

  while (i < nA && j < nB && k < nC) {
    let x = A[i];
    let y = B[j];
    let z = C[k];

    let currentMin = Math.min(x, Math.min(y, z));
    let currentMax = Math.max(x, Math.max(y, z));

    result = Math.min(result, currentMax - currentMin);

    // Move the pointer of the array with the minimum element
    if (currentMin === x) {
      i++;
    } else if (currentMin === y) {
      j++;
    } else {
      k++;
    }
  }

  return result;
};
let A = [1, 4, 10],
  B = [2, 15, 20],
  C = [10, 12];
console.log(minimumMax3Array(A, B, C)); // 5

A = [3, 5, 6];
B = [2];
C = [3, 4];
console.log(minimumMax3Array(A, B, C)); // 1
