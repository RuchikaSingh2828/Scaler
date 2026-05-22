// Problem Description

// Flipkart is currently dealing with the difficulty of precisely estimating and displaying the expected delivery time for orders to a specific pin code. The existing method relies on historical delivery time data for that pin code, using the median value as the expected delivery time. As the order history expands with new entries, Flipkart aims to enhance this process by dynamically updating the expected delivery time whenever a new delivery time is added. The objective is to find the expected delivery time after each new element is incorporated into the list of delivery times. End Goal: With every addition of new delivery time, requirement is to find the median value.

// Why Median ? The median is calculated because it provides a more robust measure of the expected delivery time The median is less sensitive to outliers or extreme values than the mean. In the context of delivery times, this is crucial because occasional delays or unusually fast deliveries (outliers) can skew the mean significantly, leading to inaccurate estimations.

// Given an array of integers, A denoting the delivery times for each order. New arrays of integer B and C are formed, each time a new delivery data is encountered, append it at the end of B and append the median of array B at the end of C. Your task is to find and return the array C.

// NOTE:

// If the number of elements is N in B and N is odd, then consider the median as B[N/2] ( B must be in sorted order).
// If the number of elements is N in B and N is even, then consider the median as B[N/2-1]. ( B must be in sorted order).

// Problem Constraints

// 1 <= length of the array <= 100000
// 1 <= A[i] <= 109

// Input Format

// The only argument given is the integer array A.

// Output Format

// Return an integer array C, C[i] denotes the median of the first i delivery times.

// Example Input

// Input 1:

//  A = [1, 2, 5, 4, 3]
// Input 2:

//  A = [5, 17, 100, 11]

// Example Output

// Output 1:

//  [1, 1, 2, 2, 3]
// Output 2:

//  [5, 5, 17, 11]

// Example Explanation

// Explanation 1:

//  Delivery Times      median
//  [1]                   1
//  [1, 2]                1
//  [1, 2, 5]             2
//  [1, 2, 5, 4]          2
//  [1, 2, 5, 4, 3]       3
// Explanation 2:

//  Delivery Times     median
//  [5]                  5
//  [5, 17]              5
//  [5, 17, 100]         17
//  [5, 17, 100, 11]     11

// This problem is about finding the median dynamically as numbers keep getting added one by one.

// Think of it like this:

// Flipkart receives delivery times continuously:

// 1 arrives
// then 2 arrives
// then 5 arrives
// then 4 arrives
// then 3 arrives

// After every new arrival, you must answer:

// “What is the median of all delivery times seen so far?”

// Step 1 — Understand Median Properly

// The median is the middle element after sorting.

// Example:

// [1, 2, 5]

// Middle element = 2

// So median = 2

// But Here’s the Twist

// For EVEN number of elements:

// Normally median is average of two middle values.

// BUT THIS QUESTION DOES NOT DO THAT.

// Instead:

// If N is even → take the LEFT middle element.

// Meaning:

// Sorted = [1, 2, 4, 5]

// Middle elements are:
// 2 and 4

// Question says:
// take LEFT one = 2
// Step 2 — Build Understanding Slowly

// Given:

// A = [1, 2, 5, 4, 3]

// We keep adding elements one by one.

// Iteration 1

// Take first element:

// B = [1]

// Sorted:

// [1]

// Size = 1 (odd)

// Median index:

// N/2 = 1/2 = 0

// Median = 1

// So:

// C = [1]
// Iteration 2

// Add 2

// B = [1, 2]

// Sorted:

// [1, 2]

// Size = 2 (even)

// Rule says:

// median = B[N/2 - 1]

// = B[2/2 -1]
// = B[0]
// = 1

// So:

// C = [1, 1]
// Iteration 3

// Add 5

// B = [1, 2, 5]

// Sorted:

// [1, 2, 5]

// Size = 3 (odd)

// Median index:

// 3/2 = 1

// Median:

// B[1] = 2

// So:

// C = [1,1,2]
// Iteration 4

// Add 4

// B = [1,2,5,4]

