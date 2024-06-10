// Problem Description
// Given a string A of size N, find and return the longest palindromic substring in A.

// Substring of string A is A[i...j] where 0 <= i <= j < len(A)

// Palindrome string:
// A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.

// Incase of conflict, return the substring which occurs first ( with the least starting index).

// Problem Constraints
// 1 <= N <= 6000

// Input Format
// First and only argument is a string A.

// Output Format
// Return a string denoting the longest palindromic substring of string A.

// Example Input
// Input 1:
// A = "aaaabaaa"
// Input 2:
// A = "abba

// Example Output
// Output 1:
// "aaabaaa"
// Output 2:
// "abba"

// Example Explanation
// Explanation 1:
// We can see that longest palindromic substring is of length 7 and the string is "aaabaaa".
// Explanation 2:
// We can see that longest palindromic substring is of length 4 and the string is "abba".

const longestPlaindromicSubstring = (A) => {
  // for odd sub string
  let ans = A[0]; // since each character is a plaindrome
  let subStr = A[0];
  for (let i = 0; i < A.length; i++) {
    // A[i] will be the middle element
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < A.length) {
      if (A[left] === A[right]) {
        left--;
        right++;
      } else {
        break;
      }
    }
    subStr = A.substring(left + 1, right);
    if (subStr.length > ans.length) {
      ans = subStr;
    }
  }

  // for even substring
  for (let i = 0; i < A.length; i++) {
    // A[i] and A[i+1] will be the middle element
    if (A[i] !== A[i + 1]) continue;
    else subStr = A.substring(i, i + 2);
    let left = i - 1;
    let right = i + 2;
    while (left >= 0 && right < A.length) {
      if (A[left] === A[right]) {
        left--;
        right++;
      } else {
        break;
      }
    }
    subStr = A.substring(left + 1, right);
    if (subStr.length > ans.length) {
      ans = subStr;
    }
  }

  return ans;
};

console.log(longestPlaindromicSubstring('aaaabaaa'));
console.log(longestPlaindromicSubstring('abb'));
console.log(longestPlaindromicSubstring('bb'));
