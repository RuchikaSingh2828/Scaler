// roblem Description

// Given an array of integers A, sort the array into a wave-like array and return it.
// In other words, arrange the elements into a sequence such that

// a1 >= a2 <= a3 >= a4 <= a5.....
// NOTE: If multiple answers are possible, return the lexicographically smallest one.

// Problem Constraints

// 1 <= len(A) <= 106
// 0 <= A[i] <= 106

// Input Format

// The first argument is an integer array A.

// Output Format

// Return an array arranged in the sequence as described.

// Example Input

// Input 1:

// A = [1, 2, 3, 4]
// Input 2:

// A = [1, 2]

// Example Output

// Output 1:

// [2, 1, 4, 3]
// Output 2:

// [2, 1]

// Example Explanation

// Explanation 1:

// One possible answer : [2, 1, 4, 3]
// Another possible answer : [4, 1, 3, 2]
// First answer is lexicographically smallest. So, return [2, 1, 4, 3].
// Explanation 1:

// Only possible answer is [2, 1].

const solve = (A) => {
  A.sort((a, b) => a - b); // Sort the array in ascending order

  for (let i = 0; i < A.length - 1; i += 2) {
    // Swap adjacent elements to create wave pattern
    [A[i], A[i + 1]] = [A[i + 1], A[i]];
  }

  return A;
};

// Example tests
console.log(solve([1, 2, 3, 4])); // [2, 1, 4, 3]
console.log(solve([1, 2])); // [2, 1]
console.log(solve([5, 1, 3, 2, 4])); // [2, 1, 4, 3, 5]
console.log(solve([10, 90, 49, 2, 1, 5, 23])); //1 2 |5 10 |23 49 |90 [2,  1, 10, 5,49, 23, 90]
console.log(solve([1, 3, 2, 2, 3, 1])); // [2, 1, 3, 1, 3, 2]
