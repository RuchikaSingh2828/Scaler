// Problem Description

// N people having different priorities are standing in a queue.

// The queue follows the property that each person is standing at most B places away from its position in the sorted queue.

// Your task is to sort the queue in the increasing order of priorities.

// NOTE:

// No two persons can have the same priority.
// Use the property of the queue to sort the queue with complexity O(NlogB).

// Problem Constraints

// 1 <= N <= 100000
// 0 <= B <= N

// Input Format

// The first argument is an integer array A representing the priorities and initial order of N persons.
// The second argument is an integer B.

// Output Format

// Return an integer array representing the sorted queue.

// Example Input

// Input 1:

//  A = [1, 40, 2, 3]
//  B = 2
// Input 2:

//  A = [2, 1, 17, 10, 21, 95]
//  B = 1

// Example Output

// Output 1:

//  [1, 2, 3, 40]
// Output 2:

//  [1, 2, 10, 17, 21, 95]

// Example Explanation

// Explanation 1:

//  Given array A = [1, 40, 2, 3]
//  After sorting, A = [1, 2, 3, 40].
//  We can see that difference between initial position of elements amd the final position <= 2.
// Explanation 2:

//  After sorting, the array becomes [1, 2, 10, 17, 21, 95].

function kSpacesApart(A, B) {
  class minHeap {
    constructor() {
      this.heap = [];
    }

    push(val) {
      this.heap.push(val);
      this.bubbleUp();
    }

    bubbleUp() {
      let i = this.heap.length - 1;

      while (i > 0) {
        let p = Math.floor((i - 1) / 2);

        if (this.heap[p] < this.heap[i]) {
          break;
        }

        [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
        i = p;
      }
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();

      const top = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();

      return top;
    }

    bubbleDown() {
      let i = 0;
      let n = this.heap.length - 1;
      while (i < n) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;

        if (left < n && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < n && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }

        if (smallest === i) break;
        [this.heap[smallest], this.heap[i]] = [
          this.heap[i],
          this.heap[smallest],
        ];
        i = smallest;
      }
    }

    size() {
      return this.heap.length;
    }
  }

  let heap = new minHeap();
  let res = [];
  for (let i = 0; i <= B; i++) {
    heap.push(A[i]);
  }
  for (let i = B + 1; i < A.length - 1; i++) {
    res.push(heap.pop());
    heap.push(A[i]);
  }

  while (heap.size() > 0) {
    res.push(heap.pop());
  }

  return res;
}

console.log(kSpacesApart([25, 16, 11, 31, 28, 20, 3, 8], 6)); // 3 8 11 16 20 25 28 31
