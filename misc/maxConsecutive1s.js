// Given arr[] of 1s and 0s. You are allowed to replace only one 0 with 1.
// Find Max number of consecutive 1's that can be obtained after
// making the replacement

// 01110110110
// function maxConsecutive1s(A) {
//   let arr = A.split('');
//   let maxSum = 0;
//   if (arr[0] === 0) {
//     maxSum = 1;
//   }
//   let pfS = 0;
//   let currentS = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (+arr[i] === 0) {
//       currentS = pfS + 1;
//     } else {
//       currentS += 1;
//     }
//     if (+arr[i] === 1) pfS += 1;
//     else pfS = 0;
//     maxSum = Math.max(maxSum, currentS);
//   }
//   return maxSum;
// }

// console.log(maxConsecutive1s('01110110110')); // 6

function findMaxConsecutiveOnes(arr) {
  let maxLength = 0; // Maximum length of consecutive 1's
  let left = 0; // Left pointer of the window
  let zeroCount = 0; // Count of zeros inside the window

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      zeroCount++;
    }

    // Shrink the window if there is more than one zero inside it
    while (zeroCount > 1) {
      if (arr[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // Update the maximum length
    console.log(left);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage:
const arr = [1, 0, 1, 1, 0, 1, 1, 1];
const result = findMaxConsecutiveOnes(arr);
console.log(result);
