// find the sub array with maximum sum

const A = [5, 6, 7, -3, 2, -10, -12, 8, 12, 21, -4, 7];
// [8,....,7]

const maxSumSubArray = (A) => {
  let sum = 0;
  let max = -Infinity;
  let ans = [];
  for (let index = 0; index < A.length; index++) {
    sum += A[index];
    max = Math.max(max, sum);
    if (sum > 0) {
      ans.push(A[index]);
    } else if (sum < 0) {
      sum = 0;
    } else if (sum < max) {
      ans = [];
    }
  }

  return ans;
};

console.log(maxSumSubArray(A));
