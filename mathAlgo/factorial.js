/**
 * ! Problem = Give an integer 'n', find the factorial of that integer
 * Factorial of 0 is 1.
 * ? factorial(4) = 4*3*2*1 = 24
 * ? factorial(5) = 5*4*3*2*1 = 120
 */

const factorial = (n) => {
  let fact = 1;
  for (let i = n; i > 1; i--) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(4));
console.log(factorial(5));

/**
 * * Big-o = O(n)
 */
