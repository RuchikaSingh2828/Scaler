// Given an array find the length of largest sub array woth sum 0
//    [2, 2, 1, -3, 4, 3, 1, -2, -3, 2]
// pf [2, 4, 5, 2, 6, 9, 10, 8, 5, 7]

const longestSumZero = (A) => {
  let ans = 0;
  let prefixSum = new Map();
  let currentSum = 0;
  prefixSum.set(0, 0);
  for (let i = 0; i < A.length; i++) {
    currentSum += A[i];
    if (prefixSum.has(currentSum)) {
      ans = Math.max(ans, i + 1 - prefixSum.get(currentSum));
    } else {
      prefixSum.set(currentSum, i + 1);
    }
  }
  return ans;
};
