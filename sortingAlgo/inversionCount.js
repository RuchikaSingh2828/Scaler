// Problem Description

// Given an array of integers A. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. Find the total number of inversions of A modulo (109 + 7).

// Problem Constraints

// 1 <= length of the array <= 105

// 1 <= A[i] <= 109

// Input Format

// The only argument given is the integer array A.

// Output Format

// Return the number of inversions of A modulo (109 + 7).

// Example Input

// Input 1:

// A = [1, 3, 2]
// Input 2:

// A = [3, 4, 1, 2]

// Example Output

// Output 1:

// 1
// Output 2:

// 4

// Example Explanation

// Explanation 1:

// The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2]
// Explanation 2:

// The pair (0, 2) is an inversion as 0 < 2 and A[0] > A[2]
// The pair (0, 3) is an inversion as 0 < 3 and A[0] > A[3]
// The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2]
// The pair (1, 3) is an inversion as 1 < 3 and A[1] > A[3]

const merge = (A, lo, mid, hi) => {
  let n = mid - lo + 1;
  let m = hi - mid;

  let merged = new Array(n + m);
  let left = lo;
  let right = mid + 1;
  let k = 0;
  let inversions = 0;

  while (left <= mid && right <= hi) {
    if (A[left] <= A[right]) {
      merged[k] = A[left];
      left++;
    } else {
      merged[k] = A[right];
      inversions += mid - left + 1; // All remaining elements in left subarray are greater than A[right]
      right++;
    }
    k++;
  }

  while (left <= mid) {
    merged[k] = A[left];
    left++;
    k++;
  }
  while (right <= hi) {
    merged[k] = A[right];
    right++;
    k++;
  }

  for (let i = 0; i < merged.length; i++) {
    A[lo + i] = merged[i];
  }

  return inversions % 1000000007;
};

const mergeSort = (A, lo, hi) => {
  if (lo >= hi) return 0;
  let mid = Math.floor((lo + hi) / 2);
  let leftInversions = mergeSort(A, lo, mid);
  let rightInversions = mergeSort(A, mid + 1, hi);
  let mergeInversions = merge(A, lo, mid, hi);
  return (leftInversions + rightInversions + mergeInversions) % 1000000007;
};

let A = [5, 3, 2, 4, 1];
let n = A.length;
let mergeSortCount = mergeSort(A, 0, n - 1);
console.log(mergeSortCount);
