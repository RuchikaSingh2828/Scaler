// Problem Description

// Given an array A of length N where all the elements are distinct and are in the range [1, N+2].

// Two numbers from the range [1, N+2] are missing from the array A. Find the two missing numbers.

// Problem Constraints

// 1 <= N <= 105

// 1 <= A[i] <= N+2

// The elements of array A are distinct

// Input Format

// Only argument A is an array of integers

// Output Format

// Return a sorted array of size 2 denoting the missing elements.

// Example Input

// Input 1:
// A = [3, 2, 4]
// Input 2:
// A = [5, 1, 3, 6]

// Example Output

// Output 1:
// [1, 5]
// Output 2:
// [2, 4]

const getOnesCompliment = (ele) => {
  return ~ele;
};

const getTwosCompliment = (ele) => {
  const onesCompliment = getOnesCompliment(ele);
  return onesCompliment + 1;
};

const getRightMostSetBitMask = (ele) => {
  const eleTwosCompliment = getTwosCompliment(ele);
  return ele & eleTwosCompliment;
};

const findTwoMissingNos = (A) => {
  let n = A.length;
  for (let i = 1; i <= n + 2; i++) {
    A.push(i);
  }
  let xored = 0;
  for (const element of A) {
    xored = xored ^ element; // product of two missing unique element
  }
  const rsbm = getRightMostSetBitMask(xored); // right most set bit mask
  let x = 0;
  let y = 0;
  for (const element of A) {
    if ((element & rsbm) !== 0) {
      // has the same right most set bit;
      x ^= element;
    } else {
      y ^= element;
    }
  }
  return [x, y];
};
const A = [3, 2, 4]; // [1,5]
console.log(findTwoMissingNos(A));
