// Problem Description

// Sort a linked list, A in O(n log n) time.

// Problem Constraints

// 0 <= |A| = 105

// Input Format

// The first and the only arugment of input contains a pointer to the head of the linked list, A.

// Output Format

// Return a pointer to the head of the sorted linked list.

// Example Input

// Input 1:

// A = [3, 4, 2, 8]
// Input 2:

// A = [1]

// Example Output

// Output 1:

// [2, 3, 4, 8]
// Output 2:

// [1]

// Example Explanation

// Explanation 1:

//  The sorted form of [3, 4, 2, 8] is [2, 3, 4, 8].
// Explanation 2:

//  The sorted form of [1] is [1].

import { LinkedList } from '../LinkedList/linkedListClass.js';
import { mergeTwoSortedList } from './mergeTwoSortedList.js';
import { findMiddle } from './findMiddle.js';

export function sortLinkedList(head) {
  // Base case: if head is null or there is only one element
  if (head === null || head.next === null) {
    return head;
  }

  // Find the middle of the linked list
  const middleValue = findMiddle(head);
  const rightHead = middleValue.next;
  middleValue.next = null; // Split the list into two halves

  let left = sortLinkedList(head);
  let right = sortLinkedList(rightHead);

  // Merge the sorted halves
  return mergeTwoSortedList(left, right);
}

//example usage
const ll = new LinkedList();
ll.insertAtEnd(3);
ll.insertAtEnd(4);
ll.insertAtEnd(2);
ll.insertAtEnd(8);

const sortedHead = sortLinkedList(ll.head);

// Function to print the linked list
function printList(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join(' -> '));
}

printList(sortedHead); // Output: 2 -> 3 -> 4 -> 8
