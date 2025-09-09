// Given an array A of N integers. Sort the array in increasing order of the value at the tens place digit of every number.

// If a number has no tens digit, we can assume value to be 0.
// If 2 numbers have same tens digit, in that case number with max value will come first
// Solution should be based on comparator.

// Problem Constraints

// 1 <= N <= 105

// 1 <= A[i] <= 109

// Input Format

// First argument A is an array of integers.

// Output Format

// Return the array after sorting

// Example Input

// Input 1:
// A = [15, 11, 7, 19]
// Input 2:
// A = [2, 24, 22, 19]

const solve = (A) => {
  const getTensDigit = (num) => {
    // Work with BigInt safely
    let n = BigInt(num);
    return Number((n % 100n) / 10n); // safely return tens digit as normal Number
  };

  A.sort((a, b) => {
    let aTens = getTensDigit(a);
    let bTens = getTensDigit(b);

    if (aTens === bTens) {
      // both numbers may be BigInt → compare using BigInt
      return b > a ? 1 : b < a ? -1 : 0;
    } else {
      return aTens - bTens;
    }
  });

  return A.map(Number); // convert back to Number array if platform expects plain ints
};

// Example tests
console.log(solve([15, 11, 7, 19])); // [7, 19, 15, 11]
console.log(solve([2, 24, 22, 19])); // [2, 19, 24, 22]
console.log(solve([36, 63, 63, 26, 87, 28, 77, 93, 7])); // [7, 28, 26, 36, 63, 63, 77, 87, 93]
