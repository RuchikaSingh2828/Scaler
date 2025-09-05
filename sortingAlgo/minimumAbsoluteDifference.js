// Problem Description

// Given an array of integers A, find and return the minimum value of | A [ i ] - A [ j ] | where i != j and |x| denotes the absolute value of x.

// Problem Constraints

// 2 <= length of the array <= 100000

// -109 <= A[i] <= 109

// Input Format

// The only argument given is the integer array A.

// Output Format

// Return the minimum value of | A[i] - A[j] |.

// Example Input

// Input 1:

//  A = [1, 2, 3, 4, 5]
// Input 2:

//  A = [5, 17, 100, 11]

// Example Output

// Output 1:

//  1
// Output 2:

//  6

const finfMinDiff = function (A) {
  const merge = (A, low, mid, high) => {
    let mergedArr = [];

    let i = low;
    let j = mid + 1;

    while (i <= mid && j <= high) {
      if (A[i] < A[j]) {
        mergedArr.push(A[i]);
        i++;
      } else {
        mergedArr.push(A[j]);
        j++;
      }
    }

    while (i <= mid) {
      mergedArr.push(A[i]);
      i++;
    }
    while (j <= high) {
      mergedArr.push(A[j]);
      j++;
    }

    for (let i = 0; i < mergedArr.length; i++) {
      A[low + i] = mergedArr[i];
    }
  };

  const mergeSort = (A, lo, hi) => {
    if (lo >= hi) return;
    const mid = Math.floor((lo + hi) / 2);

    mergeSort(A, lo, mid);
    mergeSort(A, mid + 1, hi);
    merge(A, lo, mid, hi);

    return A;
  };

  let sortedArr = mergeSort(A, 0, A.length - 1);
  let leastDifference = sortedArr[1] - sortedArr[0];
  for (let i = A.length - 1; i > 0; i--) {
    leastDifference = Math.min(
      leastDifference,
      sortedArr[i] - sortedArr[i - 1]
    );
  }

  return leastDifference;
};

console.log(finfMinDiff([1, 2, 3, 4, 5])); // Output: 1
console.log(finfMinDiff([5, 17, 100, 11])); // Output: 6
