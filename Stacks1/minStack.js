// Problem Description

// Design a stack that supports push, pop, top, and retrieve the minimum element in constant time.
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// NOTE:
// All the operations have to be constant time operations.
// getMin() should return -1 if the stack is empty.
// pop() should return nothing if the stack is empty.
// top() should return -1 if the stack is empty.

// Problem Constraints

// 1 <= Number of Function calls <= 106
// It is guaranteed that, atleast one call is made to either getMin() or top().

// Input Format

// Functions will be called by the checker code automatically.

// Output Format

// Each function should return the values as defined by the problem statement.

// Example Input

// Input 1:
// push(1)
// push(2)
// push(-2)
// getMin()
// pop()
// getMin()
// top()
// Input 2:
// getMin()
// pop()
// top()

// Example Output

// Output 1:
//  -2 1 2
// Output 2:
//  -1 -1

// Example Explanation

// Explanation 1:
// Let the initial stack be : []
// 1) push(1) : [1]
// 2) push(2) : [1, 2]
// 3) push(-2) : [1, 2, -2]
// 4) getMin() : Returns -2 as the minimum element in the stack is -2.
// 5) pop() : Return -2 as -2 is the topmost element in the stack.
// 6) getMin() : Returns 1 as the minimum element in stack is 1.
// 7) top() : Return 2 as 2 is the topmost element in the stack.
// Explanation 2:
// Let the initial stack be : []
// 1) getMin() : Returns -1 as the stack is empty.
// 2) pop() :  Returns nothing as the stack is empty.
// 3) top() : Returns -1 as the stack is empty.
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function solve() {
  // Initalize your variables here
  this.size = 0;
  this.head = new Node(null);
  this.minHead = new Node(null);
}
solve.prototype.push = function (e) {
  let curr = new Node(e);
  curr.next = this.head.next;
  this.head.next = curr;

  if (!this.minHead.next || this.minHead.next.value >= e) {
    let currMin = new Node(e);
    currMin.next = this.minHead.next;
    this.minHead.next = currMin;
  }

  this.size++;
};
solve.prototype.pop = function () {
  if (this.size === 0) return;
  let removed = this.head.next;
  this.head.next = this.head.next.next;

  if (removed.value === this.minHead.next.value) {
    this.minHead.next = this.minHead.next.next;
  }

  this.size--;
};
solve.prototype.top = function () {
  // return top
  if (this.size === 0) return -1;
  return this.head.next.value;
};
solve.prototype.getMin = function () {
  // return minimum
  if (this.size === 0) return -1;
  return this.minHead.next.value;
};

let minStack = new solve();
//P 10 P 9 g P 8 g P 7 g P 6 g p g p g p g p g p g

function executeOperations(ops) {
  let stack = new solve();
  let results = [];
  let tokens = ops.trim().split(/\s+/);
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token === 'P') {
      let val = parseInt(tokens[++i]);
      stack.push(val);
    } else if (token === 'p') {
      stack.pop();
    } else if (token === 'g') {
      results.push(stack.getMin());
    }
  }
  return results;
}

let operations = 'P 10 P 9 g P 8 g P 7 g P 6 g p g p g p g p g p g';
console.log(executeOperations(operations));
