/**
 * ! Problem = given a natural number 'n', determine  if the number  is prime or not
 * * a prime number is a natural number greater than  that is not a product of two smaller natural numbers
 * ? isPrime(5) = true (1*5 or 5*1)
 * ? isPrime(4) = false (1*4 or 2*2 or 4*1)
 */

const isPrime = (n) => {
  // let noOfFactors = 0;
  // for (let i = 1; i <= n; i++) {
  //   if (n % i === 0) {
  //     console.log('inside', i);
  //     noOfFactors++;
  //   }
  // }
  // return noOfFactors === 2;
  if (n < 2) {
    return false;
  }
  // for (let i = 2; i < n; i++) {
  // according to square root logic
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(4));
console.log(isPrime(1));
console.log(isPrime(11));

//  BigO = O(n)
// ccording to the square root loop the complexity of the for loop will be
// O(sqrt(n))
/**
 * * Integers larger than the square root do not need
 * * to be checked because, whenever 'n=a*b', one of
 * * the two factors 'a' and 'b' is less than or equal
 * * to the square root of 'n
 */

// example :
// n=24 , a=4 and b=6
// The Square root of 24 is 4.89
// 4 is less than 4.89
// a is less than the square root of n
// --------------------------
// n=35, a=5 and b=7;
// The square root of 35 is 5.91
// 5 is less than 5.91
// a is less than the square root of n
