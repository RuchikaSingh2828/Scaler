// Problem Description

// Given a linked list of integers. Find and return the length of the longest palindrome list that exists in that linked list.

// A palindrome list is a list that reads the same backward and forward.

// Expected memory complexity : O(1)

// Problem Constraints

// 1 <= length of the linked list <= 2000

// 1 <= Node value <= 100

// Input Format

// The only argument given is head pointer of the linked list.

// Output Format

// Return the length of the longest palindrome list.

// Example Input

// Input 1:

//  2 -> 3 -> 3 -> 3
// Input 2:

//  2 -> 1 -> 2 -> 1 ->  2 -> 2 -> 1 -> 3 -> 2 -> 2

// Example Output

// Output 1:

//  3
// Output 2:

//  5

// Example Explanation

// Explanation 1:

//  3 -> 3 -> 3 is largest palindromic sublist
// Explanation 2:

//  2 -> 1 -> 2 -> 1 -> 2 is largest palindromic sublist.
import { ListNode, LinkedList } from './linkedListClass.js';

function countCommon(left, right) {
  let count = 0;
  while (left !== null && right !== null) {
    if (left.value === right.value) {
      count++;
      left = left.next;
      right = right.next;
    } else {
      break;
    }
  }
  return count;
}

function longestPalindromList(A) {
  let maxLength = 0;
  let prev = null;
  let curr = A;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;

    // Check for odd length palindrome
    let oddLength = 2 * countCommon(prev, next) + 1;
    let evenLength = 2 * countCommon(curr, next);

    maxLength = Math.max(maxLength, oddLength, evenLength);

    prev = curr;
    curr = next;
  }

  return maxLength;
}
let ll = new LinkedList();
ll.insertAtEnd(2);
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(2);
ll.insertAtEnd(1);
ll.insertAtEnd(3);
ll.insertAtEnd(2);
ll.print_ll();

console.log(longestPalindromList(ll.head)); // Output: 5
