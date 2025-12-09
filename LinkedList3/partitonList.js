// Problem Description

// Given a linked list A and a value B, partition it such that all nodes less than B come before nodes greater than or equal to B.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Problem Constraints

// 1 <= |A| <= 106

// 1 <= A[i], B <= 109

// Input Format

// The first argument of input contains a pointer to the head to the given linked list.

// The second argument of input contains an integer, B.

// Output Format

// Return a pointer to the head of the modified linked list.

// Example Input

// Input 1:

// A = [1, 4, 3, 2, 5, 2]
// B = 3
// Input 2:

// A = [1, 2, 3, 1, 3]
// B = 2

// Example Output

// Output 1:

// [1, 2, 2, 4, 3, 5]
// Output 2:

// [1, 1, 2, 3, 3]

// Example Explanation

// Explanation 1:

//  [1, 2, 2] are less than B wheread [4, 3, 5] are greater than or equal to B.
// Explanation 2:

//  [1, 1] are less than B wheread [2, 3, 3] are greater than or equal to B.
import { ListNode, LinkedList } from '../LinkedList/linkedListClass.js';

function partition(A, B) {
  let curr = A;
  let smallHead = null;
  let smallTail = null;
  let bigHead = null;
  let bigTail = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = null;

    if (curr.data < B) {
      if (!smallHead) {
        // first element
        smallHead = curr;
        smallTail = curr;
      } else {
        smallTail.next = curr;
        smallTail = smallTail.next;
      }
    } else {
      if (!bigHead) {
        // first element
        bigHead = curr;
        bigTail = curr;
      } else {
        bigTail.next = curr;
        bigTail = bigTail.next;
      }
    }

    curr = next;
  }
  // if no smaller elements:
  if (!smallHead) {
    return bigHead;
  }
  smallTail.next = bigHead;

  return smallHead;
}

let a1 = new LinkedList();
a1.insertAtEnd(1);
a1.insertAtEnd(2);
a1.insertAtEnd(3);
a1.insertAtEnd(4);
a1.insertAtEnd(5);
let result1 = partition(a1, 5);
console.log(result1);
// Expected Output: [1,2,3,4,5]

// let result2 = partition([1, 4, 3, 2, 5, 2], 3);
// console.log(result2);
// // Expected Output: [1,2,2,4,3,5]

// let result3 = partition([1, 2, 3, 1, 3], 2);
// console.log(result3);
// // Expected Output: [1,1,2,3,3]
