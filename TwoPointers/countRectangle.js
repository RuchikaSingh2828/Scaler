// Problem Description

// Given a sorted array of distinct integers A and an integer B, find and return how many rectangles with distinct configurations can be created using elements of this array as length and breadth whose area is lesser than B.

// (Note that a rectangle of 2 x 3 is different from 3 x 2 if we take configuration into view)

// Problem Constraints

// 1 <= |A| <= 100000
// 1 <= A[i] <= 109
// 1 <= B <= 109

// Input Format

// The first argument given is the integer array A.

// The second argument given is integer B.

// Output Format

// Return the number of rectangles with distinct configurations with area less than B modulo (109 + 7).

// Example Input

// Input 1:

//  A = [1, 2]
//  B = 5
// Input 2:

//  A = [1, 2]
//  B = 1

// Example Output

// Output 1:

//  4
// Output 2:

//  0

// Example Explanation

// Explanation 1:

//  All 1X1, 2X2, 1X2 and 2X1 have area less than 5.
// Explanation 2:

//  No Rectangle is valid.

// A = [1, 2], B = 5

// i=0 (A[i]=1)
// j starts 1
// 1*2 < 5 → valid → add (1+1)=2  → (1,1),(1,2)

// i=1 (A[i]=2)
// j still 1
// 2*2=4 < 5 → add (1+1)=2 → (2,1),(2,2)

// Total = 4

// Matches expected output.

// 🔍 Complexity

// i moves from 0 → n−1

// j only moves leftwards from n−1 → 0

// So total movement is O(n).

// Perfect for constraints up to 100000.
function countRectangles(A, B) {
  let n = A.length - 1;
  let left = 0,
    right = n;
  let count = 0;
  const MOD = 1e9 + 7;

  while (left < n) {
    while (right >= 0 && A[left] * A[right] >= B) {
      right--;
    }
    if (right < 0) {
      break;
    }
    count = (count + (right + 1)) % MOD;
    left++;
  }
  return count % MOD;
}

console.log(countRectangles([1, 2], 5)); // 4
console.log(countRectangles([1, 2], 1)); // 0
console.log(countRectangles([1, 3, 5], 7)); // 5
console.log(countRectangles([2, 4, 6], 12)); // 4
console.log(countRectangles([1, 2, 3, 4], 10)); // 8
