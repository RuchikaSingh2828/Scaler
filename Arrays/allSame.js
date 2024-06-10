/**
 * Finds the minimum time in seconds required to make all elements of the array equal.
 * @param {number[]} A - An integer array of size N (1 <= N <= 1000000)
 * @returns {number} - The minimum time in seconds required to make all elements equal.
 */
const allSameTime = (A) => {
  let largestVal = A[0];
  let sec = 0;

  for (let i = 1; i < A.length; i++) {
    if (largestVal < A[i]) {
      largestVal = A[i];
      A[i - 1] += 1;
      sec++;
    }
  }

  let allSame = false;
  while (!allSame) {
    allSame = true;
    for (let index = 0; index < A.length; index++) {
      if (A[index] < largestVal) {
        A[index] += 1;
        sec++;
        allSame = false;
      }
    }
  }

  return A.length === 1 ? 1 : sec;
};

console.log(allSameTime([2, 2, 2, 2, 2]));
