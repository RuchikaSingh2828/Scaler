// Given an array A count the pairs for which xor of the ith bit resulted in one.
//  you have Q queries given in Array B each query B[i] denotes the index for which you need to find
// the count of pars with Xor of that index equals to 1.

// 1 <= N <= 4*10^4
// 1 <= A[i] <= 10^9
// 1 <= Q <= 100
// 0 <= B[i] <32

const countNoOfSetBitsInPsirs = (A, B) => {
  let ans = [];
  let n = A.length;
  for (let i = 0; i < B.length; i++) {
    let bit = B[i];
    let setCount = 0;
    for (let j = 0; j < n; j++) {
      if ((A[j] & (1 << bit)) !== 0) setCount++;
    }
    let unsetCount = n - setCount;
    ans.push(setCount * unsetCount);
  }
  return ans;
};

// console.log(countNoOfSetBitsInPsirs([1, 2, 3, 4], [0, 1, 2])); //[4,4,3]
// console.log(countNoOfSetBitsInPsirs([1, 2, 3], [0, 1])); //[2,2]
console.log(countNoOfSetBitsInPsirs([2, 4, 7, 11], [3])); //[3]
