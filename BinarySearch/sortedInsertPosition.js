// Problem Description

// You are given a sorted array A of size N and a target value B.
// Your task is to find the index (0-based indexing) of the target value in the array.

// If the target value is present, return its index.
// If the target value is not found, return the index of least element greater than equal to B.
// If the target value is not found and least number greater than equal to target is also not present, return the length of array (i.e. the position where target can be placed)
// Your solution should have a time complexity of O(log(N)).

// Problem Constraints

// 1 <= N <= 105
// 1 <= A[i] <= 105
// 1 <= B <= 105

// Input Format

// The first argument is an integer array A of size N.
// The second argument is an integer B.

// Output Format
// https://www.scaler.com/academy/mentee-dashboard/class/153317/assignment/problems/204?navref=cl_tt_lst_sl
// Return an integer denoting the index of target value.

// Example Input

// Input 1:

// A = [1, 3, 5, 6]
// B = 5
// Input 2:

// A = [1, 4, 9]
// B = 3

// Example Output

// Output 1:

// 2
// Output 2:

// 1

// Example Explanation

// Explanation 1:

// The target value is present at index 2.
// Explanation 2:

// The target value should be inserted at index 1.

function sortedTargetPosition(A, B) {
  let l = 0;
  let r = A.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (A[mid] === B) {
      return mid;
    }
    if (A[mid] > B) {
      r = mid - 1;
    } else if (A[mid] < B) {
      l = mid + 1;
    }
  }
  if (l <= A.length - 1) return l;
  else return A.length;
}

// const A = [1, 3, 5, 6];
// const B = 7;
// output 4

const A = [
  3, 4, 18, 19, 20, 27, 28, 31, 36, 42, 44, 71, 72, 75, 82, 86, 88, 97, 100,
  103, 105, 107, 110, 116, 118, 119, 121, 122, 140, 141, 142, 155, 157, 166,
  176, 184, 190, 199, 201, 210, 212, 220, 225, 234, 235, 236, 238, 244, 259,
  265, 266, 280, 283, 285, 293, 299, 309, 312, 317, 335, 341, 352, 354, 360,
  365, 368, 370, 379, 386, 391, 400, 405, 410, 414, 416, 428, 433, 437, 438,
  445, 453, 457, 458, 472, 476, 480, 485, 489, 491, 493, 501, 502, 505, 510,
  511, 520, 526, 535, 557, 574, 593, 595, 604, 605, 612, 629, 632, 633, 634,
  642, 647, 653, 654, 656, 658, 686, 689, 690, 691, 709, 716, 717, 737, 738,
  746, 759, 765, 775, 778, 783, 786, 787, 791, 797, 801, 806, 815, 820, 822,
  823, 832, 839, 841, 847, 859, 873, 877, 880, 886, 904, 909, 911, 917, 919,
  937, 946, 948, 951, 961, 971, 979, 980, 986, 993,
];
const B = 902;
// output 149

console.log(sortedTargetPosition(A, B));
