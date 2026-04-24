// Problem Description

// Misha loves eating candies. She has been given N boxes of Candies.

// She decides that every time she will choose a box having the minimum number of candies, eat half of the candies and put the remaining candies in the other box that has the minimum number of candies.
// Misha does not like a box if it has the number of candies greater than B so she won't eat from that box. Can you find how many candies she will eat?

// NOTE 1: If a box has an odd number of candies then Misha will eat the floor(odd / 2).

// NOTE 2: The same box will not be chosen again.

// Problem Constraints

// 1 <= N <= 105

// 1 <= A[i] <= 105

// 1 <= B <= 106

// Input Format

// The first argument is A an Array of Integers, where A[i] is the number of candies in the ith box.
// The second argument is B, the maximum number of candies Misha like in a box.

// Output Format

// Return an integer denoting the number of candies Misha will eat.

// Example Input

// Input 1:

//  A = [3, 2, 3]
//  B = 4
// Input 2:

//  A = [1, 2, 1]
//  B = 2

// Example Output

// Output 1:

//  2
// Output 2:

//  1

// Example Explanation

// Explanation 1:

//  1st time Misha will eat from 2nd box, i.e 1 candy she'll eat and will put the remaining 1 candy in the 1st box.
//  2nd time she will eat from the 3rd box, i.e 1 candy she'll eat and will put the remaining 2 candies in the 1st box.
//  She will not eat from the 3rd box as now it has candies greater than B.
//  So the number of candies Misha eat is 2.
// Explanation 2:

//  1st time Misha will eat from 1st box, i.e she can't eat any and will put the remaining 1 candy in the 3rd box.
//  2nd time she will eat from the 3rd box, i.e 1 candy she'll eat and will put the remaining 1 candies in the 2nd box.
//  She will not eat from the 2nd box as now it has candies greater than B.
//  So the number of candies Misha eat is 1.

function mishaAndCandies(A, B) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    top() {
      let val = this.heap[0];
      return val;
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

  let total = 0;
  let heap = new MinHeap();

  for (let val of A) {
    heap.insert(val);
  }

  while (heap.size() > 0 && heap.top() <= B) {
    let currBox = heap.extractMin();
    let choConsumed = Math.floor(currBox / 2);
    total += choConsumed;
    if (heap.size() === 0) break;
    let newBox = heap.extractMin() + (currBox - choConsumed);
    heap.insert(newBox);
  }

  return total;
}

console.log(
  mishaAndCandies(
    [
      324, 458, 481, 167, 939, 444, 388, 612, 943, 890, 953, 403, 653, 136, 168,
      163, 186, 471,
    ],

    231,
  ),
);

console.log(mishaAndCandies([705], 895)); //352
