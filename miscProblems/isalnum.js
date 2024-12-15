// Problem Description
// You are given a function isalpha() consisting of a character array A.

// Return 1 if all the characters of a character array are alphanumeric (a-z, A-Z, and 0-9) else, return 0.

// Problem Constraints
// 1 <= |A| <= 105

// Input Format
// Only argument is a character array A.

// Output Format
// Return 1 if all the characters of the character array are alphanumeric (a-z, A-Z and 0-9), else return 0.

// Example Input
// Input 1:

//  A = ['S', 'c', 'a', 'l', 'e', 'r', 'A', 'c', 'a', 'd', 'e', 'm', 'y', '2', '0', '2', '0']
// Input 2:

//  A = ['S', 'c', 'a', 'l', 'e', 'r', '#', '2', '0', '2', '0']

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  All the characters are alphanumeric.
// Explanation 2:

//  All the characters are NOT alphabets i.e ('#').

function isalnum(A) {
  const acode = 'a'.charCodeAt(0);
  const zcode = 'z'.charCodeAt(0);
  const Acode = 'A'.charCodeAt(0);
  const Zcode = 'Z'.charCodeAt(0);
  const code0 = '0'.charCodeAt(0);
  const code9 = '9'.charCodeAt(0);

  // console.log(`${acode} ${zcode} ${Acode} ${Zcode} ${code0} ${code9}`);
  for (let i = 0; i < A.length; i++) {
    if (A[i].charCodeAt(0) >= acode && A[i].charCodeAt(0) <= zcode) {
      continue;
    } else if (A[i].charCodeAt(0) >= Acode && A[i].charCodeAt(0) <= Zcode) {
      continue;
    } else if (A[i].charCodeAt(0) >= Acode && A[i].charCodeAt(0) <= Zcode) {
      continue;
    } else if (A[i].charCodeAt(0) >= code0 && A[i].charCodeAt(0) <= code9) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

const A = [
  'S',
  'c',
  'a',
  'l',
  'e',
  'r',
  'A',
  'c',
  'a',
  'd',
  'e',
  'm',
  'y',
  '2',
  '0',
  '2',
  '0',
];
console.log(isalnum(A));
