// //
// I'll help you understand this problem by breaking it down and providing additional examples to clarify what's happening.

// ## Understanding the Problem

// This problem is asking you to find the original array of integers when you're given an array that contains the GCD (Greatest Common Divisor) of every possible pair of elements from the original array.

// Let's understand what this means. If we have an original array of length n, then the GCD array will have n² elements because we calculate the GCD for:
// - Each element with itself (which is just the element itself)
// - Each element with every other element

// ## Breaking Down the First Example

// Let's examine the first example where A = [2, 2, 2, 2, 8, 2, 2, 2, 10]

// The original array is [2, 8, 10]. Let's verify how this creates the given GCD array:

// Imagine the GCD values arranged in a 3×3 matrix where each cell (i,j) contains GCD(original[i], original[j]):

// ```
//            │  2  │  8  │  10
// ───────────┼─────┼─────┼─────
//     2      │  2  │  2  │  2
//     8      │  2  │  8  │  2
//     10     │  2  │  2  │ 10
// ```

// Reading this matrix row by row gives us [2, 2, 2, 2, 8, 2, 2, 2, 10], which matches our input.

// ## Breaking Down the Second Example

// Let's look at the second example where A = [5, 5, 5, 15]

// The original array is [5, 15]. Verifying:

// ```
//           │  5  │  15
// ──────────┼─────┼─────
//     5     │  5  │  5
//     15    │  5  │ 15
// ```

// Reading this matrix row by row gives us [5, 5, 5, 15], which matches the input.

// ## Additional Examples

// Let me create some additional examples to help you understand better:

// ### Example 3:
// If the original array is [3, 6, 9], then the GCD array would be:

// ```
//            │  3  │  6  │  9
// ───────────┼─────┼─────┼─────
//     3      │  3  │  3  │  3
//     6      │  3  │  6  │  3
//     9      │  3  │  3  │  9
// ```

// Reading row by row: [3, 3, 3, 3, 6, 3, 3, 3, 9]

// ### Example 4:
// If the original array is [4, 7], then the GCD array would be:

// ```
//            │  4  │  7
// ───────────┼─────┼─────
//     4      │  4  │  1
//     7      │  1  │  7
// ```

// Reading row by row: [4, 1, 1, 7]

// ### Example 5:
// If the original array is [12, 18, 24], the GCD array would be:

// ```
//            │ 12  │ 18  │ 24
// ───────────┼─────┼─────┼─────
//     12     │ 12  │  6  │ 12
//     18     │  6  │ 18  │  6
//     24     │ 12  │  6  │ 24
// ```

// Reading row by row: [12, 6, 12, 6, 18, 6, 12, 6, 24]

// ## Key Insights

// 1. The diagonal elements of the matrix (where i=j) are always the original numbers themselves.
// 2. The matrix is symmetric because GCD(a,b) = GCD(b,a).
// 3. The problem asks you to find the original array given this GCD array.

// ## Approach to Solve

// To solve this problem, a key insight is that the elements on the diagonal of the GCD matrix are exactly the elements of the original array. However, when the array is flattened, you need to figure out which elements belong to the diagonal.

// If the original array has n elements, then:
// - The GCD array will have n² elements
// - The diagonal elements are at positions 0, n+1, 2(n+1), ..., (n-1)(n+1)

// This problem requires you to work backwards from the GCD array to determine how many elements were in the original array and what those elements were.

// but the above assumption is wrong
// const getAllGcdPairs = (A) => {
//   // Check if input is valid
//   if (!A || A.length === 0) {
//     return [];
//   }

//   let n = Math.sqrt(A.length); // as the gcd will have n2 length
//   if (n !== Math.floor(n)) {
//     throw new Error('Input array length is not a perfect square');
//   }

//   let result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(A[i * (n + 1)]);
//   }
//   return result;
// };
const getGcd = (x, y) => {
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
};

const getAllGcdPairs = (A) => {
  // Sort the array A in descending order to process the largest numbers first
  let gcds = [...A].sort((a, b) => b - a);
  console.log(gcds); // Log the sorted array for debugging purposes

  let ans = []; // Initialize an array to store the final answer
  let hmp = new Map(); // Create a map to track the frequency of GCDs

  // Iterate over each element in the sorted array
  for (let i = 0; i < gcds.length; i++) {
    // Check if the current GCD is already in the map and has a non-zero frequency
    if (hmp.has(gcds[i]) && hmp.get(gcds[i]) !== 0) {
      // Decrease the frequency of the current GCD by 1
      let freq = hmp.get(gcds[i]) - 1;
      hmp.set(gcds[i], freq);
    } else {
      // If the current GCD is not in the map or has zero frequency
      // Calculate the GCD of the current element with each element in the answer array
      for (let j = 0; j < ans.length; j++) {
        let gcd = getGcd(ans[j], gcds[i]);
        // Update the frequency of the calculated GCD in the map
        if (hmp.has(gcd)) {
          let freq = hmp.get(gcd) + 2;
          hmp.set(gcd, freq);
        } else {
          hmp.set(gcd, 2);
        }
      }
      // Add the current element to the answer array
      ans.push(gcds[i]);
    }
  }
};

console.log(
  getAllGcdPairs([
    1, 31, 1, 1, 1, 1, 14, 2, 1, 1, 1, 2, 22, 1, 11, 1, 1, 1, 1, 23, 1, 1, 11,
    1, 11,
  ])
); // [11 14 22 23 31]

console.log(
  getAllGcdPairs([
    46, 1, 2, 1, 1, 1, 5, 45, 1, 1, 2, 5, 1, 40, 1, 1, 1, 1, 1, 1, 1, 1, 1, 31,
    1,
  ])
); // [1, 31, 40, 45, 46]
