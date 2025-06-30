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
