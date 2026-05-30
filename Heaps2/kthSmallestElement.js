// Problem Description

// Given a sorted matrix of integers A of size N x M and an integer B.

// Each of the rows and columns of matrix A is sorted in ascending order, find the Bth smallest element in the matrix.

// NOTE: Return The Bth smallest element in the sorted order, not the Bth distinct element.

// Problem Constraints

// 1 <= N, M <= 500

// 1 <= A[i] <= 109

// 1 <= B <= N * M

// Input Format

// The first argument given is the integer matrix A.
// The second argument given is an integer B.

// Output Format

// Return the B-th smallest element in the matrix.

// Example Input

// Input 1:

//  A = [ [9, 11, 15],
//        [10, 15, 17] ]
//  B = 6
// Input 2:

//  A = [  [5, 9, 11],
//         [9, 11, 13],
//         [10, 12, 15],
//         [13, 14, 16],
//         [16, 20, 21] ]
//  B = 12

// Example Output

// Output 1:

//  17
// Output 2:

//  16

// Example Explanation

// Explanation 1:

//  6th smallest element in the sorted matrix is 17.
// Explanation 2:

//  12th smallest element in the sorted matrix is 16.

function kthSmallestElement(A, B) {
  const minHeap = new MinHeap();
  for (let i = 0; i < A.length; i++) {
    minHeap.insert({ value: A[i][0], row: i, col: 0 });
  }

  let count = 0;
  let result = -1;

  while (count < B) {
    const { value, row, col } = minHeap.extractMin();
    result = value;
    count++;

    if (col + 1 < A[0].length) {
      minHeap.insert({ value: A[row][col + 1], row, col: col + 1 });
    }
  }

  return result;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  top() {
    return this.heap[0];
  }

  insert(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.size() === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].value < this.heap[parentIndex].value) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const size = this.size();
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < size && this.heap[left].value < this.heap[smallest].value) {
        smallest = left;
      }
      if (right < size && this.heap[right].value < this.heap[smallest].value) {
        smallest = right;
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }
}
