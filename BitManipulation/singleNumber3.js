// Problem Description

// Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
// Find the two integers that appear only once.

// Note: Return the two numbers in ascending order.

// Problem Constraints

// 2 <= |A| <= 100000
// 1 <= A[i] <= 109

// Input Format

// The first argument is an array of integers of size N.

// Output Format

// Return an array of two integers that appear only once.

// Example Input

// Input 1:
// A = [1, 2, 3, 1, 2, 4]
// Input 2:

// A = [1, 2]

// Example Output

// Output 1:
// [3, 4]
// Output 2:

// [1, 2]

const getOnesCompliment = (val) => {
  return ~val;
};
const getTwosCompliment = (val) => {
  const onesCompliment = getOnesCompliment(val);
  return onesCompliment + 1;
};

const getRightMostSetBitMask = (val) => {
  const prodTwosCompliment = getTwosCompliment(val);
  return val & prodTwosCompliment;
};

const getSingleElement = (A) => {
  let product = 0;
  for (const element of A) {
    product = product ^ element; // product of two unique numbers;
    console.log(
      `Element: ${element}, Current Product: ${product}, Type: ${typeof element}`
    );
  }
  // in this product the one we will get if wee get will mean
  // that there was minimum one bit differnce
  // also its given in the question that these single occuring elements are unique elements
  // therefore there will e  minimum of one bit difference
  const rsb = getRightMostSetBitMask(product);
  let x = 0; // with rsb same as rsb
  let y = 0; // with rsb as 0
  for (const element of A) {
    if ((element & rsb) !== 0) {
      x ^= element;
    } else {
      y ^= element;
    }
  }

  return [x, y];
};
// const A = [1, 2, 1, 3, 2, 5]; // [3,5];
const A = [
  2308, 1447, 1918, 1391, 2308, 216, 1391, 410, 1021, 537, 1825, 1021, 1729,
  669, 216, 1825, 537, 1995, 805, 410, 805, 602, 1918, 1447, 90, 1995, 90, 1540,
  1161, 1540, 2160, 1235, 1161, 602, 880, 2160, 1235, 669,
]; //
console.log(getSingleElement(A));
// console.log(getSingleElement([1, 2, 3, 1, 2, 4]));
// console.log(getSingleElement([1, 2]));
// console.log(getSingleElement([186, 256, 102, 377, 186, 377])); //[102,256]
// console.log(getSingleElement([1, 2, 1, 2, 3, 3, 4, 5, 4]));
// 102=  1100110(binary)
// 256=100000000(binary)
// 102^256=614
