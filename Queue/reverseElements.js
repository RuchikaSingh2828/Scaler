// Problem Description

// Given an array of integers A and an integer B, we need to reverse the order of the first B elements of the array,
// leaving the other elements in the same relative order.

// NOTE: You are required to the first insert elements into an auxiliary queue then perform Reversal of first B elements.

// Problem Constraints

// 1 <= B <= length of the array <= 500000
// 1 <= A[i] <= 100000

// Input Format

// The argument given is the integer array A and an integer B.

// Output Format

// Return an array of integer after reversing the first B elements of A using queue.

// Example Input

// Input 1:

//  A = [1, 2, 3, 4, 5]
//  B = 3
// Input 2:

//  A = [5, 17, 100, 11]
//  B = 2

// Example Output

// Output 1:

//  [3, 2, 1, 4, 5]
// Output 2:

//  [17, 5, 100, 11]

// Example Explanation

// Explanation 1:

//  Reverse first 3 elements so the array becomes [3, 2, 1, 4, 5]
// Explanation 2:

//  Reverse first 2 elements so the array becomes [17, 5, 100, 11]

function reverseElements(A, B) {
  let queue = [];
  let stack = [];
  let n = A.length;

  // Enqueue first B elements into the queue
  for (let i = 0; i < B; i++) {
    queue.push(A[i]);
  }

  // // Dequeue from queue and push onto stack to reverse order
  // while (queue.length > 0) {
  //   stack.push(queue.shift());
  // }

  // Pop from stack and put back into array A
  for (let i = 0; i < B; i++) {
    A[i] = queue.pop();
  }

  return A;
}

console.log(reverseElements([1, 2, 3, 4, 5], 3)); // [3,2,1,4,5]
console.log(reverseElements([5, 17, 100, 11], 2)); // [17,5,100,11]
