/** Given 2d array A of N*N integers.
 * Given Q queries and in each query
 * given a,b,c and d print the sum of square represented by a,b as top left
 * point and c,d as bottom right point
 * * CONSTRAINTS
 * * 1<= N <= 10^3
 * * 1<= a[i][i] <= 10^9
 * * 1 <= Q <= 10^5
 * * 1<= a,b,c,d <=N
 */

import readlineSync from 'readline-sync';

const n = readlineSync.question(
  'enter the size of colum/row of the 2D square array : '
);

const arr = new Array(+n + 1).fill().map(() => new Array(+n + 1));
console.log(arr);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const element = readlineSync.question(
      `Enter element for arr[${i}][${j}] : `
    );
    arr[i][j] = Number(element);
  }
}

console.log(arr);

let q = readlineSync.question('enter the numbr of queries : ');

while (q--) {
  const a = readlineSync.question('enter the top row left index : ');
  const b = readlineSync.question('enter the top column left index : ');
  const c = readlineSync.question('enter the bottom row right index : ');
  const d = readlineSync.question('enter the bottom column right index : ');

  let sum = 0;
  for (let i = a; i <= c; i++) {
    for (let j = b; j <= d; j++) {
      sum += arr[i][j];
    }
  }

  console.log(sum);
}

// const a = readlineSync.question('enter the top row left index : ');
// const b = readlineSync.question('enter the top column left index : ');
// const c = readlineSync.question('enter the bottom row right index : ');
// const d = readlineSync.question('enter the bottom column right index : ');

// let sum = 0;
// for (let i = a; i <= c; i++) {
//   for (let j = b; j <= d; j++) {
//     sum += arr[i][j];
//   }
// }

// console.log(sum);
