// Given an array A of size N. Rearrange the given array so that A[i] becomes A[A[i]] with O(1) extra space.

// Constraints:

// 1 <= N <= 5×104

// 0 <= A[i] <= N - 1

// The elements of A are distinct

// Input Format

// The argument A is an array of integers

// Example 1:

// Input : [1, 0]
// Return : [0, 1]
// Example 2:

// Input : [0, 2, 1, 3]
// Return : [0, 1, 2, 3]

// If we could somehow store 2 numbers in every index ( that is, Arr[i] can contain the old value and the new value somehow ), then the problem becomes very easy.
// NewValue of Arr[i] = OldValue of Arr[OldValue of Arr[i]]

// Now, we will do a slight trick to encode 2 numbers in one index.
// This trick assumes that N * N does not overflow.

// 1) Increase every Array element Arr[i] by (Arr[Arr[i]] % n)*n.
// 2) Divide every element by N.
// Given a number as

//    A = B + C * N   if ( B, C < N )
//    A % N = B
//    A / N = C
// We use this fact to encode 2 numbers into each element of Arr.

// Solution Approach: Encoding Two Values in One
// Since we're told all values in the array are between 0 and N-1, we can use a clever mathematical encoding to store both the original value and the new value in the same array position.
// Here's how we can do this:

// For each position i, we compute A[A[i]]
// We encode this new value along with the original value at A[i]
// After all positions are encoded, we decode to extract only the new values

// The encoding formula we'll use is: A[i] = A[i] + (A[A[i]] % N) * N
// This works because:

// The original value A[i] is less than N
// When we divide A[i] by N, the remainder will be the original value
// The quotient when we divide A[i] by N will be the new value

// Step-by-Step Solution with Example
// Let's walk through the solution using an example array: [2, 3, 1, 0]
// Step 1: Encode both old and new values
// For each position i:

// Calculate the new value = A[A[i]]
// Store both values by setting A[i] = A[i] + (A[A[i]] % N) * N

// For N = 4 (size of our array):

// i = 0:

// Original A[0] = 2
// A[A[0]] = A[2] = 1
// New A[0] = 2 + (1 % 4) * 4 = 2 + 4 = 6

// i = 1:

// Original A[1] = 3
// A[A[1]] = A[3] = 0
// New A[1] = 3 + (0 % 4) * 4 = 3 + 0 = 3

// i = 2:

// Original A[2] = 1
// A[A[2]] = A[1] = 3 (actually, we've already changed A[1] to 3, but when we retrieve the original value, we do A[1] % N = 3 % 4 = 3)
// New A[2] = 1 + (3 % 4) * 4 = 1 + 12 = 13

// i = 3:

// Original A[3] = 0
// A[A[3]] = A[0] = 6 (again, we use A[0] % N = 6 % 4 = 2 to get the original value)
// New A[3] = 0 + (2 % 4) * 4 = 0 + 8 = 8

// After this encoding step, the array becomes: [6, 3, 13, 8]
// Step 2: Decode to get only the new values
// For each position i:

// Set A[i] = A[i] / N (integer division)

// For our example:

// A[0] = 6 / 4 = 1
// A[1] = 3 / 4 = 0 (integer division)
// A[2] = 13 / 4 = 3
// A[3] = 8 / 4 = 2

// The final array after decoding is: [1, 0, 3, 2]
// This matches our expected outcome! Let's verify:

// Original A[0] = 2, A[A[0]] = A[2] = 1 ✓
// Original A[1] = 3, A[A[1]] = A[3] = 0 ✓
// Original A[2] = A[1], A[A[2]] = A[1] = 3 ✓
// Original A[3] = 0, A[A[3]] = A[0] = 2 ✓

// Complete Algorithm
// pythonCopydef rearrange(A):
//     n = len(A)

//     # First step - Encode both old and new value
//     for i in range(n):
//         # Get old value
//         old_value = A[i] % n
//         # Get new value
//         new_value = A[old_value] % n
//         # Encode both values
//         A[i] = old_value + new_value * n

//     # Second step - Decode to get only new values
//     for i in range(n):
//         A[i] = A[i] // n

//     return A
// Why This Works

// Preserving Original Values: When we modify A[i], we still need the original value for future calculations. Using the modulo operator (A[i] % n) lets us extract the original value even after modification.
// Storing New Values: By multiplying the new value by n and adding it to the original, we're effectively storing the new value in the "higher digits" while keeping the original value in the "lower digits."
// Space Efficiency: This method requires only O(1) extra space since we're using the array itself to store both sets of values, achieving the space constraint.

// Time Complexity

// We iterate through the array twice, each time performing constant work per element
// Time complexity: O(n) where n is the size of the array

// Space Complexity

// We use only a constant amount of extra space regardless of input size
// Space complexity: O(1)

// The beauty of this solution lies in how it cleverly uses number theory to encode two pieces of information in a single value, allowing us to transform the array in-place without losing the information we need along the way.RetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses.

const rearrangeArray = (A) => {
  const n = A.length;

  // storing original and new value
  for (let i = 0; i < n; i++) {
    A[i] = A[i] + (A[A[i]] % n) * n;
  }

  // taking out the new values from array
  for (let i = 0; i < n; i++) {
    A[i] = Math.floor(A[i] / n);
  }
  return A;
};

console.log(rearrangeArray([2, 3, 1, 0]));
