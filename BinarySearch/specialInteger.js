// Problem Description

// Given an array of integers A and an integer B, find and return the maximum value K such that there is no subarray in A of size K with the sum of elements greater than B.

// Problem Constraints

// 1 <= |A| <= 100000
// 1 <= A[i] <= 10^9

// 1 <= B <= 10^9

// Input Format

// The first argument given is the integer array A.

// The second argument given is integer B.

// Output Format

// Return the maximum value of K (sub array length).

// Example Input

// Input 1:

// A = [1, 2, 3, 4, 5]
// B = 10
// Input 2:

// A = [5, 17, 100, 11]
// B = 130

// Example Output

// Output 1:

//  2
// Output 2:

//  3

// Example Explanation

// Explanation 1:

// For K = 5, There are subarrays [1, 2, 3, 4, 5] which has a sum > B
// For K = 4, There are subarrays [1, 2, 3, 4], [2, 3, 4, 5] which has a sum > B
// For K = 3, There is a subarray [3, 4, 5] which has a sum > B
// For K = 2, There were no subarray which has a sum > B.
// Constraints are satisfied for maximal value of 2.
// Explanation 2:

// For K = 4, There are subarrays [5, 17, 100, 11] which has a sum > B
// For K = 3, There were no subarray which has a sum > B.
// Constraints are satisfied for maximal value of 3.

// here we can have the range as 1 to sum

function isValid(A, B, K) {
  let n = A.length;
  let windowSum = 0;

  if (K === 0) return true;
  if (K > n) return false;

  // Calculate the sum of the first K elements
  for (let i = 0; i < K; i++) {
    windowSum += A[i];
  }

  // If the initial window sum is greater than B, return false
  if (windowSum > B) {
    return false;
  }

  // Slide the window across the array
  for (let i = K; i < n; i++) {
    windowSum += A[i] - A[i - K]; // Add next element and remove the first element of the previous window

    // If any window sum exceeds B, return false
    if (windowSum > B) {
      return false;
    }
  }

  return true; // All window sums are within the limit
}

function specialInteger(A, B) {
  let n = A.length;
  let left = 0;
  let right = n;
  let result = 0;

  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);
    if (isValid(A, B, mid)) {
      result = mid; // Update result if valid
      left = mid; // Try for a larger K
    } else {
      right = mid - 1; // Try for a smaller K
    }
  }

  return result;
}

// console.log(specialInteger([1, 2, 3, 4, 5], 10); // Output: 2
console.log(specialInteger([5, 17, 100, 11], 130)); // Output: 3
