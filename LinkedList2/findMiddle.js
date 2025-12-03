// Problem Description

// Given a linked list of integers, find and return the middle element of the linked list.

// NOTE: If there are N nodes in the linked list and N is even then return the (N/2 + 1)th element.

// Problem Constraints

// 1 <= length of the linked list <= 100000

// 1 <= Node value <= 109

// Input Format

// The only argument given head pointer of linked list.

// Output Format

// Return the middle element of the linked list.

// Example Input

// Input 1:

//  1 -> 2 -> 3 -> 4 -> 5
// Input 2:

//  1 -> 5 -> 6 -> 2 -> 3 -> 4

// Example Output

// Output 1:

//  3
// Output 2:

//  2

// Example Explanation

// Explanation 1:

//  The middle element is 3.
// Explanation 2:

//  The middle element in even length linked list of length N is ((N/2) + 1)th element which is 2.

import { LinkedList } from '../LinkedList/linkedListClass.js';

export function findMiddle(head) {
  let slowPointer = head;
  let fastPointer = head;
  let prev = null;

  while (fastPointer !== null && fastPointer.next !== null) {
    prev = slowPointer;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return prev;
}

const ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.insertAtEnd(4);
ll.insertAtEnd(5);

console.log(findMiddle(ll.head)); // Output: 3

const ll2 = new LinkedList();
ll2.insertAtEnd(1);
ll2.insertAtEnd(5);
ll2.insertAtEnd(6);
ll2.insertAtEnd(2);
ll2.insertAtEnd(3);
ll2.insertAtEnd(4);

console.log(findMiddle(ll2.head)); // Output: 2
