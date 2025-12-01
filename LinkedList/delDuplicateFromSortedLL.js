// Problem Description

// Given a sorted linked list, delete all duplicates such that each element appears only once.

// Problem Constraints

// 0 <= length of linked list <= 106

// Input Format

// First argument is the head pointer of the linked list.

// Output Format

// Return the head pointer of the linked list after removing all duplicates.

// Example Input

// Input 1:

//  1->1->2
// Input 2:

//  1->1->2->3->3

// Example Output

// Output 1:

//  1->2
// Output 2:

//  1->2->3

// Example Explanation

// Explanation 1:

//  Each element appear only once in 1->2.

import { ListNode, LinkedList } from './linkedListClass.js';

export const deleteDuplicates = function (A) {
  if (!A) return null;

  let current = A;

  while (current && current.next) {
    if (current.value === current.next.value) {
      // Skip the duplicate node
      current.next = current.next.next;
    } else {
      // Move to the next distinct element
      current = current.next;
    }
  }

  return A;
};
