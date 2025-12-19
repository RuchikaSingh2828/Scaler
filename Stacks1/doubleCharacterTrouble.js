// Problem Description

// You have a string, denoted as A.

// To transform the string, you should perform the following operation repeatedly:
// Identify the first occurrence of consecutive identical pairs of characters within the string.
// Remove this pair of identical characters from the string.
// Repeat steps 1 and 2 until there are no more consecutive identical pairs of characters.
// The final result will be the transformed string.

// Problem Constraints

// 1 <= |A| <= 100000

// Input Format

// First and only argument is string A.

// Output Format

// Return the final string.

// Example Input

// Input 1:

//  A = "abccbc"

// Input 2:

//  A = "ab"

// Example Output

// Output 1:

//  "ac"
// Output 2:

//  "ab"

// Example Explanation

// Explanation 1:

// The Given string is "abccbc".

// Remove the first occurrence of consecutive identical pairs of characters "cc".
// After removing the string will be "abbc".

// Again Removing the first occurrence of consecutive identical pairs of characters "bb".
// After remvoing, the string will be "ac".

// Now, there is no consecutive identical pairs of characters.
// Therefore the string after this operation will be "ac".
// Explanation 2:

//  No removals are to be done.

const doubleCharacterTrouble = function (A) {
  const stack = new Stack();

  for (let i = 0; i < A.length; i++) {
    const char = A[i];
    if (stack.size === 0) {
      stack.push(char);
    } else {
      const topChar = stack.stackHead.next.value;
      if (topChar === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }

  let result = '';
  while (stack.size > 0) {
    result = stack.pop() + result;
  }

  return result;
};

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
