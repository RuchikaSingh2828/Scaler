// Problem Description

// Given a positive integer A, return its corresponding column title as it appears in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB

// Problem Constraints

// 1 <= A <= 109

// Input Format

// First and only argument of input contains single integer A

// Output Format

// Return a string denoting the corresponding title.

// Example Input

// Input 1:

// A = 3
// Input 2:

// A = 27

// Example Output

// Output 1:

// "C"
// Output 2:

// "AA"

// Example Explanation

// Explanation 1:

// 3 corrseponds to C.
// Explanation 2:

//     1 -> A,
//     2 -> B,
//     3 -> C,
//     ...
//     26 -> Z,
//     27 -> AA,
//     28 -> AB

const creteNumToCharObject = () => {
  const numToCharObj = {};
  for (let i = 0; i < 26; i++) {
    numToCharObj[i] = String.fromCharCode(65 + i);
  }
  // console.log(numToCharObj);
  return numToCharObj;
};

const excelColumnTitle = (A) => {
  const numToCharMap = creteNumToCharObject();
  let value = A;
  let ans = '';
  while (value > 0) {
    // console.log(`remainder : ${(value - 1) % 26}`);
    ans = `${numToCharMap[(value - 1) % 26]}${ans}`;
    value = Math.floor((value - 1) / 26);
    // console.log('value : ' + value);
  }
  return ans;
};

console.log(excelColumnTitle(3)); //C
console.log(excelColumnTitle(27)); //AA
console.log(excelColumnTitle(28)); //AB
console.log(excelColumnTitle(54)); //BB
console.log(excelColumnTitle(50)); //AX
console.log(excelColumnTitle(99)); //CU
console.log(excelColumnTitle(943566)); // BAQTZ
