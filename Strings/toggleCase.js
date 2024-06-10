// Problem Description
// You are given a character string A having length N, consisting of only lowercase and uppercase latin letters.

// You have to toggle case of each character of string A. For e.g 'A' is changed to 'a', 'e' is changed to 'E', etc.

// Problem Constraints
// 1 <= N <= 105

// A[i] ∈ ['a'-'z', 'A'-'Z']

// Input Format
// First and only argument is a character string A.

// Output Format
// Return a character string.

// Example Input
// Input 1:

//  A = "Hello"
// Input 2:

//  A = "tHiSiSaStRiNg"

// Example Output
// Output 1:

//  hELLO
// Output 2:

//  ThIsIsAsTrInG

// Example Explanation
// Explanation 1:

//  'H' changes to 'h'
//  'e' changes to 'E'
//  'l' changes to 'L'
//  'l' changes to 'L'
//  'o' changes to 'O'
// Explanation 2:

//  "tHiSiSaStRiNg" changes to "ThIsIsAsTrInG".
const toggle = function (A) {
  let arrA = A.split('');
  const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] >= 'A' && arrA[i] <= 'Z') {
      arrA[i] = String.fromCharCode(arrA[i].charCodeAt(0) + diff);
    } else arrA[i] = String.fromCharCode(arrA[i].charCodeAt(0) - diff);
  }
  return arrA.join('');
};

console.log(toggle('fBXDwDOkWREZjpp')); //
