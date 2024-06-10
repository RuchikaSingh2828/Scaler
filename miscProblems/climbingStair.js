/**
 * ! Problem : Given a staircase of 'n steps,
 * ! count the number of distinct ways to climb to the top.
 * ! You can either climb 1 step or 2 stesp at a time
 *
 * * n=1, climbingStaircase(1) = 1          (1)
 * * n=2, climbingStaircase(2) = 2          (1,1) (2)
 * * n=3, climbingStaircase(3) = 3          (1,1,1) (1,2) (2,1)
 * * n=5, climbingStairCase(4) = 5          (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) (2,2)
 *
 * ? Solution
 * ? at any given time, you can climb either 1 step or 2 step
 * ? if you have to climb to step n we can only climb from 'n-1' or 'n-2'
 * ? Calculate the ways we can climb to n-1 and n-2 and add the two
 *
 * ! climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)
 * * n=1 and n=2 is fixed from
 * * n=3 => f(n=2) + f(n=1) => 1+2 => 3
 * * n=4 => f(n=3) + f(n=2) => 3+2 => 5 and so on...
 *
 */

function climbingStaircase1(steps) {
  if (steps < 3) {
    return steps;
  }
  return climbingStaircase1(steps - 1) + climbingStaircase1(steps - 2);
}

console.log(climbingStaircase1(5));

// BigInt(o) for this approach is Object(2^n)

function climbingStaircase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}
