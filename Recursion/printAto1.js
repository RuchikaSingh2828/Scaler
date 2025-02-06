// Q2. Print A to 1 function

// Problem Description

// You are given an integer A, print A to 1 using using recursion.

// Note :- After printing all the numbers from A to 1, print a new line.

// Problem Constraints

// 1 <= A <= 104

// Input Format

// First argument A is an integer.

// Output Format

// Print A space-separated integers A to 1.
// Note: There should be exactly one space after each integer. Print a new line after printing the A integers

// Example Input

// Input 1:

// 10
// Input 2:

// 5

// Example Output

// Output 1:

// 10 9 8 7 6 5 4 3 2 1
// Output 2:

// 5 4 3 2 1

const print = (n, arr) => {
  if (n === 0) return;
  arr.push(n);
  print(n - 1, arr);
  return arr.join(' ');
};

console.log(print(9, []));
