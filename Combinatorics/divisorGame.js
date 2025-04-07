// Problem Description

// Scooby has 3 three integers A, B, and C.

// Scooby calls a positive integer special if it is divisible by B and it is divisible by C. You need to tell the number of special integers less than or equal to A.

// Problem Constraints

// 1 <= A, B, C <= 109

// Input Format

// First argument is a positive integer A
// Second argument is a positive integer B
// Third argument is a positive integer C

// Output Format

// One integer corresponding to the number of special integers less than or equal to A.

// Example Input

// Input 1:

//  A = 12
//  B = 3
//  C = 2
// Input 2:

//  A = 6
//  B = 1
//  C = 4

// Example Output

// Output 1:

//  2
// Output 2:

//  1

// Example Explanation

// Explanation 1:

//  The two integers divisible by 2 and 3 and less than or equal to 12 are 6,12.
// Explanation 2:

//  Only 4 is a positive integer less than equal to 6 which is divisible by 1 and 4.

// #1
// A = 60 (we're looking for special numbers up to 60)
// B = 3 (special numbers must be divisible by 3)
// C = 5 (special numbers must also be divisible by 5)

// A number is considered "special" if it's divisible by both B and C. This means we're looking for numbers that are divisible by both 3 and 5.
// When a number needs to be divisible by two different values, we're actually looking for numbers divisible by their least common multiple (LCM). The LCM of 3 and 5 is 15.
// So our task simplifies to: How many multiples of 15 are there that are less than or equal to 60?
// Let's list them out:

// 15 (15 × 1)
// 30 (15 × 2)
// 45 (15 × 3)
// 60 (15 × 4)

// There are exactly 4 such numbers, which is why the output is 4.
// Another way to calculate this mathematically is to divide A by the LCM and take the floor:
// ⌊60 ÷ 15⌋ = ⌊4⌋ = 4

const divisor = (A, B, C) => {
  const calcGcd = (a, b) => {
    if (b === 0) return a;
    return calcGcd(b, a % b);
  };

  const gcdValue = B > C ? calcGcd(B, C) : calcGcd(C, B);
  const LCM = (B * C) / gcdValue;

  const ans = Math.floor(A / LCM);
  return ans;
};

console.log(divisor(12, 3, 2)); //2
console.log(divisor(6, 1, 4)); // 1
console.log(divisor(20, 4, 5)); //1
console.log(divisor(30, 2, 3)); //5
console.log(divisor(100, 5, 10)); //10
console.log(divisor(50, 10, 5)); //5
console.log(divisor(1000, 7, 11)); //12
console.log(divisor(60, 3, 5)); //4
console.log(divisor(36, 4, 9)); //1
