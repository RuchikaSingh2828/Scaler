/**
 * ! QUICK SORT IDEAS
 * IDENTIFY THE PIVIT ELEMENT IN THE ARRAY
 * - Pick first element as pivot
 * - Pick las elementas pivot
 * - pick random ele as pivot
 * - pick median as pivot
 *
 * * Put everything thats smaller than the pivot into left array and everything greater than the pivot into right array
 *
 * * Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition.
 *
 */

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) leftArr.push(arr[i]);
    else rightArr.push(arr[i]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [-2, -8, 5, -6, 13, 10, -10];
console.log(quickSort(arr));

// * worst case complexity Object(n^2) ==>  happens when array is already sorted
// * Avg case complexity is O(nlogn) ==> recursively devide the arr into two = logn ; also have a for loop thus  n
