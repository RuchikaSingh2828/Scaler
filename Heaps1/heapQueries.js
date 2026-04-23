// Problem Description

// You have an empty min heap. You are given an array A consisting of N queries. Let P denote A[i][0] and Q denote A[i][1]. There are two types of queries:

// P = 1, Q = -1 : Pop the minimum element from the heap.
// P = 2, 1 <= Q <= 109 : Insert Q into the heap.

// Return an integer array containing the answer for all the extract min operation. If the size of heap is 0, then extract min should return -1.

// Problem Constraints

// 1 <= N <= 105

// 1 <= A[i][0] <= 2

// 1 <= A[i][1] <= 109 or A[i][1] = -1

// Input Format

// The only argument A is a 2D integer array

// Output Format

// Return an integer array

// Example Input

// Input 1:

// A = [[1, -1], [2, 2], [2, 1], [1, -1]]
// Input 2:

// A = [[2, 5], [2, 3], [2, 1], [1, -1], [1, -1]]

// Example Output

// Output 1:

// [-1, 1]
// Output 2:

// [1, 3]

// Example Explanation

// Explanation 1:

// For the first extract operation the heap is empty so it gives -1. For the second extract operation the heap contains the elements 2 and 1. Extract min returns the element 1.
// Explanation 2:

// The heap contains the elements 5, 3 and 1. The first extract min operation gets the element 1 and the second operation gets the element 3.
function heapQueries(A) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    push(val) {
      this.heap.push(val);
      this.bubbleUp();
    }

    bubbleUp() {
      let idx = this.heap.length - 1;

      while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);

        if (this.heap[parent] <= this.heap[idx]) break;

        [this.heap[parent], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parent],
        ];

        idx = parent;
      }
    }

    pop() {
      if (this.size() === 0) return -1;

      if (this.size() === 1) return this.heap.pop();

      let min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();

      return min;
    }

    bubbleDown() {
      let idx = 0;
      let length = this.heap.length;

      while (true) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let smallest = idx;

        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }

        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }

        if (smallest === idx) break;

        [this.heap[idx], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[idx],
        ];

        idx = smallest;
      }
    }
  }

  let heap = new MinHeap();
  let result = [];

  for (let [P, Q] of A) {
    if (P === 2) {
      heap.push(Q);
    } else {
      result.push(heap.pop());
    }
  }

  return result;
}
