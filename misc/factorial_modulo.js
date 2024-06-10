/* Given T test Cases and in each test case a number N.
Print its factorial for reach test case % M 
where M  10^9 + 7

* Constraints
* 1 <= T <= 10^5
* 1<= N <= 10^5
*/

// function to calculate Factorial modulo M
// function factorialModulo(n, m) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result = (result * i) % m;
//   }
//   return result;
// }

// // Read the number of test cases
// rl.question('Enter the number of test cases(T): ', (t) => {
//   for (let i = 0; i < t; i++) {
//     // Read the value of N for each test cases
//     rl.question(`Enter N for Test Case ${i + 1} : `, (n) => {
//       const result = factorialModulo(parseInt(n), 10 ** 9 + 7);

//       console.log(`Result for Test Case ${i + 1}: ${result}`);

//       if (i === t - 1) {
//         rl.close();
//       }
//     });
//   }
// });

// // message on closing the interface
// rl.on('close', () => {
//   console.log('All test case processed. Exiting.');
// });

// TC = O(n^2);

// now even though two n will be the same we will be recalculting the factorial again and again with the above code
// here we will use precomputation technique where we will compute the
// factorial before and store it in an array

import { createInterface } from 'readline';

// Create an interface for reading input
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to precompute factorials modulo M up to a given limit
function precomputeFactorials(limit, m) {
  const factorials = [1];
  for (let i = 1; i <= limit; i++) {
    factorials[i] = (factorials[i - 1] * i) % m;
  }
  return factorials;
}

// Recursive function to handle each test case sequentially
function processTestCases(t, i, factorials) {
  if (i < t) {
    // Read the value of N for the current test case
    rl.question(`Enter N for Test Case ${i + 1}: `, (n) => {
      // Use precomputed factorial for the current test case
      const result = factorials[parseInt(n)];

      // Print the result for the current test case
      console.log(`Result for Test Case ${i + 1}: ${result}`);

      // Move to the next test case
      processTestCases(t, i + 1, factorials);
    });
  } else {
    // Close the interface after all input is processed
    rl.close();
  }
}

// Read the number of test cases
rl.question('Enter the number of test cases (T): ', (t) => {
  // Set the maximum limit for precomputing factorials
  const limit = Math.max(t, 100000);

  // Precompute factorials up to the limit
  const factorials = precomputeFactorials(limit, 10 ** 9 + 7);

  // Start processing test cases
  processTestCases(t, 0, factorials);
});

// Close the interface after all input is processed
rl.on('close', () => {
  console.log('All test cases processed. Exiting.');
});
