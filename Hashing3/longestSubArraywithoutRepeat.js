// Determine the "GOOD"ness of a given string A, where the "GOOD"ness is defined by the length of the longest substring that contains no repeating characters. The greater the length of this unique-character substring, the higher the "GOOD"ness of the string.

// Your task is to return an integer representing the "GOOD"ness of string A.

// Note: The solution should be achieved in O(N) time complexity, where N is the length of the string.

// Problem Constraints

// 1 <= size(A) <= 106

// String consists of lowerCase,upperCase characters and digits are also present in the string A.

// Input Format

// Single Argument representing string A.

// Output Format

// Return an integer denoting the maximum possible length of substring without repeating characters.

// Example Input

// Input 1:

//  A = "abcabcbb"
// Input 2:

//  A = "AaaA"

// Example Output

// Output 1:

//  3
// Output 2:

//  2

function solve(A) {
  let map = new Map();
  let maxLength = 0;
  let j = 0;
  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      j = Math.max(j, map.get(A[i]) + 1);
    }
    maxLength = Math.max(maxLength, i - j + 1);
    map.set(A[i], i);
  }
  return maxLength;
}
