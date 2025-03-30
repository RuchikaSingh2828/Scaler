// Q4. Very Large Power
// Unsolved
// feature icon
// Using hints except Complete Solution is Penalty free now
// Use Hint
// Problem Description

// Given two Integers A, B. You have to calculate (A ^ (B!)) % (1e9 + 7).

// "^" means power,
// "%" means mod, and
// "!" means factorial.

// Note: Ensure to handle integer overflow when performing the calculations.

// Problem Constraints

// 1 <= A, B <= 5e5

// Input Format

// First argument is the integer A

// Second argument is the integer B

// Output Format

// Return one integer, the answer to the problem

// Example Input

// Input 1:

// A = 1
// B = 1
// Input 2:

// A = 2
// B = 2

// Example Output

// Output 1:

// 1
// Output 2:

// 4

// Example Explanation

// Explanation 1:

//  1! = 1. Hence 1^1 = 1.
// Explanation 2:

//  2! = 2. Hence 2^2 = 4.

// You can calculate A ^ B by using the divide and conquer technique or by recursion.
// It requires knowledge of some advanced mathematics concepts to find (A ^ (B!)) % P.

// Have you noticed that (1e9 + 7) is prime?

// This problem is very simple if you know Fermat’s Little Theorem.

// The basic approach to solve this problem is to find factorial of B by taking mod with (P-1), where P is a prime. In this problem, 10007 is also a prime.

// After calculating the factorial of B, you can calculate A ^ B! by simply taking mod with P.

const findValue = (A, B) => {
  const mod = 1000000007;
  const bigMod = BigInt(mod);

  const binaryExpo = (a, factorial) => {
    let ans = BigInt(1);
    let bigFactorial = BigInt(factorial); // Convert factorial to BigInt
    let bigA = BigInt(a); // Ensure a is BigInt
    // Convert mod to BigInt
    while (bigFactorial > BigInt(0)) {
      if (bigFactorial & BigInt(1)) {
        ans = (ans * bigA) % bigMod;
      }
      bigA = (bigA * bigA) % bigMod;
      bigFactorial = bigFactorial >> BigInt(1);
    }
    return Number(ans);
  };

  let fact = 1;
  for (let i = 2; i <= B; i++) {
    fact = (fact * i) % (mod - 1); // will give us the value for x
  }
  let ans = binaryExpo(A, fact);
  return Number(ans);
};

console.log(findValue(2, 27)); // 666348826
