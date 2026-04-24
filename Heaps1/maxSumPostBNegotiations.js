// Problem Description

// Given an array of integers A and an integer B. You must modify the array exactly B number of times. In a single modification, we can replace any one array element A[i] by -A[i].

// You need to perform these modifications in such a way that after exactly B modifications, sum of the array must be maximum.

// NOTE: You can perform the modification on the same element multiple times.

// Problem Constraints

// 1 <= length of the array <= 5*105
// 1 <= B <= 5 * 106
// -100 <= A[i] <= 100

// Input Format

// The first argument given is an integer array A.
// The second argument given is an integer B.

// Output Format

// Return an integer denoting the maximum array sum after B modifications.

// Example Input

// Input 1:

//  A = [24, -68, -29, -9, 84]
//  B = 4
// Input 2:

//  A = [57, 3, -14, -87, 42, 38, 31, -7, -28, -61]
//  B = 10

// Example Output

// Output 1:

//  196
// Output 2:

//  362

// Example Explanation

// Explanation 1:

// Operation 1: Make -29 to 29,
// Operation 2: Make -9 to 9,
// Operation 3: Make 9 to -9,
// Operation 4: Make -68 to 68.
// Thus, the final array after 4 modifications = [24, 68, 29, -9, 84]
// Explanation 2:

//  Final array after B modifications = [57, -3, 14, 87, 42, 38, 31, 7, 28, 61]

function maxSumPostBNegotiations(A, B) {
  // code here
  const minHeap = new MinHeap();
  for (let i = 0; i < A.length; i++) {
    minHeap.insert(A[i]);
  }
  for (let i = 0; i < B; i++) {
    const minElement = minHeap.extractMin();
    minHeap.insert(-minElement);
  }
  let sum = 0;
  while (minHeap.size() > 0) {
    sum += minHeap.extractMin();
  }
  return sum;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] > this.heap[idx]) {
        [this.heap[parentIdx], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parentIdx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(idx) {
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;
    let smallest = idx;

    if (left < this.size() && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.size() && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== idx) {
      [this.heap[smallest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[smallest],
      ];
      this.bubbleDown(smallest);
    }
  }
}
