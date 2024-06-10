// Problem Description
// Given a string A, you are asked to reverse the string and return the reversed string.

// Problem Constraints
// 1 <= |A| <= 105

// String A consist only of lowercase characters.

// Input Format
// First and only argument is a string A.

// Output Format
// Return a string denoting the reversed string.

// Example Input
// Input 1:

//  A = "scaler"
// Input 2:

//  A = "academy"

// Example Output
// Output 1:

//  "relacs"
// Output 2:

//  "ymedaca"

// Example Explanation
// Explanation 1:

//  Reverse the given string.

const reverse = (A) => {
  const arrA = A.split('');
  let i = 0;
  let j = arrA.length - 1;
  while (i < j) {
    let temp = arrA[i];
    arrA[i] = arrA[j];
    arrA[j] = temp;
    i++;
    j--;
  }

  return arrA.join('');
};
console.log(reverse('scaler')); //relacs
console.log(reverse('scaler'));
