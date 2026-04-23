// Problem Description

// You are given an array A of integers that represent the lengths of ropes.

// You need to connect these ropes into one rope. The cost of joining two ropes equals the sum of their lengths.

// Find and return the minimum cost to connect these ropes into one rope.

// Problem Constraints

// 1 <= length of the array <= 100000
// 1 <= A[i] <= 1000

// Input Format

// The only argument given is the integer array A.

// Output Format

// Return an integer denoting the minimum cost to connect these ropes into one rope.

// Example Input

// Input 1:

//  A = [1, 2, 3, 4, 5]
// Input 2:

//  A = [5, 17, 100, 11]

// Example Output

// Output 1:

//  33
// Output 2:

//  182

// Example Explanation

// Explanation 1:

//  Given array A = [1, 2, 3, 4, 5].
//  Connect the ropes in the following manner:
//  1 + 2 = 3
//  3 + 3 = 6
//  4 + 5 = 9
//  6 + 9 = 15

//  So, total cost  to connect the ropes into one is 3 + 6 + 9 + 15 = 33.
// Explanation 2:

//  Given array A = [5, 17, 100, 11].
//  Connect the ropes in the following manner:
//  5 + 11 = 16
//  16 + 17 = 33
//  33 + 100 = 133

//  So, total cost  to connect the ropes into one is 16 + 33 + 133 = 182.

function connectRopes(A) {
  // Create a min heap to store the lengths of the ropes
  const minHeap = new MinHeap();

  // Insert all rope lengths into the min heap
  for (let length of A) {
    minHeap.insert(length);
  }

  let totalCost = 0;

  // While there is more than one rope in the heap
  while (minHeap.size() > 1) {
    // Extract the two shortest ropes
    const first = minHeap.extractMin();
    const second = minHeap.extractMin();

    // Calculate the cost of connecting these two ropes
    const cost = first + second;

    // Add the cost to the total cost
    totalCost += cost;

    // Insert the new rope back into the min heap
    minHeap.insert(cost);
  }

  return totalCost;
}

// Min Heap implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
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
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) break;

      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      index = smallestIndex;
    }
  }

  size() {
    return this.heap.length;
  }
}
