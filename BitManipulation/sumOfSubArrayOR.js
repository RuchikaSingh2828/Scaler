// Problem Description

// You are given an array of integers A of size N.

// The value of a subarray is defined as BITWISE OR of all elements in it.

// Return the sum of value of all subarrays of A % 109 + 7.

// Problem Constraints

// 1 <= N <= 105

// 1 <= A[i] <= 108

// Input Format

// The first argument given is the integer array A.

// Output Format

// Return the sum of Value of all subarrays of A % 109 + 7.

// Example Input

// Input 1:

//  A = [1, 2, 3, 4, 5]
// Input 2:

//  A = [7, 8, 9, 10]

// Example Output

// Output 1:

//  71
// Output 2:

//  110

// Example Explanation

// brute force : -------------------------------------------
// travese  all subarrays - take bitwisw or of all the elements of the sub array. - keep adding it to our answer
// TC : O(n^2) - since total number of subarrays are n*(n+1)/2
// SC : O(1)

const sumOfOROFSubArraysBruteForce = (A) => {
  let sum = 0;
  let n = A.length;
  for (let i = 0; i < n; i++) {
    let or = 0;
    for (let j = i; j < n; j++) {
      or = or | A[j];
      console.log(or);
      sum += or;
    }
  }
  return sum;
};

// Explanation 1:

//  Value([1]) = 1
//  Value([1, 2]) = 3
//  Value([1, 2, 3]) = 3
//  Value([1, 2, 3, 4]) = 7
//  Value([1, 2, 3, 4, 5]) = 7
//  Value([2]) = 2
//  Value([2, 3]) = 3
//  Value([2, 3, 4]) = 7
//  Value([2, 3, 4, 5]) = 7
//  Value([3]) = 3
//  Value([3, 4]) = 7
//  Value([3, 4, 5]) = 7
//  Value([4]) = 4
//  Value([4, 5]) = 5
//  Value([5]) = 5
//  Sum of all these values = 71

// therefore  total number of subarrays created : 15
// total # of occurence of 1 = 5 ; left = 1 right = 5
// total # of occurence of 2 = 8 ; left = 2 right = 4
// total # of occurence of 3 = 9 ; left = 3 right = 3
// total # of occurence of 1 = 8 ; left = 4 right = 2
// total # of occurence of 1 = 5 ; left = 5 right = 1

//  for a given length of an array how many  number of subarrays can be created :
//  example [1,2,3,4]
//  subarrays starting with 1 = 4 (n)
//  subarrays starting with 2 = 3 (n-1)
//  subarrays starting with 3 = 2 (n-2)
//  subarrays starting with 4 = 1 (n-3)
//  therefore  total number of subarrays created : 10
// n + (n-1) + (n-2) + (n-3) = on reversing the order we will get an sequence as = 1 + 2 + 3 + ..... + n = 10
// = sum of n natural numbers = n(n+1)/2 = 4 * 5 / 2 = 10

// Explanation 2:

//  Sum of value of all subarray is 110.

// In this question, we will consider every bit as a unique bit, and every bit will have an independent contribution to the answer.
// Thus, we will iterate over the whole array for all bits independently. We will maintain a 2d array BitInfo[bits][index]. The value at any index ind for any bit will signify the next index on which this bit is set.
// Thus after that index, every subarray corresponding to ind will have that bit set.
// In this manner, the contribution of every bit corresponding to each bit can be determined independently and can be added to the overall answer.

// Another way to solve this problem is to iterate over each bit and count the number of subarrays in which it won't contribute.
// After calculating that, we can deduct this from the total count of subarrays(which is the same for each bit).
// To count the number of subarrays in which a bit won't have a contribution, consider the following example for a random bit:
// 0 1 1 0 0 0 0 1 1 0 0 1 (0 is for the places where the bit is unset, and 1 is for the places where this bit is set)
// If the starting till ending point of a subarray does not consist of even a single 1, the bit won't contribute to the bitwise OR.
// The number of subarrays that can be formed from an array of size x is x * (x + 1) / 2. So, we can iterate over this binary array
// that we had precomputed for each bit before and applied the formula to get the total number of subarrays where the selected bit does not contribute to bitwise OR.
// More details in the video are provided

// Optimised Approach :
// example : [1,2,3,4,]
// 1 : 001
// 2 : 010
// 3 : 011
// 4 : 100

// SUBARRAYS : total #  = 10 = (n*(n+1)/2)
// [1]       : 0 0 1
// [1,2]     : 0 1 1
// [1,2,3]   : 0 1 1
// [1,2,3,4] : 1 1 1
// [2]       : 0 1 0
// [2,3]     : 0 1 1
// [2,3,4]   : 1 1 1
// [3]       : 0 1 1
// [3,4]     : 1 1 1
// [4]       : 1 0 0

