/**
 * ! Insertion Sort Idea
 * Virtually split the array into a sorted and an unsorted part
 *
 * Assume that the first element is already sorted and remaining elements are unsorted.
 *
 * Select an unsorted element and Compare with all the elements in the sorted part
 *
 * if the elememts in the sorted part is smaller than the selected element,
 * proceed to the next element in the insorted part.
 *
 * Else Shift larger elements in the sorted part towards right.
 *
 * Insert the selected element at the right index.
 *
 * Repeat till all the unsorted element are placed in the right order
 *
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // this loop to navigater thrugh unsorted part of the array
    let numberToInsert = arr[i];
    let j = i - 1; // since we know the  sorted part always lies left to the unsorted part
    // we need to iterate throught the sorted part of the array.. for that we will use whileloop
    while (j >= 0 && arr[j] > numberToInsert) {
      // to make sure we iterate till the frst element WE also need to checkk if the selected element is greater than the number to insert
      arr[j + 1] = arr[j];
      // we will decrement j in each iteration
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);

console.log(insertionSort(arr)); //

// bigO = O(n^2)
