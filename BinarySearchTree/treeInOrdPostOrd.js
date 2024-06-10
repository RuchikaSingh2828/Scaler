// Problem Description
// Given the inorder and postorder traversal of a tree, construct the binary tree.

// NOTE: You may assume that duplicates do not exist in the tree.

// Problem Constraints
// 1 <= number of nodes <= 105

// Input Format
// First argument is an integer array A denoting the inorder traversal of the tree.

// Second argument is an integer array B denoting the postorder traversal of the tree.

// Output Format
// Return the root node of the binary tree.

// Example Input
// Input 1:

//  A = [2, 1, 3]
//  B = [2, 3, 1]
// Input 2:

//  A = [6, 1, 3, 2]
//  B = [6, 3, 2, 1]

// Example Output
// Output 1:

//    1
//   / \
//  2   3
// Output 2:

//    1
//   / \
//  6   2
//     /
//    3

// Example Explanation
// Explanation 1:

//  Create the binary tree and return the root node of the tree.

import { Node as Node } from './BST.js';

const constructTree = (A, B) => {
  if (A.length === 0 || B.length === 0) {
    return null;
  }
  const root = new Node(B[B.length - 1]);
  const isRootInOrder = (data) => data === root.value;
  const rootIndexInOrder = A.findIndex(isRootInOrder);

  const leftSubtreeInOrder = A.slice(0, rootIndexInOrder);
  const leftSubtreePostOrder = B.slice(0, rootIndexInOrder);
  const rightSubtreeInOrder = A.slice(rootIndexInOrder + 1, A.length);
  const rightSubtreePostOrder = B.slice(rootIndexInOrder, A.length - 1);

  if (leftSubtreeInOrder.length > 0 && leftSubtreePostOrder.length > 0) {
    root.left = constructTree(leftSubtreeInOrder, leftSubtreePostOrder);
  } else root.left = null;

  if (rightSubtreeInOrder.length > 0 && rightSubtreePostOrder.length > 0) {
    root.right = constructTree(rightSubtreeInOrder, rightSubtreePostOrder);
  } else root.right = null;

  return root;
};
// const A = [8, 4, 9, 2, 10, 5, 11, 1, 13, 6, 14, 3, 7];
// const B = [8, 9, 4, 10, 22, 5, 2, 13, 14, 6, 7, 3, 1];

const A = [2, 1, 3];
const B = [2, 3, 1];

console.log(constructTree(A, B));
