function postfixToInfix(postfix) {
  const stack = [];
  const operators = new Set(['+', '-', '*', '/', '^']);

  for (let char of postfix) {
    if (!operators.has(char)) {
      // If the character is an operand, push it to the stack
      stack.push(char);
    } else {
      // The character is an operator
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const newExpr = `(${operand1} ${char} ${operand2})`;
      stack.push(newExpr);
    }
  }

  // The final element in the stack is the complete infix expression
  return stack.pop();
}

// Example usage:
// const postfix = "ab+cde+**";
// console.log(postfixToInfix(postfix)); // Output: "((a + b) * (c * (d + e)))"
