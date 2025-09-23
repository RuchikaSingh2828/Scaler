// Problem Description

// There are two sorted arrays A and B of sizes N and M respectively.

// Find the median of the two sorted arrays ( The median of the array formed by merging both the arrays ).

// NOTE:

// The overall run time complexity should be O(log(m+n)).
// IF the number of elements in the merged array is even, then the median is the average of (n/2)th and (n/2+1)th element. For example, if the array is [1 2 3 4], the median is (2 + 3) / 2.0 = 2.5.

// Problem Constraints

// 1 <= N + M <= 2*106

// Input Format

// The first argument is an integer array A of size N.
// The second argument is an integer array B of size M.

// Output Format

// Return a decimal value denoting the median of two sorted arrays.

// Example Input

// Input 1:

//  A = [1, 4, 5]
//  B = [2, 3]
// Input 2:

//  A = [1, 2, 3]
//  B = [4]

// Example Output

// Output 1:

//  3.0
// Output 2:

//  2.5

// Example Explanation

// Explanation 1:

//  The median of both the sorted arrays will be 3.0.
// Explanation 2:

//  The median of both the sorted arrays will be (2+3)/2 = 2.5.

const findMedianSortedArrays = (A, B) => {
  const n = A.length;
  const m = B.length;

  // Always binary search on the smaller array
  if (n > m) return findMedianSortedArrays(B, A);

  // do binary search on A
  let l = 0;
  let r = n;
  //   We set l = 0 and r = n (not n - 1).
  // Here’s why:
  // We are not searching over indices of A, but over the “cut positions” (partitions) between elements.
  // A cut can be before the first element (cutA = 0)
  // Or after the last element (cutA = n)
  // So there are actually n + 1 possible cut positions in A.
  // Example:
  // For A = [1, 2] (n=2) → possible cutA values:

  // cutA = 0  → |  1  2
  // cutA = 1  → 1 |  2
  // cutA = 2  → 1  2 |

  const total = n + m;
  const half = Math.floor((total + 1) / 2); // half length of the combined arrays

  while (l <= r) {
    const cutA = Math.floor((l + r) / 2); // cut position in A
    const cutB = half - cutA; // cut position in B

    const l1 = cutA > 0 ? A[cutA - 1] : -Infinity;
    const l2 = cutB > 0 ? B[cutB - 1] : -Infinity;
    const r1 = cutA < n ? A[cutA] : Infinity;
    const r2 = cutB < m ? B[cutB] : Infinity;

    if (l1 <= r2 && l2 <= r1) {
      if (total % 2 === 0) {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      } else {
        return Math.max(l1, l2);
      }
    } else if (l1 > r2) {
      // we are too right in A, need to go left
      r = cutA - 1;
    } else {
      // we are too left in A, need to go right
      l = cutA + 1;
    }
  }

  return 0.0; // control should never reach here if input arrays are sorted
};

console.log(findMedianSortedArrays([1, 4, 5], [2, 3])); // 3.0
console.log(findMedianSortedArrays([1, 2, 3], [4])); // 2.5
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([1, 2, 3, 6], [4, 5])); // 3.5
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6])); // 3.5
console.log(findMedianSortedArrays([1, 2], [3, 4, 5, 6])); // 3.5
console.log(findMedianSortedArrays([1, 2, 3, 4], [5, 6])); // 3.5
console.log(findMedianSortedArrays([1, 2, 3, 4, 5], [6])); // 3.5
console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6], [7])); // 4.0
console.log(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7])); // 4.0
