function recursiveFactorial(n) {
  if (n === 0) return n;
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

// ? we can see that we call "recursiveFactorial" as many time as n is
// ?for  5 we call the func 5 times
// ?for 4 we call the function 4 times

// ?thus the time complexity will be
// * Big-O = O(n)
