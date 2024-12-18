

// Problem Description
// Given an integer array A of size N. In one second, you can increase the value of one element by 1.

// Find the minimum time in seconds to make all elements of the array equal.

// Problem Constraints
// 1 <= N <= 1000000
// 1 <= A[i] <= 1000

// Input Format
// First argument is an integer array A.

// Output Format
// Return an integer denoting the minimum time to make all elements equal.

// Example Input
// A = [2, 4, 1, 3, 2]

// Example Output
// 8

// Example Explanation
// We can change the array A = [4, 4, 4, 4, 4]. The time required will be 8 seconds.
const allSameTime = (A) => {
  let largetVal = A[0];
  let sec = 0;
  for (let i = 1; i < A.length; i++) {
    if (largetVal < A[i]);
    largetVal = A[i];
    A[i - 1] += 1;
    sec++;
  }
  let allSame = false;
  while (!allSame) {
    allSame = true;
    for (let index = 0; index < A.length; index++) {
      if (A[index] < largetVal) {
        A[index] += 1;
        sec++;
        allSame = false;
      }
    }
  }
  return A.length === 1 ? 1 : sec;
};


// Generated by CodiumAI

describe('allSameTime', () => {

    // Returns an error if A is not an array
    it('should throw an error if A is not an array', () => {
      const A = "not an array";
      expect(() => allSameTime(A)).toThrowError();
    });
});
