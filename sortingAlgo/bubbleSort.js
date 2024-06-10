/**
 * ! Given set of integers sort the array.
 * " it a poort sorting algorithim ans is used for just as an introduction to algorithms"
 *
 * * Compare adjacent elements in an array and swap the positions if they are not in the intended order.
 * * Repeat the instructions as you step through each element in the array
 *
 * After each one loop we need to check if the that loop was there any swap.. if yes we need to again check the array.
 * if no swap was done then the array was sorted.
 */

// function bubbleSort(arr) {
//   let swap = true;
//   while (swap === true) {
//     let j = arr.length;
//     let noOfSwaps = 0;
//     for (i = 0; i < j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let ele = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = ele;
//         noOfSwaps++;
//       }
//     }
//     if (noOfSwaps === 0) break;
//   }
//   return arr;
// }

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let ele = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = ele;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
  s;
}

console.log(bubbleSort([8, 20, -2, 4, -6]));

// for loop nested within do while loop thus
// * Big-O - O(n^2)
