// In a parallel universe, there exists a kingdom renowned for its unique culinary traditions. In this kingdom, a famous chef is celebrated for her delectable dishes.
// One day, the chef decided to create a new dish using a sequence of ingredients, each with a distinct weight.
//  The chef wants to select a subarray of these ingredients where the weights are in

const maximumPossibleSumOfSubArryInStrictlyIncreasingOrder = (A) => {
  // continuous
  let n = A.length;
  let sum = A[0];
  let sumArr = [];
  for (let i = 1; i < n; i++) {
    if (A[i - 1] < A[i]) {
      sum += A[i];
    } else {
      sumArr.push(sum);
      sum = A[i];
    }
  }
  sumArr.push(sum);

  let largest = -Infinity;

  for (let i = 0; i < sumArr.length; i++) {
    if (largest < sumArr[i]) largest = sumArr[i];
  }
  return largest;
};

const solutionProvided = (A) => {
  let n = A.length;
  let ans = A[0];
  let cur_sum = A[0];

  for (let i = 1; i < n; i++) {
    if (A[i] > A[i - 1]) {
      cur_sum += A[i];
    } else {
      cur_sum = A[i];
    }
    ans = Math.max(ans, cur_sum);
  }
  return ans;
};

// console.log(
//   maximumPossibleSumOfSubArryInStrictlyIncreasingOrder([1, 2, 3, 4, 5]) //15
// );
// console.log(
//   maximumPossibleSumOfSubArryInStrictlyIncreasingOrder([
//     1, 1, 6, 11, 14, 14, 17, 18, 18, 1,
//   ])
// ); //49
// console.log(
//   maximumPossibleSumOfSubArryInStrictlyIncreasingOrder([
//     9, 17, 19, 13, 13, 20, 13, 2, 18, 3,
//   ])
// ); // 45
// console.log(
//   maximumPossibleSumOfSubArryInStrictlyIncreasingOrder([
//     14, 6, 11, 17, 3, 11, 7, 11, 9, 20,
//   ])
// ); //34
// console.log(
//   maximumPossibleSumOfSubArryInStrictlyIncreasingOrder([
//     1, 16, 12, 20, 9, 19, 9, 18, 17, 18,
//   ])
// ); //35
console.log(
  maximumPossibleSumOfSubArryInStrictlyIncreasingOrder([
    1000000000, 999999999, 999999998, 999999997,
  ])
); //1000000000
