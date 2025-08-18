// Given an array of integers A that may contain duplicates, we have to
// return all possible subsets (the power set).
// The solution set must not contain duplicate subsets.
// The subsets can be returned in any order.

function uniqueSubsets(A) {
  const result = [];
  A.sort((a, b) => a - b); // Sort to handle duplicates
  const subset = [];

  function backtrack(start) {
    result.push([...subset]); // Add the current subset to the result

    for (let i = start; i < A.length; i++) {
      if (i > start && A[i] === A[i - 1]) continue; // Skip duplicates
      subset.push(A[i]); // Include A[i] in the current subset
      backtrack(i + 1); // Recur with the next index
      subset.pop(); // Backtrack to explore subsets without A[i]
    }
  }

  backtrack(0);
  return result;
}

// Sample calls and outputs:

console.log(uniqueSubsets([1, 2, 2]));
// Possible output:
// [
//   [], [1], [1,2], [1,2,2], [2], [2,2]
// ]

console.log(uniqueSubsets([1, 2, 3]));
// Possible output:
// [
//   [], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]
// ]

console.log(uniqueSubsets([1, 2, 2, 3, 3, 4, 5]));
// Possible output (not in order):
// [
//   [],
//   [1], [1,2], [1,2,2], [1,2,2,3], [1,2,2,3,3], [1,2,2,3,3,4], [1,2,2,3,3,4,5], ...
//   [2], [2,2], [2,2,3], [2,2,3,3], [2,2,3,3,4], [2,2,3,3,4,5], ...
//   [3], [3,3], [3,3,4], [3,3,4,5], ...
//   [4], [4,5], [5]
// ]
console.log(uniqueSubsets([10, 9, -20, -11, -8, -4, 2, -12, 14, 1, -18]));
// Output: An array of all unique subsets (power set) of the input array, sorted internally to handle duplicates.
// Since there are 11 elements, the output will have 2^11 = 2048 subsets.
// Example (first few subsets):
// [
//   [],
//   [-20],
//   [-20,-18],
//   [-20,-18,-12],
//   ...
//   [10,14],
//   [10,14,9],
//   ...
// ]
// The actual output is too large to display fully here.
