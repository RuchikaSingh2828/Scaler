// Problem Description
// You are given two lowercase strings A and B each of length N. Return 1 if they are anagrams to each other and 0 if not.

// Note : Two strings A and B are called anagrams to each other if A can be formed after rearranging the letters of B.

// Problem Constraints
// 1 <= N <= 105
// A and B are lowercase strings

// Input Format
// Both arguments A and B are a string.

// Output Format
// Return 1 if they are anagrams and 0 if not

// Example Input
// Input 1:
// A = "cat"
// B = "bat"
// Input 2:
// A = "secure"
// B = "rescue"

// Example Output
// Output 1:
// 0
// Output 2:
// 1
function anagrams(A, B) {
  if (A.length != B.length) {
    return 0;
  }
  const hmA = new Map();
  const hmB = new Map();
  const N = A.length;

  for (let i = 0; i < N; i++) {
    if (hmA.has(A[i])) {
      let count = hmA.get(A[i]);
      count = count + 1;
      hmA.set(A[i], count);
    } else {
      hmA.set(A[i], 1);
    }
    if (hmB.has(B[i])) {
      let count = hmB.get(B[i]);
      count = count + 1;
      hmB.set(B[i], count);
    } else {
      hmB.set(B[i], 1);
    }
  }

  for (let i = 0; i < N; i++) {
    if (hmA.has(B[i])) {
      let countA = hmA.get(B[i]);
      let countB = hmB.get(B[i]);
      if (countA !== countB) return 0;
    } else {
      return 0;
    }
  }
  return 1;
}

// const A = 'secure';
// const B = 'rescue';

const A = 'wwezdaudbq';
const B = 'dezwbdaqwu';

// const A = 'cat';
// const B = 'bat';
console.log(anagrams(A, B));
