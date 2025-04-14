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

const sieveEratothenese = (A) => {
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

console.log(sieveEratothenese(14)); // [3,11] // [7,7]
