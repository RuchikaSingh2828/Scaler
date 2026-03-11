// Children and Rides
// Save for later
// Problem Description

// In an amusement park, there are rides being constructed for N children. Each ride has a maximum capacity limit of B for the total weight of the children on board.

// You are given an array of weights of children, where A[i] is the weight of the i-th child, and an infinite number of rides. Each ride can carry at most two children at the same time, provided the sum of their weights is at most the ride's capacity limit.

// Find the minimum number of rides to accommodate all the children.

// Problem Constraints

// 1 <= N <= 105

// 0<= B <= 109

// 0 <= A[i] <= B

// Input Format

// First argument A is an array of integers.

// Second argument B is an integer.

// Output Format

// Return an integer.

// Example Input

// Input 1:

// A = [1, 2, 3]
// B = 4

// Input 2:

// A = [3, 2, 2, 0, 1]
// B = 4

// Example Output

// Output 1:

// 2

// Output 2:

// 3

// Example Explanation

// Example 1:
// We can take elements of i = 1 and i = 3 and combine them as one ride and the element i = 2 can be considered as another ride. So the answer is 2.

// Example 2:
// We can combine elements of (i = 2 and i = 3) and (i = 1 and i = 5) and (i = 4) so the answer is 3.

// NOTE: In both explanations we have followed 1-based indexing.

function childrenAndRides(A, B) {
  A.sort((a, b) => a - b); // Sort the weights in non-decreasing order
  let left = 0; // Pointer to the lightest child
  let right = A.length - 1; // Pointer to the heaviest child
  let rides = 0;

  while (left <= right) {
    if (A[left] + A[right] <= B) {
      left++; // If the lightest and heaviest child can ride together, move the left pointer
    }
    right--; // Move the right pointer for the heaviest child
    rides++; // Increment the ride count
  }

  return rides;
}
