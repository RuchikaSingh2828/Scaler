// Problem Description

// Given an integer A.
// Two numbers, X and Y, are defined as follows:

// X is the greatest number smaller than A such that the XOR sum of X and A is the same as the sum of X and A.
// Y is the smallest number greater than A, such that the XOR sum of Y and A is the same as the sum of Y and A.
// Find and return the XOR of X and Y.

// NOTE 1: XOR of X and Y is defined as X ^ Y where '^' is the BITWISE XOR operator.

// NOTE 2: Your code will be run against a maximum of 100000 Test Cases.

// Problem Constraints

// 1 <= A <= 109

// Input Format

// First and only argument is an integer A.

// Output Format

// Return an integer denoting the XOR of X and Y.

// Example Input

// A = 5

// Example Output

// 10

// Example Explanation

// The value of X will be 2 and the value of Y will be 8. The XOR of 2 and 8 is 10.
// BRUTE FORCE;
// const strangeEquality = A => {
//   let x = A - 1;
//   let y = A + 1;
//   let i = 1;
//   while ((A ^ x) !== A + x) {
//     i++;
//     x = A - i;
//   }
//   i = 1;
//   while ((A ^ y) !== A + y) {
//     i++;
//     y = A + i;
//   }

//   return x ^ y;
// }

// Understanding the Problem Requirements
// We're given an integer A, and we need to find two special numbers:

// X: The greatest number smaller than A where X ⊕ A = X + A
// Y: The smallest number greater than A where Y ⊕ A = Y + A

// After finding these numbers, we need to calculate X ⊕ Y.
// The Key Insight: When is XOR Equal to Addition?
// The fundamental question is: Under what conditions would X ⊕ A equal X + A?
// To understand this, let's recall how XOR and addition work:

// XOR (⊕) returns 1 for a bit position if the bits are different, 0 if they're the same
// Addition (+) adds the bits normally with carry

// For XOR to equal addition, we need to ensure that there's never a carry in the addition operation. This happens only when X and A don't have any overlapping 1 bits.
// In other words, X ⊕ A = X + A when X & A = 0 (where & is the bitwise AND operator).
// Finding X (Greatest Number < A)
// To find X, we need the greatest number less than A that doesn't share any set bits with A.
// The strategy is:

// Start with all bits set to 1 (which is the maximum possible value)
// Turn off any bits that are set in A (to ensure X & A = 0)
// Additionally, we need to ensure X < A, so we need to handle this constraint

// Let's work through this logically:

// For any bit position where A has a 0, X can have a 1 (since this won't create an overlap)
// For any bit position where A has a 1, X must have a 0 (to avoid overlap)

// So X is basically the number we get by:

// Taking the complement of A (flipping all bits)
// Then masking it with a number that has 1s only in positions where A has significant bits

// For example, if A = 5 (binary 101):

// We need X to have 0s where A has 1s: at positions 0 and 2
// X can have 1s where A has 0s: at position 1
// So X = 2 (binary 010)

// Finding Y (Smallest Number > A)
// For Y, we need the smallest number greater than A that doesn't share any set bits with A.
// The key insight is that Y will have a 1 in the position of the most significant bit of A, plus another 1 in a position higher than any bit in A.
// Why? Because:

// Y needs to be greater than A
// Y cannot share any set bits with A

// The strategy for finding Y is:

// Find the most significant bit of A
// Set a bit at the next position higher than the most significant bit of A
// Ensure all other bits don't overlap with A's bits

// For our example A = 5 (binary 101):

// Most significant bit is at position 2
// Y will have a 1 at position 3 (making it > A)
// Y will have 0s where A has 1s (positions 0 and 2)
// So Y = 8 (binary 1000)

// Mathematical Formula
// Based on the logic above, we can derive formulas:
// For X:

// X = (2^k - 1) & (~A)
// where k is the position of the most significant bit of A + 1

// For Y:

// Y = 2^k
// where k is the position of the most significant bit of A + 1

// Example with A = 5
// Let's verify this with A = 5 (binary 101):

// Most significant bit of A is at position 2
// k = 2+1 = 3

// For X:

// 2^k - 1 = 2^3 - 1 = 8 - 1 = 7 (binary 111)
// ~A = ~(101) = 010 (for the 3 significant bits)
// X = 111 & 010 = 010 = 2

// For Y:

// Y = 2^k = 2^3 = 8 (binary 1000)

// Now, X ⊕ Y = 2 ⊕ 8 = 010 ⊕ 1000 = 1010 = 10
// The Final Answer
// X = 2, Y = 8, and X ⊕ Y = 10, which matches the expected output.

const strangeEquality = (A) => {
  let countOfSignificantBits = 0;
  let tempA = A;

  // Count the number of significant bits in A
  while (tempA !== 0) {
    tempA = tempA >> 1;
    countOfSignificantBits++;
  }

  // Calculate x: Flip all the 0-bits in A
  let x = 0;
  for (let i = countOfSignificantBits - 1; i >= 0; i--) {
    if ((A & (1 << i)) === 0) {
      x = x + (1 << i);
    }
  }

  // Calculate y: Set the first bit beyond the most significant bit of A
  let y = 1 << countOfSignificantBits;

  // Return XOR of x and y
  return x ^ y;
};

console.log(strangeEquality(10)); // 21 | x=5 | y=16

console.log(strangeEquality(5804174)); // 10973041
