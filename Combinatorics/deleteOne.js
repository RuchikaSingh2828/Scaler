// Problem Description

// Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.

// Find the maximum value of GCD.

// Problem Constraints

// 2 <= N <= 105
// 1 <= A[i] <= 109

// Input Format

// First argument is an integer array A.

// Output Format

// Return an integer denoting the maximum value of GCD.

// Example Input

// Input 1:

//  A = [12, 15, 18]
// Input 2:

//  A = [5, 15, 30]

// Example Output

// Output 1:

//  6
// Output 2:

//  15

const gcd = (A, B) => {
  if (B === 0) return A;
  return gcd(B, A % B);
};

const calculatePrefixGCD = (A) => {
  let n = A.length;
  let pfx = new Array(n);
  pfx[0] = A[0];
  for (let i = 1; i < n; i++) {
    if (A[i] > pfx[i - 1]) pfx[i] = gcd(A[i], pfx[i - 1]);
    else pfx[i] = gcd(pfx[i - 1], A[i]);
  }
  return pfx;
};
const calculateSufixGCD = (A) => {
  let n = A.length;
  let sfx = new Array(n);
  sfx[n - 1] = A[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (A[i] > sfx[i + 1]) sfx[i] = gcd(A[i], sfx[i + 1]);
    else sfx[i] = gcd(sfx[i + 1], A[i]);
  }
  return sfx;
};

const maxGCD = (A) => {
  let n = A.length;
  let pfx = calculatePrefixGCD(A);
  console.log(pfx);

  let sfx = calculateSufixGCD(A);
  console.log(sfx);

  let ans = sfx[1];
  for (let i = 1; i < n; i++) {
    let currGcd = 1;
    if (i === n - 1) {
      ans = Math.max(ans, pfx[i - 1]);
      break;
    }
    if (pfx[i - 1] > sfx[i + 1]) {
      currGcd = gcd(pfx[i - 1], sfx[i + 1]);
    } else {
      currGcd = gcd(sfx[i + 1], pfx[i - 1]);
    }

    ans = Math.max(currGcd, ans);
  }
  return ans;
};

// console.log(calculatePrefixGCD([12, 8, 20, 15])); //[12, 4, 4, 1]
// console.log(maxGCD([12, 15, 18])); //6
// console.log(maxGCD([8, 12])); // 4
console.log(maxGCD([3, 9, 6, 8, 3])); // 3
