// Problem Description

// Given a singly linked list A

//  A: A0 → A1 → … → An-1 → An
// reorder it to:

//  A0 → An → A1 → An-1 → A2 → An-2 → …
// You must do this in-place without altering the nodes' values.

// Problem Constraints

// 1 <= |A| <= 106

// Input Format

// The first and the only argument of input contains a pointer to the head of the linked list A.

// Output Format

// Return a pointer to the head of the modified linked list.

// Example Input

// Input 1:

//  A = [1, 2, 3, 4, 5]
// Input 2:

//  A = [1, 2, 3, 4]

// Example Output

// Output 1:

//  [1, 5, 2, 4, 3]
// Output 2:

//  [1, 4, 2, 3]

// Example Explanation

// Explanation 1:

//  The array will be arranged to [A0, An, A1, An-1, A2].
// Explanation 2:

//  The array will be arranged to [A0, An, A1, An-1, A2].

import { LinkedList, ListNode } from '../LinkedList/linkedListClass.js';

export function reorderList(head) {
  if (!head || !head.next) {
    return head;
  }

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let current = slow;
  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  // Step 3: Merge the two halves
  let first = head;
  let second = prev; // This is the head of the reversed second half
  while (second.next) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }

  return head;
}

// Example usage:
const ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.insertAtEnd(4);
ll.insertAtEnd(5);

console.log('Original List:');
ll.print_ll();

reorderList(ll.head);

console.log('Reordered List:');
ll.print_ll();
