// Given an array A of non-negative integers, arrange them such that they form the largest number.

// Note: The result may be very large, so you need to return a string instead of an integer.

// Problem Constraints

// 1 <= len(A) <= 100000
// 0 <= A[i] <= 2*109

// Input Format

// The first argument is an array of integers.

// Output Format

// Return a string representing the largest number.

// Example Input

// Input 1:

//  A = [3, 30, 34, 5, 9]
// Input 2:

//  A = [2, 3, 9, 0]

// Example Output

// Output 1:

//  "9534330"
// Output 2:

//  "9320"

// Example Explanation

// Explanation 1:

// Reorder the numbers to [9, 5, 34, 3, 30] to form the largest number.
// Explanation 2:

// Reorder the numbers to [9, 3, 2, 0] to form the largest number 9320.

function largestNumber(A) {
  A = A.map((ele) => ele.toString());
  A.sort((a, b) => {
    if (a + b > b + a) return -1; // a should come first
    else if (a + b < b + a) return 1; // b should come first
    else return 0;
  });
  if (A[0] === '0') return 0; /// in case of all 0s you need to return a single 0 instead of multiple 0s
  return A.join('');
}

console.log(largestNumber([8, 89])); // "898"
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
console.log(largestNumber([2, 3, 9, 0])); // "9320"
console.log(largestNumber([0, 0])); // "0"
console.log(largestNumber([121, 12])); // "12121"
console.log(largestNumber([12, 121])); // "12121"

// Another Approach
// function largestNumber2(A) {
//   A = A.map(String);
//   A.sort((a, b) => (b + a).localeCompare(a + b));
//   if (A[0] === '0') return '0';
//   return A.join('');
// }
