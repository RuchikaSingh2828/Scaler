// Problem Description

// Given an one-dimensional integer array A of size N and an integer B.

// Count all distinct pairs with difference equal to B.

// Here a pair is defined as an integer pair (x, y), where x and y are both numbers in the array and their absolute difference is B.

// Problem Constraints

// 1 <= N <= 104

// 0 <= A[i], B <= 105

// Input Format

// First argument is an one-dimensional integer array A of size N.

// Second argument is an integer B.

// Output Format

// Return an integer denoting the count of all distinct pairs with difference equal to B.

// Example Input

// Input 1:

//  A = [1, 5, 3, 4, 2]
//  B = 3
// Input 2:

//  A = [8, 12, 16, 4, 0, 20]
//  B = 4
// Input 3:

//  A = [1, 1, 1, 2, 2]
//  B = 0

// Example Output

// Output 1:

//  2
// Output 2:

//  5
// Output 3:

//  2

// Example Explanation

// Explanation 1:

//  There are 2 unique pairs with difference 3, the pairs are {1, 4} and {5, 2}
// Explanation 2:

//  There are 5 unique pairs with difference 4, the pairs are {0, 4}, {4, 8}, {8, 12}, {12, 16} and {16, 20}
// Explanation 3:

//  There are 2 unique pairs with difference 0, the pairs are {1, 1} and {2, 2}.

// i = 0
// j = 1
// We move the pointers based on diff = A[j] - A[i].

// 📌 Key Rules
// 1. If diff < B → increase j
// We need a bigger difference.

// 2. If diff > B → increase i
// We need a smaller difference.
// Also ensure i != j.

// 3. If diff == B → count this pair
// But while counting:

// Skip duplicates so we count each distinct pair only once.

// Then move both pointers forward to avoid recounting.

// ⚠️ Special Case: B == 0
// We need to count numbers that appear at least twice, only once each.
// Duplicates do NOT affect count because pairs must be distinct values, not distinct positions.

// Example: [1,1,1,2,2] → pairs: (1,1), (2,2)

function countPairsWithDiff(A, B) {
  // Sort in ascending numerical order
  A.sort((a, b) => a - b);

  const n = A.length;
  let count = 0;
  let i = 0;
  let j = 1;

  // Case 1: B == 0 → count numbers with duplicates only once
  if (B === 0) {
    while (i < n) {
      j = i + 1;

      if (j < n && A[j] === A[i]) {
        // Found duplicates → count once
        count++;

        let val = A[i];
        // Skip all duplicates
        while (i < n && A[i] === val) {
          i++;
        }
      } else {
        // No duplicate at this position
        i++;
      }
    }

    return count;
  }

  // Case 2: B > 0 → normal two-pointer
  while (j < n) {
    let diff = A[j] - A[i];

    if (i === j || diff < B) {
      j++;
    } else if (diff > B) {
      i++;
    } else {
      // diff == B
      count++;

      // Skip duplicates for A[i]
      let val_i = A[i];
      while (i < n && A[i] === val_i) {
        i++;
      }

      // Skip duplicates for A[j]
      let val_j = A[j];
      while (j < n && A[j] === val_j) {
        j++;
      }

      // Fix overlapping pointers
      if (j <= i) {
        j = i + 1;
      }
    }
  }

  return count;
}

console.log(countPairsWithDiff([1, 5, 3, 4, 2], 3)); // 2
console.log(countPairsWithDiff([8, 12, 16, 4, 0, 20], 4)); // 5
console.log(countPairsWithDiff([1, 1, 1, 2, 2], 0)); // 2
console.log(countPairsWithDiff([1, 2, 6, 6, 7, 9, 9], 3)); // 2
console.log(countPairsWithDiff([1, 3, 5, 7], 2)); // 3
console.log(countPairsWithDiff([1, 2, 3, 4, 5], 10)); // 0
