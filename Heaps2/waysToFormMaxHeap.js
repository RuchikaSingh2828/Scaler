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
  const mod = 1e9 + 7;

  // Precompute Pascal's triangle for nCr using DP approach
  const C = Array.from({ length: A + 1 }, () => Array(A + 1).fill(0));
  for (let i = 0; i <= A; i++) {
    C[i][0] = 1;
    if (i > 0) {
      for (let j = 1; j <= i; j++) {
        C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % mod;
      }
    }
  }

  // Function to calculate the number of nodes in the left subtree of a complete binary tree with n nodes
  function getLeftSubtreeSize(n) {
    if (n === 0) return 0;
    const h = Math.floor(Math.log2(n));
    const maxNodesAtH = 1 << h; // 2^h
    const nodesAboveH = (1 << h) - 1; // Total nodes above level h
    const remainingNodes = n - nodesAboveH;

    return Math.min(maxNodesAtH, remainingNodes);
  }

  // Memoization for number of heaps with n nodes
  const memo = new Map();

  function countHeaps(n) {
    if (n <= 1) return 1; // Base case: 0 or 1 node has only one heap
    if (memo.has(n)) return memo.get(n);

    const leftSize = getLeftSubtreeSize(n);
    const rightSize = n - 1 - leftSize;

    // Number of ways to choose leftSize nodes from n-1 nodes
    const waysToChooseLeft = C[n - 1][leftSize];

    // Total heaps is the product of ways to choose left subtree and the number of heaps in left and right subtrees
    const totalHeaps =
      (((waysToChooseLeft * countHeaps(leftSize)) % mod) *
        countHeaps(rightSize)) %
      mod;

    memo.set(n, totalHeaps);
    return totalHeaps;
  }

  return countHeaps(A);
}
