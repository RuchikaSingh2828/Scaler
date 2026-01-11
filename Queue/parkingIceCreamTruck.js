// Problem Description

// Imagine you're an ice cream truck driver in a beachside town. The beach is divided into several sections, and each section has varying numbers of beachgoers wanting ice cream given by the array of integers A.

// For simplicity, let's say the beach is divided into 8 sections. One day, you note down the number of potential customers in each section: [5, 12, 3, 4, 8, 10, 2, 7]. This means there are 5 people in the first section, 12 in the second, and so on.

// You can only stop your truck in B consecutive sections at a time because of parking restrictions. To maximize sales, you want to park where the most customers are clustered together.

// For all B consecutive sections, identify the busiest stretch to park your ice cream truck and serve the most customers. Return an array C, where C[i] is the busiest section in each of the B consecutive sections. Refer to the given example for clarity.

// NOTE: If B > length of the array, return 1 element with the max of the array.

// Problem Constraints

// 1 <= |A|, B <= 106

// Input Format

// The first argument given is the integer array A.

// The second argument given is the integer B.

// Output Format

// Return an array C, where C[i] is the maximum value from A[i] to A[i+B-1].

// Example Input

// Input 1:

//  A = [1, 3, -1, -3, 5, 3, 6, 7]
//  B = 3
// Input 2:

//  A = [1, 2, 3, 4, 2, 7, 1, 3, 6]
//  B = 6

// Example Output

// Output 1:

//  [3, 3, 5, 5, 6, 7]
// Output 2:

//  [7, 7, 7, 7]

// Example Explanation

// Explanation 1:

//  Window position     | Max
//  --------------------|-------
//  [1 3 -1] -3 5 3 6 7 | 3
//  1 [3 -1 -3] 5 3 6 7 | 3
//  1 3 [-1 -3 5] 3 6 7 | 5
//  1 3 -1 [-3 5 3] 6 7 | 5
//  1 3 -1 -3 [5 3 6] 7 | 6
//  1 3 -1 -3 5 [3 6 7] | 7
// Explanation 2:

//  Window position     | Max
//  --------------------|-------
//  [1 2 3 4 2 7] 1 3 6 | 7
//  1 [2 3 4 2 7 1] 3 6 | 7
//  1 2 [3 4 2 7 1 3] 6 | 7
//  1 2 3 [4 2 7 1 3 6] | 7

function slidingMaximum(A, B) {
  let res = [];
  let deQue = [];

  for (let i = 0; i < A.length; i++) {
    while (deQue.length > 0 && deQue[0] < i - B + 1) {
      deQue.shift();
    }

    while (deQue.length > 0 && A[deQue[deQue.length - 1]] < A[i]) {
      deQue.pop();
    }

    deQue.push(i);

    if (i >= B - 1) {
      res.push(A[deQue[0]]);
    }
  }

  return res;
}

let parking = [
  648, 614, 490, 138, 657, 544, 745, 582, 738, 229, 775, 665, 876, 448, 4, 81,
  807, 578, 712, 951, 867, 328, 308, 440, 542, 178, 637, 446, 882, 760, 354,
  523, 935, 277, 158, 698, 536, 165, 892, 327, 574, 516, 36, 705, 900, 482, 558,
  937, 207, 368,
];
console.log(slidingMaximum(parking, 9));
// 745 745 775 775 876 876 876 876 876 876 876 951 951 951 951 951 951 951 951 951 882 882 882 882 935 935 935 935 935 935 935 935 935 892 892 892 900 900 900 937 937 937
