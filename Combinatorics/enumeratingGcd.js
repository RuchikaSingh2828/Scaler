// Problem Description

// You are given a number A and a number B. Greatest Common Divisor (GCD) of all numbers between A and B inclusive is taken (GCD(A, A+1, A+2 ... B)).

// As this problem looks a bit easy, it is given that numbers A and B can be in the range of 10100.

// You have to return the value of GCD found.

// The greatest common divisor of 2 numbers, A and B, is the largest number, D that divides both A and B perfectly.

// Problem Constraints

// 1 <= A <= B <= 10100

// Input Format

// First argument is a string denoting A.

// Second argument is a string denoting B.

// Output Format

// Return a string which contains the digits of the integer which represents the GCD. The returned string should not have any leading zeroes.

// Example Input

// A = "1"
// B = "3"

// Example Output

// 1

// Example Explanation

// Greatest divisor that divides both 1 and 3 is 1.
// The problem is asking us to find the Greatest Common Divisor (GCD) of all integers in a range from A to B inclusive. Let's clarify this with some examples:
// Example 1 (from the problem):
// CopyA = 1, B = 3
// Here, we need to find GCD(1, 2, 3).
// To think about this step by step:

// GCD(1, 2) = 1 (since 1 is the only number that divides both 1 and 2)
// Now we compute GCD(1, 3), which is also 1

// So the answer is 1.
// Example 2:
// CopyA = 12, B = 18
// Now we need to find GCD(12, 13, 14, 15, 16, 17, 18).
// Let's work through this incrementally:

// GCD(12, 13) = 1 (since 12 and 13 are coprime - they have no common divisor except 1)
// Once we get a GCD of 1, any subsequent GCD calculations with other numbers will also be 1
// This is because any integer divided by 1 equals itself, and 1 is already the smallest positive integer

// So for this example, the answer is 1.
// Example 3:
// CopyA = 24, B = 28
// We need to find GCD(24, 25, 26, 27, 28).

// GCD(24, 25) = 1 (24 and 25 are coprime)
// Again, once we get to 1, the overall GCD remains 1

// So the answer is 1.
// Example 4:
// CopyA = 10, B = 10
// Here, there's only one number: 10
// So the GCD is simply 10 itself.
// Example 5:
// CopyA = 18, B = 20
// We need to find GCD(18, 19, 20).

// GCD(18, 19) = 1 (18 and 19 are coprime)
// The overall GCD is 1

// Key Insights:

// If there are consecutive integers in our range (which happens whenever B > A), the GCD will always be 1
// The GCD will only be greater than 1 when A = B (single number case)

// The tricky part of this problem is handling extremely large numbers (up to 10^100), which is why the input is given as strings. You'll need to consider how to handle these large numbers efficiently.

function enumerationGCD(A, B) {
  if (A !== B) return 1;
  else return A;
}
