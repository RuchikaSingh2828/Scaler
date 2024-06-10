// Problem Description
// Given two binary strings A and B. Return their sum (also a binary string).

// Problem Constraints
// 1 <= length of A <= 105

// 1 <= length of B <= 105

// A and B are binary strings

// Input Format
// The two argument A and B are binary strings.

// Output Format
// Return a binary string denoting the sum of A and B

// Example Input
// Input 1:
// A = "100"
// B = "11"
// Input 2:
// A = "110"
// B = "10"

// Example Output
// Output 1:
// "111"
// Output 2:
// "1000"

// Example Explanation
// For Input 1:
// The sum of 100 and 11 is 111.
// For Input 2:

// The sum of 110 and 10 is 1000.
const binarySum = (A, B) => {
  if (A.length > B.length) {
    B = B.padStart(A.length, '0');
  } else {
    A = A.padStart(B.length, '0');
  }
  let carry = 0;
  const result = new Array();
  const arrA = A.split('').reverse();
  const arrB = B.split('').reverse();
  for (let i = 0; i < A.length; i++) {
    let currentsum = +arrA[i] + +arrB[i] + carry;
    if (currentsum === 0) {
      result.push(0);
      carry = 0;
    }
    if (currentsum === 1) {
      result.push(1);
      carry = 0;
    }
    if (currentsum === 2) {
      result.push(0);
      carry = 1;
    }
    if (currentsum === 3) {
      result.push(1);
      carry = 1;
    }
  }
  if (carry === 1) result.push(carry);

  return result.reverse().join('');
};

// console.log(binarySum('100', '11')); //111
console.log(binarySum('10', '110')); //1000
console.log(binarySum('1001011', '11001001')); //100010100
