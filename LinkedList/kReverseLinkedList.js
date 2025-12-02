// Problem Description

// Given a singly linked list A and an integer B, reverse the nodes of the list B at a time and return the modified linked list.

// Problem Constraints

// 1 <= |A| <= 103

// B always divides A

// Input Format

// The first argument of input contains a pointer to the head of the linked list.

// The second arugment of input contains the integer, B.

// Output Format

// Return a pointer to the head of the modified linked list.

// Example Input

// Input 1:

//  A = [1, 2, 3, 4, 5, 6]
//  B = 2
// Input 2:

//  A = [1, 2, 3, 4, 5, 6]
//  B = 3

// Example Output

// Output 1:

//  [2, 1, 4, 3, 6, 5]
// Output 2:

//  [3, 2, 1, 6, 5, 4]

// Example Explanation

// Explanation 1:

//  For the first example, the list can be reversed in groups of 2.
//     [[1, 2], [3, 4], [5, 6]]
//  After reversing the K-linked list
//     [[2, 1], [4, 3], [6, 5]]
// Explanation 2:

//  For the second example, the list can be reversed in groups of 3.
//     [[1, 2, 3], [4, 5, 6]]
//  After reversing the K-linked list
//     [[3, 2, 1], [6, 5, 4]]

import { ListNode, LinkedList } from './linkedListClass.js';
var reverseKGroup = function (A, B) {
  if (A === null || B <= 1) return A;

  let dummy = new ListNode(0);
  dummy.next = A;
  let prevGroupEnd = dummy;

  while (true) {
    let kthNode = prevGroupEnd;
    // Find the k-th node from the current position
    for (let i = 0; i < B && kthNode !== null; i++) {
      kthNode = kthNode.next;
    }
    //     Example:
    // k = 4
    // group has only 2 nodes
    // Traversal:
    // node = 1, k=4 → move to 2
    // node = 2, k=3 → move to None
    // node = None → loop ends
    // return None
    // → returns None
    // → so if not kth: is True, meaning BREAK (stop reversing).

    if (kthNode === null) break; // Not enough nodes to reverse

    nextGroupStart = kthNode.next;

    // Reverse the group
    let prev = nextGroupStart;
    let curr = prevGroupEnd.next;

    while (curr !== nextGroupStart) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    // Connect with the previous part
    let temp = prevGroupEnd.next; // This is the start of the current group
    prevGroupEnd.next = kthNode; // kthNode is the new start after reversal
    prevGroupEnd = temp; // Move prevGroupEnd to the end of the reversed group
  }

  return dummy.next;
};

//     temp = prevStart.next
// prevStart.next = kth
// prev = temp

// Before reversal:

// (prevStart) → a → b → c → (groupNext)

// After reversal:

// (prevStart) → ???(not yet fixed)  c → b → a → (groupNext)
