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

// Time Complaxity explanation :
// When we run the Sieve of Eratosthenes, for each prime p, we mark all its multiples as composite (not prime). Specifically:

// For prime 2: we mark 4, 6, 8, 10, 12, ...
// For prime 3: we mark 9, 12, 15, 18, 21, ... (starting from 3²)
// For prime 5: we mark 25, 30, 35, 40, 45, ...
// And so on...

// The Mathematical Analysis
// For each prime p ≤ √n, we mark approximately n/p numbers as composite. So our total operations are:
// Total operations = Σ(n/p) for all primes p ≤ √n
//                  = n × Σ(1/p) for all primes p ≤ √n
// The magic happens with that sum Σ(1/p). This is where number theory comes to the rescue!
// The Key Mathematical Result
// There's a famous theorem in number theory (related to Mertens' theorem) that states:
// The sum of reciprocals of primes up to m is approximately log log m
// In mathematical notation:
// Σ(1/p) for primes p ≤ m ≈ log log m + constant
// This is a deep result that connects to the distribution of prime numbers and the Prime Number Theorem.
// Putting It All Together
// Substituting back into our complexity analysis:
// Total operations ≈ n × (log log √n + constant)
//                  ≈ n × (½ log log n + constant)
//                  = O(n log log n)
