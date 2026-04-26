// Problem Description

// Given an array A of N numbers, you have to perform B operations. In each operation, you have to pick any one of the N elements and add the original value(value stored at the index before we did any operations) to its current value. You can choose any of the N elements in each operation.

// Perform B operations in such a way that the largest element of the modified array(after B operations) is minimized.
// Find the minimum possible largest element after B operations.

// Problem Constraints

// 1 <= N <= 104
// 0 <= B <= 104
// 1 <= A[i] <= 104

// Input Format

// The first argument is an integer array A.
// The second argument is an integer B.

// Output Format

// Return an integer denoting the minimum possible largest element after B operations.

// Example Input

// Input 1:

//  A = [1, 2, 3, 4]
//  B = 3
// Input 2:

//  A = [5, 1, 4, 2]
//  B = 5

// Example Output

// Output 1:

//  4
// Output 2:

//  5

// Example Explanation

// Explanation 1:

//  Apply operation on element at index 0, the array would change to [2, 2, 3, 4]
//  Apply operation on element at index 0, the array would change to [3, 2, 3, 4]
//  Apply operation on element at index 0, the array would change to [4, 2, 3, 4]
//  Minimum possible largest element after 3 operations is 4.
// Explanation 2:

//  Apply operation on element at index 1, the array would change to [5, 2, 4, 2]
//  Apply operation on element at index 1, the array would change to [5, 3, 4, 2]
//  Apply operation on element at index 1, the array would change to [5, 4, 4, 2]
//  Apply operation on element at index 1, the array would change to [5, 5, 4, 2]
//  Apply operation on element at index 3, the array would change to [5, 5, 4, 4]
//  Minimum possible largest element after 5 operations is 5.

function findminLargest(A, B) {
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

        if (this.heap[p][0] >= this.heap[i][0]) {
          [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
        } else {
          break;
        }

        i = p;
      }
    }

    pop() {
      if (this.heap.length === 0) return [-1, -1];
      if (this.heap.length === 1) return this.heap.pop();

      let min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();

      return min;
    }

    bubbleDown() {
      let i = 0;
      let n = this.heap.length;
      while (true) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let smallest = i;

        if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
          smallest = left;
        }
        if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
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
  }

  let heap = new minHeap();
  let currState = [...A];

  for (let i = 0; i < A.length; i++) {
    heap.push([2 * A[i], i]);
  }

  for (let i = 0; i < B; i++) {
    let [curr, currIndex] = heap.pop();
    currState[currIndex] = curr;
    curr += A[currIndex];
    heap.push([curr, currIndex]);
  }
  let maxVal = currState[0];
  for (let i = 0; i < A.length; i++) {
    maxVal = Math.max(maxVal, currState[i]);
  }

  return maxVal;
}
