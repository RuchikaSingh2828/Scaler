// Problem Description

// Reverse a linked list A from position B to C.

// NOTE: Do it in-place and in one-pass.

// Problem Constraints

// 1 <= |A| <= 106

// 1 <= B <= C <= |A|

// Input Format

// The first argument contains a pointer to the head of the given linked list, A.

// The second arugment contains an integer, B.

// The third argument contains an integer C.

// Output Format

// Return a pointer to the head of the modified linked list.

// Example Input

// Input 1:

//  A = 1 -> 2 -> 3 -> 4 -> 5
//  B = 2
//  C = 4

// Input 2:

//  A = 1 -> 2 -> 3 -> 4 -> 5
//  B = 1
//  C = 5

// Example Output

// Output 1:

//  1 -> 4 -> 3 -> 2 -> 5
// Output 2:

//  5 -> 4 -> 3 -> 2 -> 1

// Example Explanation

// Explanation 1:

//  In the first example, we want to reverse the highlighted part of the given linked list : 1 -> 2 -> 3 -> 4 -> 5
//  Thus, the output is 1 -> 4 -> 3 -> 2 -> 5
// Explanation 2:

//  In the second example, we want to reverse the highlighted part of the given linked list : 1 -> 4 -> 3 -> 2 -> 5
//  Thus, the output is 5 -> 4 -> 3 -> 2 -> 1
import { ListNode, LinkedList } from './linkedListClass.js';
var reverseBetween = function (A, B, C) {
  if (B === C) return A; // No need to reverse if B and C are the same

  let dummy = new ListNode(0);
  dummy.next = A;
  let prev = dummy;

  let curr = A;

  // Move prev and curr to the right positions
  for (let i = 1; i < B - 1; i++) {
    curr = curr.next;
  }
  prev = curr;
  curr = curr.next;

  for (let i = 0; i <= C - B; i++) {
    let temp = curr.next;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }

  // Connect the reversed sublist back to the original list

  return A; // Return the new head of the list
};

const ll2 = new LinkedList();
ll2.insert_node(1, 1);
ll2.insert_node(2, 2);
ll2.insert_node(3, 3);
ll2.insert_node(4, 4);
ll2.insert_node(5, 5);
ll2.insert_node(6, 6);
ll2.insert_node(7, 7);
ll2.insert_node(8, 8);
ll2.insert_node(9, 9);

reverseBetween(ll2.head, 3, 7);
ll2.print_ll(); // Output: 1 2 7 6 5 4 3 8 9
