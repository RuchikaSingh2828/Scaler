// Problem Description

// Given an integer A. Find the list of all prime numbers in the range [1, A].

// Problem Constraints

// 1 <= A <= 106

// Input Format

// Only argument A is an integer.

// Output Format

// Return a sorted array of prime number in the range [1, A].

// Example Input

// Input 1:
// A = 7
// Input 2:
// A = 12

// Example Output

// Output 1:
// [2, 3, 5, 7]
// Output 2:
// [2, 3, 5, 7, 11]

// Example Explanation

// For Input 1:
// The prime numbers from 1 to 7 are 2, 3, 5 and 7.
// For Input 2:
// The prime numbers from 1 to 12 are 2, 3, 5, 7 and 11.

const sieve = (A) => {
  let primeArr = new Array(A + 1);
  let result = [];

  // setting all the values to be true considering all elements to be prime number

  for (let i = 2; i <= A; i++) {
    primeArr[i] = true;
  }

  for (let i = 2; i * i <= A; i++) {
    if (primeArr[i]) {
      // this means the current element is a prime number
      for (let j = i * i; j <= A; j = j + i) {
        primeArr[j] = false;
      }
    }
  }

  for (let i = 2; i <= A; i++) {
    if (primeArr[i]) {
      result.push(i);
    }
  }

  return result;
};

console.log(sieve(7));
console.log(sieve(12));
