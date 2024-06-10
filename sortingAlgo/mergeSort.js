/**
 * ! MERGE SORT IDEA
 *  - Diveide the array into sub Arrays, each containing only one element (Ann array woth one lelent is considered sorted)
 *
 *  - Repeatedly merge the sub array to produce new sorted sub arrays until there is only one sub array remaining.
 * that will be a sorted array.
 */

function mergeSort(arr) {
  // this func takes care of splitting logic
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else sortedArr.push(right.shift());
  }
  return [...sortedArr, ...left, ...right];
}

//  shift() method removes the element from the corresponding array
const arr = [-2, -8, 5, -6, 13, 10, -10];
console.log(mergeSort(arr));