// lets go bit by bit:

// no of zeroes in 1st bit : 2                     ans = 0;
// no of ones in 1st bit : (10-2)                  ans = 8 * 2^0 = 8

// no of zeroes in 2nd bit : 2                     ans = 8;
// no of ones in 2nd bit : (10-2)                  ans = 8 + (8 * 2^1) = 24

// no of zeroes in 3rd bit : 6                     ans = 24;
// no of ones in 3rd bit : (10-6)                  ans = 24 + (4 * 2^2)

// no of zeroes in 4th bit : 10                    ans = 8+16+16 = 40
// no of ones in 4th bit : (10-10)                 ans = 40

// omce a set bit is encountred it doesnt matter whats the next or vale has for the smae bit => considering that the subarrya has the same starting element
const MOD = 1000000007;
const mult = (a, b) => {
  let val = a * b;
  if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER) {
    return val % MOD;
  }
  return (BigInt(a) * BigInt(b)) % BigInt(MOD);
};
const sumOfOROFSubArrays = (A) => {
  let ans = 0;
  let n = A.length;
  let totalNoOfSubarrays = (n * (n + 1)) / 2;
  for (let i = 0; i < 31; i++) {
    let continousUnsetValue = 0;
    let totalUnSetValues = 0;
    let totalSetValues = 0;
    for (let j = 0; j < n; j++) {
      // console.log(A[j]);
      if ((A[j] & (1 << i)) === 0) {
        continousUnsetValue++;
      } else if (continousUnsetValue > 0) {
        if (continousUnsetValue > 1) {
          totalUnSetValues +=
            (continousUnsetValue * (continousUnsetValue + 1)) / 2;
        } else {
          totalUnSetValues++;
        }

        continousUnsetValue = 0;
      }
    }
    if (continousUnsetValue > 0) {
      if (continousUnsetValue > 1) {
        totalUnSetValues +=
          (continousUnsetValue * (continousUnsetValue + 1)) / 2;
      } else {
        totalUnSetValues++;
      }
      continousUnsetValue = 0;
    }
    totalSetValues = totalNoOfSubarrays - totalUnSetValues;

    // ans += totalSetValues * Math.pow(2, i);
    ans = (ans + mult(totalSetValues, 1 << i)) % MOD;
  }
  return ans;
  // console.log(ans);
};

function totalSubarrays(n) {
  return (n * (n + 1)) / 2;
}
const solutionGivenInScaler = (A) => {
  let ans = 0;
  let n = A.length;
  for (let bit = 0; bit <= 27; bit++) {
    let zeroes = [];
    for (let i = 0; i <= n; i++) {
      if ((A[i] & (1 << i)) === 0) {
        if (i == 0 || (A[i - 1] & (1 << i)) !== 0) {
          zeroes.push(0);
        }
        zeroes[zeroes.length - 1]++;
      }
    }
    let count = totalSubarrays(n);
    let sub = 0;
    zeroes.forEach((x) => {
      sub += totalSubarrays(x);
    });
    count -= sub;
    ans = (ans + mult(count, 1 << bit)) % MOD;
  }
  return ans;
};

console.log(sumOfOROFSubArrays([1, 2, 3, 4, 5]));
console.log(sumOfOROFSubArrays([1, 2, 3, 4, 6]));
console.log(sumOfOROFSubArrays([1, 2, 3, 4]));
// // console.log(
sumOfOROFSubArrays([
  347148, 221001, 394957, 729925, 276769, 40726, 552988, 29952, 184491, 146773,
  418965, 307, 219145, 183037, 178111, 81123, 109199, 683929, 422034, 346291,
  11434, 7327, 340473, 316152, 364005, 359269, 170935, 105784, 224044, 22563,
  48561, 165781, 9329, 357681, 169473, 175031, 605611, 374501, 6607, 329965,
  76068, 836137, 103041, 486817, 195549, 107317, 34399, 56907, 37477, 189690,
  36796, 376663, 39721, 177563, 174179, 183646, 217729, 408031, 429122, 631665,
  282941, 526797, 262186, 306571, 63613, 57501, 70685, 226381, 1338, 9360,
  130360, 20300, 400906, 87823, 180349, 108813, 18181, 119185, 1, 102611, 63591,
  12889, 311185, 383896, 8701, 76077, 75481, 386017, 153553, 304913, 383455,
  105948, 142885, 1, 12610, 137005, 119185, 16948, 66171, 123683,
]); // 579094379

//398980269
