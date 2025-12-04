// Problem Description

// You are using Google Maps to help you find your way around a new place. But, you get lost and end up walking in a circle. Google Maps has a way to keep track of where you've been with the help of special sensors.These sensors notice that you're walking in a loop, and now, Google wants to create a new feature to help you figure out exactly where you started going in circles.

// Here's how we can describe the challenge in simpler terms: You have a Linked List A that shows each step of your journey, like a chain of events. Some of these steps have accidentally led you back to a place you've already been, making you walk in a loop. The goal is to find out the exact point where you first started walking in this loop, and then you want to break the loop by not going in the circle just before this point.

// Problem Constraints

// 1 <= number of nodes <= 1000

// Input Format

// The first of the input contains a LinkedList, where the first number is the number of nodes N, and the next N nodes are the node value of the linked list.
// The second line of the input contains an integer which denotes the position of node where cycle starts.

// Output Format

// return the head of the updated linked list.

// Example Input

// Input 1:

// 1 -> 2
// ^    |
// | - -
// Input 2:

// 3 -> 2 -> 4 -> 5 -> 6
//           ^         |
//           |         |
//           - - - - - -

// Example Output

// Output 1:

//  1 -> 2 -> NULL
// Output 2:

//  3 -> 2 -> 4 -> 5 -> 6 -> NULL

// Example Explanation

// Explanation 1:

//  Chain of 1->2 is broken.
// Explanation 2:

//  Chain of 4->6 is broken.

import { LinkedList, ListNode } from '../LinkedList/linkedListClass.js';

export function removeLoopFromLL(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let slowPointer = head;
  let fastPointer = head;

  // Detect loop using Floyd's Cycle-Finding Algorithm
  let loopExists = false;
  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      loopExists = true;
      break;
    }
  }

  // If loop exists, find the starting point of the loop
  if (loopExists) {
    slowPointer = head;

    // If the loop starts at the head
    if (slowPointer === fastPointer) {
      while (fastPointer.next !== slowPointer) {
        fastPointer = fastPointer.next;
      }
    } else {
      while (slowPointer.next !== fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
      }
    }

    // Break the loop
    fastPointer.next = null;
  }

  return head;
}

//example usage
const ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.insertAtEnd(4);
ll.insertAtEnd(5);

// Creating a loop for testing: connecting the next of last node to the second node
ll.head.next.next.next.next.next = ll.head.next;

const updatedHead = removeLoopFromLL(ll.head);

// Function to print the linked list
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.value + ' -> ');
    current = current.next;
  }
  console.log('NULL');
}

printLinkedList(updatedHead); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