// Sorted:

// [1,2,4,5]

// Size = 4 (even)

// Median index:

// 4/2 -1
// = 1

// Median:

// B[1] = 2

// So:

// C = [1,1,2,2]
// Iteration 5

// Add 3

// B = [1,2,5,4,3]

// Sorted:

// [1,2,3,4,5]

// Size = 5

// Median index:

// 5/2 = 2

// Median:

// B[2] = 3

// Final:

// C = [1,1,2,2,3]
// MOST IMPORTANT PART — WHAT IS THE REAL CHALLENGE?

// The real challenge is:

// N can be 100000

// If after every insertion you:

// insert element
// sort again

// then complexity becomes huge.

// Brute Force Approach

// For every new element:

// add to array
// sort array
// find median

// Complexity:

// O(N² log N)

// Too slow.

// Efficient Idea

// This is a classic:

// "Running Median" Problem

// We solve it using:

// Max Heap
// Min Heap
// Why Two Heaps?

// We split numbers into two halves.

// Max Heap (left side)

// Stores smaller half.

// Largest element stays on top.

// Example:

// [1,2,3]
// top = 3
// Min Heap (right side)

// Stores larger half.

// Smallest element stays on top.

// Example:

// [5,7,8]
// top = 5
// Key Observation

// The median is always:

// either top of maxHeap
// or based on balancing

// Since this problem wants LEFT median for even size:

// Answer will ALWAYS be top of maxHeap.

// Goal While Maintaining Heaps

// We keep:

// maxHeap size >= minHeap size

// And difference at most 1.

// Visual Example

// Suppose numbers are:

// 1 2 5 4 3
// Add 1
// maxHeap = [1]
// minHeap = []

// median = 1
// Add 2

// 2 > top(maxHeap)

// goes to minHeap

// maxHeap = [1]
// minHeap = [2]

// median = top(maxHeap) = 1

// Add 5

// goes to minHeap

// maxHeap = [1]
// minHeap = [2,5]

// Unbalanced.

// Move smallest from minHeap → maxHeap

// maxHeap = [2,1]
// minHeap = [5]

// median = 2

// Add 4

// goes to minHeap

// maxHeap = [2,1]
// minHeap = [4,5]

// Balanced.

// median = 2

// Add 3

// goes to minHeap

// minHeap = [3,5,4]

// Too big.

// Move smallest to maxHeap.

// maxHeap = [3,2,1]
// minHeap = [4,5]

// median = 3

// Correct.

// Final Understanding

// This problem teaches:

// Dynamic Median
// Heap balancing
// Streaming data processing
// Real-world use of heaps

// This is one of the MOST important heap interview problems.
function runningMedian(A) {
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
        let parent = Math.floor((i - 1) / 2);
        if (this.heap[parent] > this.heap[i]) {
          [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
          i = parent;
        } else {
          break;
        }
      }
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return min;
    }

    bubbleDown(i) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest !== i) {
        [this.heap[smallest], this.heap[i]] = [
          this.heap[i],
          this.heap[smallest],
        ];
        this.bubbleDown(smallest);
      }
    }

    peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }
  }

  class maxHeap {
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
        let parent = Math.floor((i - 1) / 2);
        if (this.heap[parent] < this.heap[i]) {
          [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
          i = parent;
        } else {
          break;
        }
      }
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return max;
    }

    bubbleDown(i) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let largest = i;

      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest !== i) {
        [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
        this.bubbleDown(largest);
      }
    }

    peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }
  }

  const result = [];
  const minH = new minHeap();
  const maxH = new maxHeap();

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    if (maxH.heap.length === 0 || num <= maxH.peek()) {
      maxH.push(num);
    } else {
      minH.push(num);
    }

    // Balance Heaps
    if (maxH.heap.length > minH.heap.length + 1) {
      minH.push(maxH.pop());
    } else if (minH.heap.length > maxH.heap.length) {
      maxH.push(minH.pop());
    }

    // Median is top of maxHeap
    result.push(maxH.peek());
  }

  return result;
}
