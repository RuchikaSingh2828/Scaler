// Problem Description

// Max Heap is a special kind of complete binary tree in which, for every node, the value present in that node is greater than the value present in its children nodes.

// Find the number of distinct Max Heap that can be made from A distinct integers.

// In short, you have to ensure the following properties for the max heap :

// Heap has to be a complete binary tree ( A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.)
// Every node is greater than all its children.
// NOTE: If you want to know more about Heaps, please visit this link. Return your answer modulo 109 + 7.

// Problem Constraints

// 1 <= A <= 100

// Input Format

// The first and only argument is an integer A.

// Output Format

// Return an integer denoting the number of distinct Max Heap.

// Example Input

// Input 1:

//  A = 4
// Input 2:

//  A = 10

// Example Output

// Output 1:

//  3
// Output 2:

//  3360

// Example Explanation

// Explanation 1:

//  Let us take 1, 2, 3, 4 as our 4 distinct integers
//  Following are the 3 possible max heaps from these 4 numbers :
//       4           4                     4
//     /  \         / \                   / \
//    3    2   ,   2   3      and        3   1
//   /            /                     /
//  1            1                     2
// Explanation 2:

//  Number of distinct heaps possible with 10 distinct integers = 3360.

function waysToFormMaxHeap(A) {
  const MOD = 1000000007n;

  const nCr = Array.from({ length: A + 1 }, () => Array(A + 1).fill(0n));

  for (let i = 0; i <= A; i++) {
    nCr[i][0] = 1n;
    if (i > 0) {
      for (let j = 1; j <= i; j++) {
        nCr[i][j] = (nCr[i - 1][j - 1] + nCr[i - 1][j]) % MOD;
      }
    }
  }

  function getLeftSubTreeSize(n) {
    if (n <= 1) return 0;
    let h = Math.floor(Math.log2(n));
    let maxOnLeft = 1 << (h - 1); // 2 ^ (h-1)
    let nodesAboveLAst = (1 << h) - 1;
    let nodeOnLast = n - nodesAboveLAst;
    let nodesOnLastLeft = Math.min(maxOnLeft, nodeOnLast);

    return nodesOnLastLeft + maxOnLeft - 1;
  }

  const memo = new Map();

  function countHeaps(n) {
    if (n <= 1) return 1;
    if (memo.has(n)) return memo.get(n);

    const leftSize = getLeftSubTreeSize(n);
    const rightSize = n - 1 - leftSize;

    // Number of ways to choose leftSize nodes from n-1 nodes
    const waysToChooseLeft = nCr[n - 1][leftSize];

    const totalHeaps =
      (((waysToChooseLeft * BigInt(countHeaps(leftSize))) % MOD) *
        BigInt(countHeaps(rightSize))) %
      MOD;

    memo.set(n, totalHeaps);

    return totalHeaps;
  }

  return Number(countHeaps(A));
}

console.log(waysToFormMaxHeap(4)); // Output: 3
console.log(waysToFormMaxHeap(10)); // Output: 3360
console.log(waysToFormMaxHeap(100)); // Output: 812145033
