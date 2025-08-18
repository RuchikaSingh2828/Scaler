// Problem Description

// You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.

// Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.

// NOTE: if B > N, return an empty array.

// Problem Constraints

// 1 <= N <= 106

// 1 <= A[i] <= 109

// Input Format

// First argument is an integer array A
// Second argument is an integer B.

// Output Format

// Return an integer array.

// Example Input

// Input 1:

//  A = [1, 2, 1, 3, 4, 3]
//  B = 3
// Input 2:

//  A = [1, 1, 2, 2]
//  B = 1

// Example Output

// Output 1:

//  [2, 3, 3, 2]
// Output 2:

//  [1, 1, 1, 1]

const distinctNumberWindow = (A, B) => {
  let range = new Map();
  let countArr = new Array(A.length - B + 1);
  // creating range
  for (let i = 0; i < B; i++) {
    if (range.has(A[i])) {
      range.set(A[i], range.get(A[i]) + 1);
    } else {
      range.set(A[i], 1);
    }
  }
  countArr[0] = range.size;
  let j = 1;
  for (let i = B; i < A.length; i++) {
    // deleting first element of the last range
    let lastIndex = i - B;
    let freqOfLastIndex = range.get(A[lastIndex]);
    if (freqOfLastIndex - 1 === 0) {
      range.delete(A[lastIndex]);
    } else {
      range.set(A[lastIndex], freqOfLastIndex - 1);
    }

    // adding element to fom next range
    if (range.has(A[i])) {
      range.set(A[i], range.get(A[i]) + 1);
    } else {
      range.set(A[i], 1);
    }

    countArr[j] = range.size;
    j++;
  }

  return countArr;
};

console.log(distinctNumberWindow([1, 2, 1, 3, 4, 3], 3)); // [2, 3, 3, 2]
// console.log(distinctNumberWindow([1, 1, 2, 2], 1)); // [1, 1, 1, 1]
// console.log(distinctNumberWindow([1, 2, 3, 4], 5)); // []
// console.log(distinctNumberWindow([], 3)); // []
// console.log(distinctNumberWindow([1, 2, 3, 4, 5], 0)); // []
// console.log(distinctNumberWindow([1, 2, 3, 4, 5], 1)); // [1, 1, 1, 1, 1]
// console.log(distinctNumberWindow([1], 1)); // [1]
// console.log(distinctNumberWindow([1, 2], 2)); // [2]
