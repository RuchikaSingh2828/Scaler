// Problem Description

// Given an array A of N integers, convert that array into a min heap and return the array.

// NOTE: A min heap is a binary tree where every node has a value less than or equal to its children.

// Problem Constraints

// 1 ≤ N ≤ 105

// 0 ≤ A[i] ≤ 109

// Input Format

// First and only argument of input contains a single integer array A of length N.

// Output Format

// Return the reordered array A such that it forms a min heap.

// Example Input

// Input:

// A = [5, 13, -2, 11, 27, 31, 0, 19]

// Example Output

// Output:

// A = [-2, 5, 0, 13, 11, 19, 27, 31]

// Example Explanation

// One possible Heap is

//                 -2
//                /    \
//              5       0
//             / \    /  \
//           13  11  19   27
//           /
//         31

// It can be seen that each parent has a value smaller than its children. Hence it is a Valid Heap.

// The Heap in the Array format is [-2, 5, 0, 13, 11, 19, 27, 31].

// Some more possible heaps are  [-2, 0, 5, 13, 11, 27, 19, 31], [-2, 5, 0, 11, 27, 13, 19, 31], etc.
// You can return any possible Valid Heap Structure.

function buildHeap(A) {
  // code here
  let n = A.length;
  for (let i = 0; i < n; i++) {
    while (i < n) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      const smallest = i;

      if (left < n && A[left] < A[smallest]) {
        smallest = left;
      }
      if (right < n && A[right] < A[smallest]) {
        smallest = right;
      }

      if (smallest === i) {
        break;
      }
      [A[smallest], A[i]] = [A[i], A[smallest]];
      i = smallest;
    }
  }

  return A;
}
