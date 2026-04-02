// Problem Description

// Given a Binary Tree A consisting of N integer nodes, you need to find the diameter of the tree.

// The diameter of a tree is the number of edges on the longest path between two nodes in the tree.

// Problem Constraints

// 0 <= N <= 105

// Input Format

// First and only Argument represents the root of binary tree A.

// Output Format

// Return an single integer denoting the diameter of the tree.

// Example Input

// Input 1:

//            1
//          /   \
//         2     3
//        / \
//       4   5
// Input 2:

//             1
//           /   \
//          2     3
//         / \     \
//        4   5     6

// Example Output

// Output 1:

//  3
// Output 2:

//  4

const height = (root) => {
  if (root === null) {
    return 0;
  }
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  diameter = Math.max(diameter, leftHeight + rightHeight);
  return 1 + Math.max(leftHeight, rightHeight);
};

const diameterOfBinaryTree = (A) => {
  let diameter = 0;
  height(A, diameter);
  return diameter;
};
