// Problem Description
// Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Problem Constraints
// 1 <= number of nodes <= 105

// Input Format
// First and only argument is root node of the binary tree, A.

// Output Format
// Return a 2D integer array denoting the level order traversal of the given binary tree.

// Example Input
// Input 1:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Input 2:

//    1
//   / \
//  6   2
//     /
//    3

// Example Output
// Output 1:

//  [
//    [3],
//    [9, 20],
//    [15, 7]
//  ]
// Output 2:

//  [
//    [1]
//    [6, 2]
//    [3]
//  ]

// Example Explanation
// Explanation 1:

//  Return the 2D array. Each row denotes the traversal of each level.

import BinarySearchTree from './BST.js';

const bst = new BinarySearchTree();
const nodes = [6, 9, 4, -1, -1, 8, -1, -1, 3, -1, -1];
for (const value of nodes) {
  if (value !== -1) {
    bst.insert(value);
  }
}

const levelOrderTraversal = (A) => {
  let queue = [A]; // LIFO
  const res = [];
  while (queue && queue.length > 0) {
    let levelSize = queue.length;
    const levelElements = [];
    while (levelSize--) {
      const treeNode = queue.shift();
      levelElements.push(treeNode.value);
      if (treeNode.left) {
        queue.push(treeNode.left);
      }
      if (treeNode.right) {
        queue.push(treeNode.right);
      }
    }
    res.push(levelElements);
  }
  return res;
};

console.log(levelOrderTraversal(bst.root));
