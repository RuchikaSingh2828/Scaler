/**
 * ! Problem - Give a number 'n' find the nth element of the Fibonacci sequence
 * * recursiveFibonacci(0) = 0
 * * recursiveFibonacci(1) = 1
 * * recursiveFibonacci(6) = 8
 */

/**
 * * The fibonacci sequence  is a sequence in which each number is the sum of the two preceding ones.
 * * if F represents a function to calculate the Fibonacci number, then
 * F(n) = F(n-1) + F(n-2)
 * * Base Case
 * F(0) = 0 and F(1) = 1
 *
 *
 * F(2) = F(1) + F(0)
 *      = 1 + 0
 *      = 1
 */

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));

//O(n) - Iterative
// O(2^n) - Recursive
