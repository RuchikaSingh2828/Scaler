function InfixToPrefix(infix) {
    // Helper function to determine precedence of operators
    function precedence(op) {
        if (op === '+' || op === '-') return 1;
        if (op === '*' || op === '/') return 2;
        if (op === '^') return 3;
        return 0;
    }

    // Helper function to check if character is an operator
    function isOperator(c) {
        return ['+', '-', '*', '/', '^'].includes(c);
    }

    // Reverse the infix expression and swap parentheses
    function reverseAndSwap(expr) {
        let result = '';
        for (let i = expr.length - 1; i >= 0; i--) {
            if (expr[i] === '(') {
                result += ')';
            } else if (expr[i] === ')') {
                result += '(';
            } else {
                result += expr[i];
            }
        }
        return result;
    }

    // Convert infix to postfix
    function infixToPostfix(expr) {
        const stack = [];
        let postfix = '';

        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];

            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
                postfix += char;
            } else if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    postfix += stack.pop();
                }
                stack.pop(); // Remove '(' from stack
            } else if (isOperator(char)) {
                while (stack.length && precedence(stack[stack.length - 1]) > precedence(char)) {
                    postfix += stack.pop();
                }
                stack.push(char);
            }
        }

        while (stack.length) {
            postfix += stack.pop();
        }

        return postfix;
    }

    // Main conversion logic
    const reversedInfix = reverseAndSwap(infix);
    const postfix = infixToPostfix(reversedInfix);
    const prefix = postfix.split('').reverse().join('');

    return prefix;
}