//  Given array a of N integers. Given Q queries and in each query L and R
//  print sum of array elements from inex L to R (L, R included)

/**
 * *Constriants
 * * 1<= a[i] <=10^9
 * * 1<= N <= 10^5
 * * 1<= Q <= 10^5
 * * 1<= L, r <= N
 */

// ! whenever there is a question where L and R is included its better to use 1 base indexed array instead of 0 based indexed arraya
// * creating a regular JavaScript array and leaving the first element empty.

import readlineSync from 'readline-sync';

// const inputArray = [null].concat(
//   readlineSync
//     .question('Input space separated numbers for Array : ')
//     .split(' ')
//     .map(Number)
// );

// let noOfQuery = +readlineSync.question('input no of queries : ');
// while (noOfQuery--) {
//   const L = readlineSync.question('input Left index : ');
//   const R = readlineSync.question('input Right index : ');

//   let sum = 0;

//   for (let i = L; i <= R; i++) {
//     sum += inputArray[i];
//   }

//   console.log(`Sum = ${sum}`);
// }

// TC = O(N^2)

// import readlineSync from 'readline-sync';

const inputArray = [0].concat(
  readlineSync
    .question('Input space separated numbers for Array : ')
    .split(' ')
    .map(Number)
);

let prefixSum = [0];
for (let i = 1; i < inputArray.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + inputArray[i];
}
console.log(prefixSum);

let noOfQuery = +readlineSync.question('input no of queries : ');
while (noOfQuery--) {
  const L = readlineSync.question('input Left index : ');
  const R = readlineSync.question('input Right index : ');
  console.log(`Sum = ${prefixSum[+R] - prefixSum[+L - 1]}`);
}
