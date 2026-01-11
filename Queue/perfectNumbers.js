// Problem Description

// Given an integer A, you have to find the Ath Perfect Number.

// A Perfect Number has the following properties:

// It comprises only 1 and 2.
// The number of digits in a Perfect number is even.
// It is a palindrome number.
// For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.

// Problem Constraints

// 1 <= A <= 100000

// Input Format

// The only argument given is an integer A.

// Output Format

// Return a string that denotes the Ath Perfect Number.

// Example Input

// Input 1:

//  A = 2
// Input 2:

//  A = 3

// Example Output

// Output 1:

//  22
// Output 2:

//  1111

// Example Explanation

// Explanation 1:

// First four perfect numbers are:
// 1. 11
// 2. 22
// 3. 1111
// 4. 1221
// Return the 2nd Perfect number.
// Explanation 2:

// First four perfect numbers are:
// 1. 11
// 2. 22
// 3. 1111
// 4. 1221
// Return the 3rd Perfect number.
function reverseStr(s) {
  let rev = '';
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  return rev;
}
function getPerfectNumber(A) {
  let st = ['1', '2'];
  let perfect = [];
  while (perfect.length < A) {
    let d = st.shift();
    let pal = d + reverseStr(d);
    perfect.push(pal);
    let n1 = d + '1';
    let n2 = d + '2';
    st.push(n1);
    st.push(n2);
  }
  return perfect[A - 1];
}

console.log('A=1:', getPerfectNumber(1)); //11
console.log('A=2:', getPerfectNumber(2)); //22
console.log('A=3:', getPerfectNumber(3)); //1111
console.log('A=4:', getPerfectNumber(4)); //1221
