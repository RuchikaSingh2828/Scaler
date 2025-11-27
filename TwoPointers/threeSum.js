// Problem Description

// Given an array A of N integers, find three integers in A such that the sum is closest to a given number B. Return the sum of those three integers.

// Assume that there will only be one solution.

// Problem Constraints

// -108 <= B <= 108
// 1 <= N <= 104
// -108 <= A[i] <= 108

// Input Format

// First argument is an integer array A of size N.

// Second argument is an integer B denoting the sum you need to get close to.

// Output Format

// Return a single integer denoting the sum of three integers which is closest to B.

// Example Input

// Input 1:

// A = [-1, 2, 1, -4]
// B = 1
// Input 2:

// A = [1, 2, 3]
// B = 6

// Example Output

// Output 1:

// 2
// Output 2:

// 6

// Example Explanation

// Explanation 1:

//  The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
// Explanation 2:

//  Take all elements to get exactly 6.

//
// -------------------------------------------------------
// Another Approach
// -------------------------------------------------------
function threeSumClosest(A, B) {
  A.sort((a, b) => a - b);
  let n = A.length;
  let closestSum = Infinity;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let currentSum = A[i] + A[left] + A[right];

      if (Math.abs(B - currentSum) < Math.abs(B - closestSum)) {
        closestSum = currentSum;
      }

      if (currentSum < B) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
// -------------------------------------------------------
// Another Approach Ends
// -------------------------------------------------------
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
console.log(threeSumClosest([1, 2, 3], 6)); // Output: 6
