/**
 * ! Problem : Given two finite non-empty sets, find their Cartesian Product
 *
 * In mathematics, specifically set theroy, the crtesian product of two sets A and B, denoted by A*B. is th set of all
 * ordered pair (a,b) where a is from A and b is from B.
 *
 * * const A = [1,2]
 * * const B = [3,4]
 * ? A*B = [[1,3], [1,4], [2,3], [2,4]]
 *
 *
 * ? Solution attempt : Traverse each array and pair each element in the first array with each element in the seond array.
 *
 */

function cartesianProd(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const element2 = arr2[j];
      result.push([element1, element2]);
    }
  }
  return result;
}

console.log(cartesianProd([1, 2], [3, 4, 5, 6]));

// Big-O = O(mn)
