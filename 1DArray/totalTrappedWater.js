// Q3. Rain Water Trapped
// Unsolved
// feature icon
// Get your doubts resolved blazing fast with Chat GPT Help
// Check Chat GPT
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description
// Imagine a histogram where the bars' heights are given by the array A. Each bar is of uniform width, which is 1 unit. When it rains, water will accumulate in the valleys between the bars.

// Your task is to calculate the total amount of water that can be trapped in these valleys.

// Example:

// The Array A = [5, 4, 1, 4, 3, 2, 7] is visualized as below. The total amount of rain water trapped in A is 11.

// Rain Water Trapped

// Problem Constraints
// 1 <= |A| <= 105
// 0 <= A[i] <= 105

// Input Format
// First and only argument is the Integer Array, A.

// Output Format
// Return an Integer, denoting the total amount of water that can be trapped in these valleys

// Example Input
// Input 1:

const A = [0, 1, 0, 2]; //[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Input 2:

// A = [1, 2]

// Example Output
// Output 1:

// 1
// Output 2:

// 0

const totalTrappedWater = (A) => {
  let l = 0;
  let r = A.length - 1;
  let lmax = 0;
  let rmax = 0;
  let res = 0;

  while (l <= r) {
    if (A[l] <= A[r]) {
      if (A[l] > lmax) lmax = A[l];
      else res += lmax - A[l];
      l++;
    } else {
      // A[r]<A[l]
      if (A[r] > rmax) rmax = A[r];
      else res += rmax - A[r];
      r--;
    }
  }

  return res;
};

console.log(totalTrappedWater(A));
