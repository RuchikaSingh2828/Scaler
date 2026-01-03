// Q2. Sort stack using another stack
// Unsolved
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description

// Given a stack of integers A, sort it using another stack.

// Return the array of integers after sorting the stack using another stack.

// Problem Constraints

// 1 <= |A| <= 5000

// 0 <= A[i] <= 109

// Input Format

// The only argument is a stack given as an integer array A.

// Output Format

// Return the array of integers after sorting the stack using another stack.

// Example Input

// Input 1:

//  A = [5, 4, 3, 2, 1]
// Input 2:

//  A = [5, 17, 100, 11]

// Example Output

// Output 1:

//  [1, 2, 3, 4, 5]
// Output 2:

//  [5, 11, 17, 100]

// Example Explanation

// Explanation 1:

//  Just sort the given numbers.
// Explanation 2:

//  Just sort the given numbers.

function sortStackUsingAnotherStack(A) {
  let helperStack = [];

  while (A.length > 0) {
    // Pop the top element from the original stack
    let temp = A.pop();

    // While helperStack is not empty and top of helperStack is greater than temp
    while (
      helperStack.length > 0 &&
      helperStack[helperStack.length - 1] > temp
    ) {
      // Pop from helperStack and push it back to original stack
      A.push(helperStack.pop());
    }

    // Push temp into helperStack
    helperStack.push(temp);
  }

  // Now helperStack contains the sorted elements in ascending order
  return helperStack;
}

// Example usage:
const stack1 = [5, 4, 3, 2, 1];
const stack2 = [5, 17, 100, 11];

console.log(sortStackUsingAnotherStack(stack1)); // Output: [1, 2, 3, 4, 5]
console.log(sortStackUsingAnotherStack(stack2)); // Output: [5, 11, 17, 100]
