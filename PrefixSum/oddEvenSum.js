/**
 * Finds the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
 * @param {number[]} arr - An integer array of size N
 * @returns {number} - The count of such indices.
 */
const findEqualSumIndices = (arr) => {
  let evenSum = 0,
    oddSum = 0,
    count = 0;

  // Calculate initial sums of even and odd indexed elements
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) evenSum += arr[i];
    else oddSum += arr[i];
  }

  let evenRunningSum = 0,
    oddRunningSum = 0;

  // Traverse array
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) evenSum -= arr[i];
    else oddSum -= arr[i];

    // If sum of even and odd indexed elements are same after removing current element
    if (evenRunningSum + oddSum === oddRunningSum + evenSum) count++;

    if (i % 2 === 0) evenRunningSum += arr[i];
    else oddRunningSum += arr[i];
  }

  return count;
};

console.log(findEqualSumIndices([2, 2, 2, 2, 2])); // Example usage

// Solution explanation :

// This code first calculates the total sum of elements at even and odd indices.
// Then it traverses the array, at each step recalculating the sums as if the current element was removed. If the sums are equal, it increments a counter.
//  The function finally returns the count of such indices.

// TA help
// So as you know that the elements in the right hand side of the removed elements will change their nature
// by even indexed elements becoming odd and vice versa.

// What we can do is build 4 arrays, 1 prefixEven 1 prefixOdd 1 suffixOdd 1 suffixEven.

// Prefixeven will contain sum of all elements that have even index till ith index.

// So when we remove the ith element the sum of even indexed number = prefixEven[i-1] + suffixOdd[i+1].

// For odd it will be prefixOdd[i-1] + suffixEven[i+1].

// Now if they are equal cnt++;

// Now 1 change that you can do in this solution is get rid of those two prefix arrays and instead have two
// variables storing the sum and updating them on the go.
