// Problem Description

// Given a linked list A, swap every two adjacent nodes and return its head.

// NOTE: Your algorithm should use only constant space. You may not modify the values in the list; only nodes themselves can be changed.

// Problem Constraints

// 1 <= |A| <= 106

// Input Format

// The first and the only argument of input contains a pointer to the head of the given linked list.

// Output Format

// Return a pointer to the head of the modified linked list.

// Example Input

// Input 1:

//  A = 1 -> 2 -> 3 -> 4
// Input 2:

//  A = 7 -> 2 -> 1

// Example Output

// Output 1:

//  2 -> 1 -> 4 -> 3
// Output 2:

//  2 -> 7 -> 1

// Example Explanation

// Explanation 1:

//  In the first example (1, 2) and (3, 4) are the adjacent nodes. Swapping them will result in 2 -> 1 -> 4 -> 3
// Explanation 2:

//  In the second example, 3rd element i.e. 1 does not have an adjacent node, so it won't be swapped.
import { LinkedList, ListNode } from '../LinkedList/linkedListClass.js';

export function swapListNodesinPairs(head) {
  // Create a dummy node to handle edge cases
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while (current !== null && current.next !== null) {
    // Nodes to be swapped
    let firstNode = current;
    let secondNode = current.next;

    // Swapping
    prev.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    // Re-positioning prev and current for next swap
    prev = firstNode;
    current = firstNode.next;
  }

  return dummy.next;
}

// Example usage:
const ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.insertAtEnd(4);

const newHead = swapListNodesinPairs(ll.head);

// Print the swapped linked list
let current = newHead;
let result = [];
while (current !== null) {
  result.push(current.value);
  current = current.next;
}
console.log(result.join(' -> ')); // Output: 2 -> 1 -> 4 -> 3
