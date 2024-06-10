/**
 * ! Problem : Give a positive integer 'n', determine if the number is a power of 2 or not
 * * An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x
 * ? isPowerofTwo(1) = true (2^0)
 * ? isPowerofTwo(2) = true (2^1)
 * ? isPowerofTwo(5) = false
 */

const isPowerOfTwo = (n) => {
  for (let i = 0; i < n; i++) {
    if (n < 1) return false;
    while (n > 1) {
      if (n % 2 !== 0) return false;
      n = n / 2;
    }
    return true;
  }
};

// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(8)); // true
// console.log(isPowerOfTwo(12)); // false

// Big(O) = O(logn)

// anothr linear solution ..

const isPowerOfTwoSol = (n) => {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
};
// Big(O) = O(1)

console.log(isPowerOfTwoSol(1)); // true
console.log(isPowerOfTwoSol(8)); // true
console.log(isPowerOfTwoSol(12)); // false
