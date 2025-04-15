// Problem Description

// Given a column title as appears in an Excel sheet, return its corresponding column number.

// Problem Constraints

// 1 <= length of the column title <= 5

// Input Format

// The only argument is a string that represents the column title in the excel sheet.

// Output Format

// Return a single integer that represents the corresponding column number.

// Example Input

// Input 1:

//  AB
// Input 2:

//  BB

// Example Output

// Output 1:

//  28
// Output 2:

//  54

const excelColumnNumbers = (A) => {
  let str_arr = A.split('').reverse();
  let map = new Map();
  let result = 0;

  // Setting the Map for uppercase letters A-Z 65-90
  for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(65 + i), i + 1);
    //console.log(`${i}: ${String.fromCharCode(i)}`);
  }

  for (let i = 0; i < str_arr.length; i++) {
    const char = str_arr[i];

    result = result + map.get(char) * Math.pow(26, i);
  }

  return result;
};

console.log(excelColumnNumbers('AA')); //27
// console.log(excelColumnNumbers('A')); //1
// console.log(excelColumnNumbers('AB')); // 28
// console.log(excelColumnNumbers('BB')); // 54s

// Case 1: AAA

// A (1 × 26²) + A (1 × 26¹) + A (1 × 26⁰)
// 1 × 676 + 1 × 26 + 1 × 1 = 676 + 26 + 1 = 703

// Case 2: ZZ

// Z (26 × 26¹) + Z (26 × 26⁰)
// 26 × 26 + 26 × 1 = 676 + 26 = 702

// Case 3: ABC

// A (1 × 26²) + B (2 × 26¹) + C (3 × 26⁰)
// 1 × 676 + 2 × 26 + 3 × 1 = 676 + 52 + 3 = 731

// Case 4: AAAA

// A (1 × 26³) + A (1 × 26²) + A (1 × 26¹) + A (1 × 26⁰)
// 1 × 17576 + 1 × 676 + 1 × 26 + 1 × 1 = 17576 + 676 + 26 + 1 = 18279

// Case 5: ZZZZ

// Z (26 × 26³) + Z (26 × 26²) + Z (26 × 26¹) + Z (26 × 26⁰)
// 26 × 17576 + 26 × 676 + 26 × 26 + 26 × 1 = 456976 + 17576 + 676 + 26 = 475254

// Case 6: CRXYZ

// C (3 × 26⁴) + R (18 × 26³) + X (24 × 26²) + Y (25 × 26¹) + Z (26 × 26⁰)
// 3 × 456976 + 18 × 17576 + 24 × 676 + 25 × 26 + 26 × 1
// 1370928 + 316368 + 16224 + 650 + 26 = 1704196

// The pattern is similar to converting from base 26, but with a twist: instead of 0-25, we use 1-26 for A-Z. So each position represents:

// Units position: value × 1
// Tens position: value × 26
// Hundreds position: value × 26²
// And so on...

// These larger examples should help you verify your algorithm works correctly across different input sizes.RetryClaude can make mistakes. Please double-check responses. 3.7 Sonnet
