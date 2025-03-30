// Problem Description

// Given two integers A and B. Find the value of A-1 mod B where B is a prime number and gcd(A, B) = 1.

// A-1 mod B is also known as modular multiplicative inverse of A under modulo B.

// Problem Constraints

// 1 <= A <= 109
// 1<= B <= 109
// B is a prime number

// Input Format

// First argument is an integer A.
// Second argument is an integer B.

// Output Format

// Return an integer denoting the modulor inverse

// Example Input

// Input 1:

//  A = 3
//  B = 5
// Input 2:

//  A = 6
//  B = 23

// Example Output

// Output 1:

//  2
// Output 2:

//  4

// Example Explanation

// Explanation 1:

//  Let's say A-1 mod B = X, then (A * X) % B = 1.
//  3 * 2 = 6, 6 % 5 = 1.
// Explanation 2:

//  Similarly, (6 * 4) % 23 = 1.
let MOD;
function mult(a, b) {
  let val = a * b;
  if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
    return val % MOD;
  return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

function pw(a, b, m) {
  let res = 1; // Initialize result
  while (b > 0) {
    // If b is odd, multiply a with result
    if (b & 1) res = mult(res, a);
    a = mult(a, a);
    b >>= 1;
  }
  return res;
}

module.exports = {
  solve: function (A, B) {
    MOD = B;
    // Modular inverse of A Modulo B = pw(A, B - 2, B)
    return pw(A, B - 2, B);
  },
};
console.log(reverseModulo(1545, 999996223)); // 451145837
// but in this case
//According to Fermats’s little theorem:

// A^B-1 ≡ 1 (mod B) where B is prime and A is not a multiple of B.

/**
 * Greatest Common Divisor (GCD) Calculation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Greatest common divisor
 */
function gcd(a, b) {
  // Absolute value ensures positive integers
  a = Math.abs(a);
  b = Math.abs(b);

  // Euclidean Algorithm
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

/**
 * Extended Euclidean Algorithm
 * Finds coefficients x, y such that ax + by = gcd(a,b)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {[number, number, number]} [gcd, x, y]
 */
function extendedGCD(a, b) {
  // Base case: if a is 0, return b as GCD
  // x = 0, y = 1 satisfies the equation
  if (a === 0) {
    return [b, 0, 1];
  }

  // Recursive call with remainder
  const [gcd, x1, y1] = extendedGCD(b % a, a);

  // Backtrack and compute x, y
  // Rearrange the recursive equation to solve for x and y
  const x = y1 - Math.floor(b / a) * x1;
  const y = x1;

  return [gcd, x, y];
}

/**
 * Modular Multiplicative Inverse
 * @param {number} a - Number to find inverse for
 * @param {number} m - Modulus
 * @returns {number} Modular multiplicative inverse
 */
function modInverse(a, m) {
  // Ensure a is positive within modulo m
  a = ((a % m) + m) % m;

  // Check if inverse exists

  // Finding the Inverse

  // Extended GCD finds x such that:
  // 7x + 26y = 1
  // This x will be the modular multiplicative inverse of 7 mod 26
  const [gcdValue, x, y] = extendedGCD(a, m);

  // Inverse exists only if gcd is 1
  if (gcdValue !== 1) {
    throw new Error('Modular inverse does not exist');
  }

  // Ensure positive result within modulo m
  return ((x % m) + m) % m;
}

/**
 * Detailed Example Runner
 */
function runDetailedExample() {
  console.log('=== Detailed Modular Inverse Examples ===');

  // Example 1: Simple case
  const example1 = { a: 7, m: 26 };
  console.log(
    `\nExample 1: Finding inverse of ${example1.a} mod ${example1.m}`
  );

  // Dry run steps for Example 1
  console.log('\nDry Run Steps:');
  console.log('1. Check if 7 and 26 are coprime');
  console.log(`   GCD(7, 26) = ${gcd(7, 26)}`);

  const [gcd1, x1, y1] = extendedGCD(7, 26);
  console.log('\n2. Extended GCD Calculation:');
  console.log(`   GCD: ${gcd1}`);
  console.log(`   x: ${x1}`);
  console.log(`   y: ${y1}`);

  const inverse1 = modInverse(7, 26);
  console.log('\n3. Modular Inverse Result:');
  console.log(`   7^-1 mod 26 = ${inverse1}`);
  console.log(
    `   Verification: (7 * ${inverse1}) mod 26 = ${(7 * inverse1) % 26}`
  );

  // Example 2: Another case
  const example2 = { a: 3, m: 11 };
  console.log(
    `\n\nExample 2: Finding inverse of ${example2.a} mod ${example2.m}`
  );

  console.log('\nDry Run Steps:');
  console.log('1. Check if 3 and 11 are coprime');
  console.log(`   GCD(3, 11) = ${gcd(3, 11)}`);

  const [gcd2, x2, y2] = extendedGCD(3, 11);
  console.log('\n2. Extended GCD Calculation:');
  console.log(`   GCD: ${gcd2}`);
  console.log(`   x: ${x2}`);
  console.log(`   y: ${y2}`);

  const inverse2 = modInverse(3, 11);
  console.log('\n3. Modular Inverse Result:');
  console.log(`   3^-1 mod 11 = ${inverse2}`);
  console.log(
    `   Verification: (3 * ${inverse2}) mod 11 = ${(3 * inverse2) % 11}`
  );
}

// Run the examples
runDetailedExample();
