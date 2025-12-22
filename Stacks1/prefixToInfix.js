function prefixToInfix(prefix) {
  const stack = [];
  const operators = new Set(['+', '-', '*', '/', '^']);

  // Reverse the prefix expression for processing
  const reversedPrefix = prefix.split(' ').reverse();

  for (const token of reversedPrefix) {
    if (!operators.has(token)) {
      // If the token is an operand, push it to the stack
      stack.push(token);
    } else {
      // The token is an operator, pop two operands from the stack
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      // Form a new infix expression and push it back to the stack
      const newExpr = `(${operand1} ${token} ${operand2})`;
      stack.push(newExpr);
    }
  }

  // The final element in the stack is the complete infix expression
  return stack.pop();
}
// Example usage:
// const prefix = "* + a b + c d";
// console.log(prefixToInfix(prefix)); // Output: "((a + b) * (c + d))"
// Example usage:
// const prefix = "* + a b + c d";
// console.log(prefixToInfix(prefix)); // Output: "((a + b) * (c + d))"
