// Problem Description
// Given a number A, find if it is COLORFUL number or not.

// If number A is a COLORFUL number return 1 else, return 0.

// What is a COLORFUL Number:

// A number can be broken into different consecutive sequence of digits.
// The number 3245 can be broken into sequences like 3, 2, 4, 5, 32, 24, 45, 324, 245 and 3245.
// This number is a COLORFUL number, since the product of every consecutive sequence of digits is different

// Problem Constraints
// 1 <= A <= 2 * 109

// Input Format
// The first and only argument is an integer A.

// Output Format
// Return 1 if integer A is COLORFUL else return 0.

// Example Input
// Input 1:

//  A = 23
// Input 2:

//  A = 236

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Note that the input number can be of length at max 10.

// So, the number of substrings can be at max 55. 10(10-1)/2 => 90/2 => 55

// It is one of the easiest problems in this section.
// You just need to simulate what has been stated in the problem.

// Iterate over all the consecutive sequence of digits of the number and store the product in a set using hashing.
// If the product is already present in the set at any point then the number is not Colorful.
// Otherwise, it is a Colorful number.

// Example:

// A = 123
// 1 2 3 12 23 123
// 1 -> 1
// 2 -> 2
// 3 -> 3
// 12 -> 2  we have already encountered 2 before. Return 0

// Time Complexity : O((log10A)2)
// Space Complexity : O((log10A)2)

// const colorfulNos = (A) => {
//   const arrA = A.toString().split('');
//   const subElements = [];
//   for (let i = 0; i < arrA.length; i++) {
//     let current = '';
//     for (let j = i; j < arrA.length; j++) {
//       current = `${current}${arrA[j]}`;
//       subElements.push(current);
//     }
//   }
//   let hashMap = new Set();
//   for (let i = 0; i < subElements.length; i++) {
//     const digits = subElements[i].split('');
//     let product = 1;

//     for (let j = 0; j < digits.length; j++) {
//       product = product * +digits[j];
//     }
//     if (hashMap.has(product)) return 0;
//     else {
//       hashMap.add(product);
//     }
//   }
//   return 1;
// };

const colorfulNos = (A) => {
  const arrA = A.toString().split('');
  let set = new Set();
  for (let i = 0; i < arrA.length; i++) {
    let prod = 1;
    for (let j = i; j < arrA.length; j++) {
      prod = prod * +arrA[j];
      if (set.has(prod)) return 0;
      set.add(prod);
    }
  }
  return 1;
};
// console.log(colorfulNos(123));
console.log(colorfulNos(23));
