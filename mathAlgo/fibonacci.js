/**
 * ! Problem : Give a number 'n', find the first 'n' elements of the Fibonacci Sequence
 * * In mathematics, the  Fibonacci sequence is a sequence in which each number is the sum  of the preceeding two.
 * ? fibonacci(2) = [0,1]
 * ? fibonacci(3) = [0,1,1]
 * ? fibonacci(7) = [0,1,1,2,3,5,8]
 */

const getFibonacciSequence = (num) => {
  let seq = [0, 1];
  // for (let i = 1; i < num - 1; i++) {
  //   const sum = seq[i - 1] + seq[i];
  //   seq.push(sum);
  // }

  for (let i = 2; i < num; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }

  return seq;
};

console.log(getFibonacciSequence(7));

/**
 * ! Big-O = O(n)
 */
