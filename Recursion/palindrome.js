// Q3. Check Palindrome using Recursion

// Problem Description

// Write a recursive function that checks whether string A is a palindrome or Not.
// Return 1 if the string A is a palindrome, else return 0.

// Note: A palindrome is a string that's the same when read forward and backward.

// Problem Constraints

// 1 <= |A| <= 50000

// String A consists only of lowercase letters.

// Input Format

// The first and only argument is a string A.

// Output Format

// Return 1 if the string A is a palindrome, else return 0.

// Example Input

// Input 1:

//  A = "naman"
// Input 2:

//  A = "strings"

// Example Output

// Output 1:

//  1
// Output 2:

//  0

// Example Explanation

// Explanation 1:

//  "naman" is a palindomic string, so return 1.
// Explanation 2:

//  "strings" is not a palindrome, so return 0.

const checkPlaindrome = (A, indexAt, strLength) => {
  if (indexAt > strLength / 2) return 1;
  if (A[indexAt] === A[strLength - indexAt]) {
    return checkPlaindrome(A, indexAt + 1, strLength);
  } else return 0;
};

console.log(checkPlaindrome('naman', 0, 'naman'.length - 1));
console.log(checkPlaindrome('string', 0, 'string'.length - 1));
