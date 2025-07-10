// Given an even number A ( greater than 2 ), return two prime numbers whose sum will be equal to the given number.

// If there is more than one solution possible, return the lexicographically smaller solution.

// If [a, b] is one solution with a <= b, and [c,d] is another solution with c <= d, then
// [a, b] < [c, d], If a < c OR a==c AND b < d.
// NOTE: A solution will always exist. Read Goldbach's conjecture.

// Problem Constraints

// 4 <= A <= 2*107

// Input Format

// First and only argument of input is an even number A.

// Output Format

// Return a integer array of size 2 containing primes whose sum will be equal to given number.

// Example Input

//  4

// Example Output

//  [2, 2]

// Example Explanation

//  There is only 1 solution for A = 4.

// - Generate all prime numbers up to the given number A using the Sieve of Eratosthenes
// - For each prime p from 2 to A/2, check if (A-p) is also prime
// - Return the first such pair, which will be lexicographically smallest

const golbachConjecture = (A) => {
  let ans = [];
  const sieve_arr = new Array(A + 1);
  // marking all the indexes true to show initially all numbers are prime
  for (let i = 2; i <= A; i++) {
    sieve_arr[i] = true;
  }
  // setting non prime indexes false
  for (let i = 2; i * i <= A; i++) {
    if (sieve_arr[i]) {
      for (let j = i * i; j <= A; j = j + i) {
        sieve_arr[j] = false;
      }
    }
  }

  // for all the prime numbers p till  A/2 checking if a-p is also prime

  for (let i = 2; i <= Math.floor(A / 2); i++) {
    if (sieve_arr[i]) {
      const j = A - i;
      if (sieve_arr[j]) {
        ans.push(...[i, j]);
        return ans;
      }
    }
  }
};

console.log(golbachConjecture(14)); // [3,11] // [7,7]

// Looking at this problem, we need to understand what's being asked and then build a solution step by step. This is a classic application of Goldbach's conjecture, which states that every even integer greater than 2 can be expressed as the sum of two primes.
// Let me break down the approach we'll take:
// Understanding the Problem:
// We need to find two prime numbers that add up to our given even number A. If multiple solutions exist, we want the lexicographically smallest one. This means we want the pair where the first prime is as small as possible, and if there are ties, the second prime should also be as small as possible.
// The Strategy:
// The key insight is that if we check primes in ascending order starting from 2, the first valid pair we find will automatically be the lexicographically smallest. This is because we're testing the smallest possible first prime, and for each first prime, there's only one possible second prime (A minus the first prime).
// Implementation Approach:

// Generate all prime numbers up to A using the Sieve of Eratosthenes (this is efficient for the given constraints)
// For each prime p starting from 2, check if (A - p) is also prime
// Return the first valid pair we find

// Let me implement this solution with detailed explanations:

// print(f"A = 20: {result}")  # Expected: [3, 17]

// Why This Is So Efficient
// The beautiful thing about this complexity is that log log n grows incredibly slowly. Let me show you:

// For n = 1,000: log log n ≈ 2.6
// For n = 1,000,000: log log n ≈ 3.9
// For n = 1,000,000,000: log log n ≈ 5.2

// Even for astronomically large numbers, log log n barely increases! This makes the Sieve of Eratosthenes remarkably efficient.
