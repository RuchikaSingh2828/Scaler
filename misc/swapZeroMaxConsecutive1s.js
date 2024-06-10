// Given arr[] of 1s and 0s. You are allowed to swap only one 0 with 1.
// Find Max number of consecutive 1's that can be obtained after
// making the replacement

const maxConsecutive1s = (A) => {
  let l = 0;
  let r = 0;
  let zero = 0;
  let ones = 0;
  let max = 0;
  for (let el of A) {
    if (el === 1) ones++;
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) zero++;
    r = i;
    while (zero > 1) {
      if (A[l] === 0) {
        zero--;
      }
      l++;
      max = Math.max(max, calculateAns(l, r, ones));
    }
  }
  return max;
};

const calculateAns = (l, r, ones) => {
  if (r - l + 1 === ones) return r - l + 1;
  return r - l + 2;
};

console.log(maxConsecutive1s([0, 1, 1, 0, 1, 0, 1, 1, 1]));
