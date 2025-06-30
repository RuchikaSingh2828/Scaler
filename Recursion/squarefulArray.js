// return the number of squareful arrays that can be formed from the given array.
// Squareful : for every pair of adjacent elements thier sum should be a perfect square.

const isPerfectSquare = (num) => {
  let sqrt = Math.sqrt(num);
  return sqrt * sqrt === num;
};

const isSquarefulArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (!isPerfectSquare(arr[i] + arr[i + 1])) {
      return false;
    }
  }
  return true;
};

const squarefulArray = (A) => {
  let ans = [];
  let currArr = [];
  let indSet = new Set();

  // Sort the array to handle duplicates
  A.sort((a, b) => a - b);
  const calculatAllPermutaions = (A, ans, currArr, indSet) => {
    if (currArr.length === A.length) {
      ans.push([...currArr]);
      return;
    }

    for (let i = 0; i < A.length; i++) {
      // Skip duplicates
      if (indSet.has(i)) continue;
      if (i > 0 && A[i] === A[i - 1] && !indSet.has(i - 1)) continue;

      currArr.push(A[i]);
      indSet.add(i);
      calculatAllPermutaions(A, ans, currArr, indSet);
      currArr.pop();
      indSet.delete(i);
    }
  };

  calculatAllPermutaions(A, ans, currArr, indSet);

  let count = 0;
  for (let arr of ans) {
    if (isSquarefulArray(arr)) {
      count++;
    }
  }

  return count;
};
/*
Sample dry runs:

Example 4:
Input: [2, 2, 2, 2]
All permutations are [2,2,2,2], but since all elements are the same, only one unique permutation.
2+2=4 (perfect square), 2+2=4 (perfect square), 2+2=4 (perfect square)
So, output: 1

Example 5:
Input: [1, 8, 17, 8]
All permutations (showing only squareful ones):
[1,8,8,17]: 1+8=9 (perfect), 8+8=16 (perfect), 8+17=25 (perfect) => squareful
[1,8,17,8]: 1+8=9 (perfect), 8+17=25 (perfect), 17+8=25 (perfect) => squareful
[8,1,8,17]: 8+1=9 (perfect), 1+8=9 (perfect), 8+17=25 (perfect) => squareful
[8,1,17,8]: 8+1=9 (perfect), 1+17=18 (not perfect)
[8,8,1,17]: 8+8=16 (perfect), 8+1=9 (perfect), 1+17=18 (not perfect)
[8,8,17,1]: 8+8=16 (perfect), 8+17=25 (perfect), 17+1=18 (not perfect)
[8,17,1,8]: 8+17=25 (perfect), 17+1=18 (not perfect)
[8,17,8,1]: 8+17=25 (perfect), 17+8=25 (perfect), 8+1=9 (perfect) => squareful
[17,8,1,8]: 17+8=25 (perfect), 8+1=9 (perfect), 1+8=9 (perfect) => squareful
[17,8,8,1]: 17+8=25 (perfect), 8+8=16 (perfect), 8+1=9 (perfect) => squareful
So, output: 6

Example 6:
Input: [2, 2, 7, 7]
All permutations (showing only squareful ones):
[2,7,2,7]: 2+7=9 (perfect), 7+2=9 (perfect), 2+7=9 (perfect) => squareful
[7,2,7,2]: 7+2=9 (perfect), 2+7=9 (perfect), 7+2=9 (perfect) => squareful
[2,7,7,2]: 2+7=9 (perfect), 7+7=14 (not perfect)
[7,2,2,7]: 7+2=9 (perfect), 2+2=4 (perfect), 2+7=9 (perfect) => squareful
[2,2,7,7]: 2+2=4 (perfect), 2+7=9 (perfect), 7+7=14 (not perfect)
[7,7,2,2]: 7+7=14 (not perfect)
So, output: 3

Example 7:
Input: [4, 5, 11, 20]
All permutations (showing only squareful ones):
[4,5,11,20]: 4+5=9 (perfect), 5+11=16 (perfect), 11+20=31 (not perfect)
[4,5,20,11]: 4+5=9 (perfect), 5+20=25 (perfect), 20+11=31 (not perfect)
[4,11,5,20]: 4+11=15 (not perfect)
[4,11,20,5]: 4+11=15 (not perfect)
[4,20,5,11]: 4+20=24 (not perfect)
[4,20,11,5]: 4+20=24 (not perfect)
[5,4,11,20]: 5+4=9 (perfect), 4+11=15 (not perfect)
[5,4,20,11]: 5+4=9 (perfect), 4+20=24 (not perfect)
[5,11,4,20]: 5+11=16 (perfect), 11+4=15 (not perfect)
[5,11,20,4]: 5+11=16 (perfect), 11+20=31 (not perfect)
[5,20,4,11]: 5+20=25 (perfect), 20+4=24 (not perfect)
[5,20,11,4]: 5+20=25 (perfect), 20+11=31 (not perfect)
[11,4,5,20]: 11+4=15 (not perfect)
[11,4,20,5]: 11+4=15 (not perfect)
[11,5,4,20]: 11+5=16 (perfect), 5+4=9 (perfect), 4+20=24 (not perfect)
[11,5,20,4]: 11+5=16 (perfect), 5+20=25 (perfect), 20+4=24 (not perfect)
[11,20,4,5]: 11+20=31 (not perfect)
[11,20,5,4]: 11+20=31 (not perfect)
[20,4,5,11]: 20+4=24 (not perfect)
[20,4,11,5]: 20+4=24 (not perfect)
[20,5,4,11]: 20+5=25 (perfect), 5+4=9 (perfect), 4+11=15 (not perfect)
[20,5,11,4]: 20+5=25 (perfect), 5+11=16 (perfect), 11+4=15 (not perfect)
[20,11,4,5]: 20+11=31 (not perfect)
[20,11,5,4]: 20+11=31 (not perfect)
So, output: 0

Example 8:
Input: [9, 7, 2, 7]
All permutations (showing only squareful ones):
[2,7,9,7]: 2+7=9 (perfect), 7+9=16 (perfect), 9+7=16 (perfect) => squareful
[7,2,7,9]: 7+2=9 (perfect), 2+7=9 (perfect), 7+9=16 (perfect) => squareful
[7,9,7,2]: 7+9=16 (perfect), 9+7=16 (perfect), 7+2=9 (perfect) => squareful
[7,2,9,7]: 7+2=9 (perfect), 2+9=11 (not perfect)
[2,7,7,9]: 2+7=9 (perfect), 7+7=14 (not perfect)
[7,7,2,9]: 7+7=14 (not perfect)
[9,7,2,7]: 9+7=16 (perfect), 7+2=9 (perfect), 2+7=9 (perfect) => squareful
[9,7,7,2]: 9+7=16 (perfect), 7+7=14 (not perfect)
So, output: 4
*/

console.log(squarefulArray([1, 17, 8])); // Output: 2
console.log(squarefulArray([2, 2, 2])); // Output: 1
console.log(squarefulArray([8, 8, 8])); // Output: 1
console.log(squarefulArray([1, 3, 6])); // Output: 2
