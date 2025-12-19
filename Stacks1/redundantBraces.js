// Problem Description

// Given a string A denoting an expression. It contains the following operators '+', '-', '*', '/'.

// Check whether A has redundant braces or not.

// NOTE: A will be always a valid expression and will not contain any white spaces.

// Problem Constraints

// 1 <= |A| <= 105

// Input Format

// The only argument given is string A.

// Output Format

// Return 1 if A has redundant braces else, return 0.

// Example Input

// Input 1:

//  A = "((a+b))"
// Input 2:

//  A = "(a+(a+b))"

// Example Output

// Output 1:

//  1
// Output 2:

//  0

// Example Explanation

// Explanation 1:

//  ((a+b)) has redundant braces so answer will be 1.
// Explanation 2:

//  (a+(a+b)) doesn't have have any redundant braces so answer will be 0.

// If round brackets wrap only a variable or empty expression → redundant.
// If they wrap an actual operation (+, -, *, /) → not redundant.

// Scan each char in the string:

// Push all characters except closing parenthesis )

// When you find )

// pop until you find (

// while popping, check if you find at least one operator

// if no operator found between these brackets → braces are redundant → return 1

// If you finish scanning and never found a redundant pair → return 0
const redundantBraces = function (A) {
  const stack = [];

  for (let i = 0; i < A.length; i++) {
    const char = A[i];

    if (
      char === '(' ||
      char === '+' ||
      char === '-' ||
      char === '*' ||
      char === '/'
    ) {
      stack.push(char);
    } else if (char === ')') {
      let hasOperator = false;

      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        const top = stack.pop();
        if (top === '+' || top === '-' || top === '*' || top === '/') {
          hasOperator = true;
        }
      }

      // Pop the opening brace '('
      if (stack.length > 0) {
        stack.pop();
      }

      // If no operator found between braces, it's redundant
      if (!hasOperator) {
        return 1;
      }
    }
  }

  return 0;
};

console.log(redundantBraces('((a+b))')); // 1
console.log(redundantBraces('(a+(a+b))')); // 0
