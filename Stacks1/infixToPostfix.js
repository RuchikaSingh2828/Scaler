// Problem Description

// Given string A denoting an infix expression. Convert the infix expression into a postfix expression.

// String A consists of ^, /, *, +, -, (, ) and lowercase English alphabets where lowercase English alphabets are operands and ^, /, *, +, - are operators.

// Find and return the postfix expression of A.

// NOTE:

// ^ has the highest precedence.
// / and * have equal precedence but greater than + and -.
// + and - have equal precedence and lowest precedence among given operators.

// Problem Constraints

// 1 <= length of the string <= 500000

// Input Format

// The only argument given is string A.

// Output Format

// Return a string denoting the postfix conversion of A.

// Example Input

// Input 1:

//  A = "x^y/(a*z)+b"
// Input 2:

//  A = "a+b*(c^d-e)^(f+g*h)-i"

// Example Output

// Output 1:

//  "xy^az*/b+"
// Output 2:

//  "abcd^e-fgh*+^*+i-"

// Example Explanation

// Explanation 1:

//  Ouput dentotes the postfix expression of the given input.

// Precedence (high → low)
// ^
// *, /
// +, -

// Associativity

// ^ → right associative

// *, /, +, - → left associative

// This affects when you pop operators from the stack.

function infixToPostfix(A) {
  const precedence = {
    '^': 3,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
  };

  const isOperator = (c) => ['^', '*', '/', '+', '-'].includes(c);
  const isRightAssociative = (op) => op === '^';

  const output = [];
  const stack = [];

  for (let i = 0; i < A.length; i++) {
    const char = A[i];

    if (/[a-z]/.test(char)) {
      output.push(char);
    } else if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      stack.pop(); // Remove '(' from stack
    } else if (isOperator(char)) {
      while (
        stack.length &&
        isOperator(stack[stack.length - 1]) &&
        (precedence[stack[stack.length - 1]] > precedence[char] ||
          (precedence[char] === precedence[stack[stack.length - 1]] &&
            !isRightAssociative(stack[stack.length - 1])))
      ) {
        output.push(stack.pop());
      }
      stack.push(char);
    }
  }

  while (stack.length) {
    output.push(stack.pop());
  }

  return output.join('');
}
// Example usage:
// const infixExpr = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix('c*(u-p)^e/(w*x^p)^k^(d^o)')); // output: "cup-e^*wxp^/kdo^^^*"
// console.log(infixToPostfix(infixExpr)); // Output: "abcd^e-fgh*+^*+i-"
