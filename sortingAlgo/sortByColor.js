// Given an array with N objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will represent the colors as,

// red -> 0
// white -> 1
// blue -> 2

// Note: Using the library sort function is not allowed.

// Problem Constraints

// 1 <= N <= 1000000
// 0 <= A[i] <= 2

// Input Format

// First and only argument of input contains an integer array A.

// Output Format

// Return an integer array in asked order

// Example Input

// Input 1 :
//     A = [0, 1, 2, 0, 1, 2]
// Input 2:

//     A = [0]

// Example Output

// Output 1:
//     [0, 0, 1, 1, 2, 2]
// Output 2:

//     [0]

// Example Explanation

// Explanation 1:
//     [0, 0, 1, 1, 2, 2] is the required order.
// Explanation 2:
//     [0] is the required order

function sortColors(A) {
  let one = 0;
  let two = 0;
  let zero = 0;
  let counter = 0;
  for (const iterator of A) {
    if (iterator == 0) {
      zero++;
    } else if (iterator == 1) {
      one++;
    } else {
      two++;
    }
  }
  while (zero) {
    A[counter] = 0;
    counter++;
    zero--;
  }
  while (one) {
    A[counter] = 1;
    counter++;
    one--;
  }
  while (two) {
    A[counter] = 2;
    counter++;
    two--;
  }
  return A;
}
