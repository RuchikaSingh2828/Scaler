// Problem Description

// An arithmetic expression is given by a string array A of size N. Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each string may be an integer or an operator.

// Note: Reverse Polish Notation is equivalent to Postfix Expression, where operators are written after their operands.

// Problem Constraints

// 1 <= N <= 105

// Input Format

// The only argument given is string array A.

// Output Format

// Return the value of arithmetic expression formed using reverse Polish Notation.

// Example Input

// Input 1:
// A =   ["2", "1", "+", "3", "*"]
// Input 2:
// A = ["4", "13", "5", "/", "+"]

// Example Output

// Output 1:
// 9
// Output 2:
// 6

// Example Explanation

// Explaination 1:
// starting from backside:
//     * : () * ()
//     3 : () * (3)
//     + : (() + ()) * (3)
//     1 : (() + (1)) * (3)
//     2 : ((2) + (1)) * (3)
//     ((2) + (1)) * (3) = 9
// Explaination 2:
// starting from backside:
//     + : () + ()
//     / : () + (() / ())
//     5 : () + (() / (5))
//     13 : () + ((13) / (5))
//     4 : (4) + ((13) / (5))
//     (4) + ((13) / (5)) = 6

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.stackHead = new Node(null);
  }

  push(value) {
    let curr = new Node(value);
    curr.next = this.stackHead.next;
    this.stackHead.next = curr;
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;
    const removedVal = this.stackHead.next.value;
    this.stackHead.next = this.stackHead.next.next;
    this.size--;
    return removedVal;
  }
}

const OPERATORS = new Set(['+', '-', '*', '/']);

function evaluateExpression(A) {
  const stack = [];

  for (let token of A) {
    if (!OPERATORS.has(token)) {
      stack.push(parseInt(token, 10));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      let result;

      switch (token) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          // Use Math.trunc to simulate integer division towards zero
          result = Math.trunc(a / b);
          break;
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

console.log(evaluateExpression(['2', '2', '/']));
