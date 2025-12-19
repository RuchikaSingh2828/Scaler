// Problem Description

// Given an expression string A, examine whether the pairs and the orders of “{“,”}”, ”(“,”)”, ”[“,”]” are correct in A.

// Refer to the examples for more clarity.

// Problem Constraints

// 1 <= |A| <= 100

// Input Format

// The first and the only argument of input contains the string A having the parenthesis sequence.

// Output Format

// Return 0 if the parenthesis sequence is not balanced.

// Return 1 if the parenthesis sequence is balanced.

// Example Input

// Input 1:

//  A = {([])}
// Input 2:

//  A = (){
// Input 3:

//  A = ()[]

// Example Output

// Output 1:

//  1
// Output 2:

//  0
// Output 3:

//  1

const paranthesisMap = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function isBalanced(A) {
  const stack = [];
  for (let i = 0; i < A.length; i++) {
    const char = A[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0) {
        return 0;
      }
      const top = stack.pop();
      if (top !== paranthesisMap[char]) {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}
