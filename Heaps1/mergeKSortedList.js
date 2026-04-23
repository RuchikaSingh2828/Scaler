// Problem Description

// Given a list containing head pointers of N sorted linked lists.
// Merge these given sorted linked lists and return them as one sorted list.

// Problem Constraints

// 1 <= total number of elements in given linked lists <= 100000

// Input Format

// The first and only argument is a list containing N head pointers.

// Output Format

// Return a pointer to the head of the sorted linked list after merging all the given linked lists.

// Example Input

// Input 1:

//  1 -> 10 -> 20
//  4 -> 11 -> 13
//  3 -> 8 -> 9
// Input 2:

//  10 -> 12
//  13
//  5 -> 6

// Example Output

// Output 1:

//  1 -> 3 -> 4 -> 8 -> 9 -> 10 -> 11 -> 13 -> 20
// Output 2:

//  5 -> 6 -> 10 -> 12 ->13

// Example Explanation

// Explanation 1:

//  The resulting sorted Linked List formed after merging is 1 -> 3 -> 4 -> 8 -> 9 -> 10 -> 11 -> 13 -> 20.
// Explanation 2:

//  The resulting sorted Linked List formed after merging is 5 -> 6 -> 10 -> 12 ->13.

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return top;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent].data < this.heap[index].data) {
        break;
      }
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }

  bubbleDown(i) {
    while (i < this.heap.length) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      let smallest = i;
      let n = this.heap.length;

      if (l < n && this.heap[l].data < this.heap[smallest].data) {
        smallest = l;
      }
      if (r < n && this.heap[r].data < this.heap[smallest].data) {
        smallest = r;
      }

      if (smallest === i) break;

      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }
}

const mergeKsortedList = (A) => {
  let heap = new MinHeap();

  for (let node of A) {
    if (node) heap.push(node);
  }

  let dummy = { next: null, data: null };
  let curr = dummy;

  while (heap.length > 0) {
    let smallest = heap.pop();

    curr.next = smallest;
    curr = curr.next;

    if (smallest.next) {
      heap.push(smallest.next);
    }
  }

  return dummy.next;
};
