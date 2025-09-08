// Problem Description

// You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. If 2 elements have same number of factors, then number with less value should come first.

// Note: You cannot use any extra space

// Problem Constraints

// 1 <= N <= 104
// 1 <= A[i] <= 104

// Input Format

// First argument A is an array of integers.

// Output Format

// Return an array of integers.

// Example Input

// Input 1:
// A = [6, 8, 9]
// Input 2:
// A = [2, 4, 7]

// Example Output

// Output 1:
// [9, 6, 8]
// Output 2:
// [2, 7, 4]

// Example Explanation

// For Input 1:
// The number 9 has 3 factors, 6 has 4 factors and 8 has 4 factors.
// For Input 2:
// The number 2 has 2 factors, 7 has 2 factors and 4 has 3 factors.

const countFactors = (num) => {
  let count = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      count++;
      if (i !== num / i) {
        count++;
      }
    }
  }
  return count;
};

function factorSort(A) {
  A.sort((a, b) => {
    const countA = countFactors(a);
    const countB = countFactors(b);
    if (countA > countB) {
      return 1;
    } else if (countA < countB) {
      return -1;
    } else {
      return a - b;
    }
  });
  return A;
}

console.log(factorSort([6, 8, 9])); // [9, 6, 8]
console.log(factorSort([2, 4, 7])); // [2, 7, 4]
console.log(factorSort([16, 9, 6, 8, 2, 7])); // [2, 7, 9, 6, 8, 16]
console.log(factorSort([36, 13, 13, 26, 37, 28, 27, 43, 7])); // 7 13 13 37 43 26 27 28 36

// console.log(countFactors(16)); // 5
// console.log(countFactors(9)); // 3
// console.log(countFactors(6)); // 4
// console.log(countFactors(8)); // 4
// console.log(countFactors(2)); // 2
// console.log(countFactors(7)); // 2
