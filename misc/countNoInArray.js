/* 
Given array A of N integers. Given Q qeries and in each query 
given a number X, print count of that number in array. [ frequency ]
*Constraints 
*1 <= N <= 10^5
*1 <= A[i] <= 10^7
*1 <= Q <= 10^5
*/

// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function processArrayInput(input) {
//   const array = input.split(' ').map(Number);
//   console.log(array);
//   return array;
// }

// function calculateFrequency(inputArray, i, noOfQuery) {
//   if (i < noOfQuery) {
//     rl.question(`Enter ${i + 1} query : `, (q) => {
//       let cnt = 0;
//       for (let index = 0; index < inputArray.length; index++) {
//         const element = inputArray[index];
//         if (element === +q) {
//           cnt++;
//         }
//       }
//       console.log(`## Count of ${q} is ${cnt} ##`);
//       console.log('   ');
//       calculateFrequency(inputArray, i + 1, noOfQuery);
//     });
//   } else {
//     rl.close();
//   }
// }

// rl.question('Input space - seperated numbers for the array : ', (A) => {
//   const inputArray = processArrayInput(A);
//   rl.question('Enter the number of queires : ', (queries) => {
//     const noOfQuery = +queries;
//     calculateFrequency(inputArray, 0, noOfQuery);
//   });
// });

// import readlineSync from 'readline-sync';

// function processArrayInput(input) {
//   const array = input.split(' ').map(Number);
//   console.log(array);
//   return array;
// }

// function calculateFrequency(inputArray, noOfQuery) {
//   for (let i = 0; i < noOfQuery; i++) {
//     const q = readlineSync.question(`Enter ${i + 1} query : `);
//     let cnt = 0;
//     for (let index = 0; index < inputArray.length; index++) {
//       const element = inputArray[index];
//       if (element === +q) {
//         cnt++;
//       }
//     }
//     console.log(`## Count of ${q} is ${cnt} ##`);
//     console.log('   ');
//   }
// }

// const A = readlineSync.question(
//   'Input space-separated numbers for the array : '
// );
// const inputArray = processArrayInput(A);

// const queries = readlineSync.question('Enter the number of queries : ');
// const noOfQuery = +queries;

// calculateFrequency(inputArray, noOfQuery);

//  this code runs TC = O(n^2);

import readlineSync from 'readline-sync';

const A = readlineSync.question(
  'Input spce seperated numbers for the array : '
);
const inputArray = A.split(' ').map(Number);

const queries = readlineSync.question('Enter the number of queries : ');
const noOfQuery = +queries;

const frequencyMap = new Map();
for (let i = 0; i < inputArray.length; i++) {
  const element = inputArray[i];
  if (frequencyMap.has(+element)) {
    let count = frequencyMap.get(+element) + 1;
    frequencyMap.set(+element, count);
  } else {
    frequencyMap.set(+element, 1);
  }
}

console.log(frequencyMap);
for (let i = 0; i < noOfQuery; i++) {
  const q = readlineSync.question('Enter query : ');
  if (frequencyMap.has(+q)) {
    let count = frequencyMap.get(+q);
    console.log(`####   The frequency of query ${q} is ${count}   ####`);
  } else {
    console.log(`####   The frequency of query ${q} is 0   ####`);
  }
}
