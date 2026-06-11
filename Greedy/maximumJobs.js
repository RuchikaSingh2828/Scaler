// Problem Description

// There are N jobs to be done, but you can do only one job at a time.

// Given an array A denoting the start time of the jobs and an array B denoting the finish time of the jobs.

// Your aim is to select jobs in such a way so that you can finish the maximum number of jobs.

// Return the maximum number of jobs you can finish.

// Problem Constraints

// 1 <= N <= 105

// 1 <= A[i] < B[i] <= 109

// Input Format

// The first argument is an integer array A of size N, denoting the start time of the jobs.
// The second argument is an integer array B of size N, denoting the finish time of the jobs.

// Output Format

// Return an integer denoting the maximum number of jobs you can finish.

// Example Input

// Input 1:

//  A = [1, 5, 7, 1]
//  B = [7, 8, 8, 8]
// Input 2:

//  A = [3, 2, 6]
//  B = [9, 8, 9]

// Example Output

// Output 1:

//  2
// Output 2:

//  1

function solve(A, B) {
  const n = A.length;
  const jobs = [];

  for (let i = 0; i < n; i++) {
    jobs.push({ start: A[i], finish: B[i] });
  }

  // Sort jobs based on finish time
  jobs.sort((a, b) => a.finish - b.finish);

  let count = 1; // At least one job can be done
  let lastFinishTime = jobs[0].finish;

  for (let i = 1; i < n; i++) {
    if (jobs[i].start >= lastFinishTime) {
      count++;
      lastFinishTime = jobs[i].finish;
    }
  }

  return count;
}

// Example usage:
const A1 = [1, 5, 7, 1];
const B1 = [7, 8, 8, 8];
console.log(solve(A1, B1)); // Output: 2

const A2 = [3, 2, 6];
const B2 = [9, 8, 9];
console.log(solve(A2, B2)); // Output: 1
