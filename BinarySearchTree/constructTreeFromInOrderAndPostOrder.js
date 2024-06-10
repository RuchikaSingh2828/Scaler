// Problem Description
// Given preorder and inorder traversal of a tree, construct the binary tree.

// NOTE: You may assume that duplicates do not exist in the tree.

// Problem Constraints
// 1 <= number of nodes <= 105

// Input Format
// First argument is an integer array A denoting the preorder traversal of the tree.

// Second argument is an integer array B denoting the inorder traversal of the tree.

// Output Format
// Return the root node of the binary tree.

// Example Input
// Input 1:

//  A = [1, 2, 3]
//  B = [2, 1, 3]
// Input 2:

//  A = [1, 6, 2, 3]
//  B = [6, 1, 3, 2]

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

function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const constructTree = (A, B) => {
  if (!A || !B || A.length === 0 || B.length === 0) {
    return null;
  }
  const head = A.shift();
  const root = new TreeNode(head);
  const pivot = B.indexOf(head);

  const lInOrder = B.slice(0, pivot);
  const rInOrder = B.slice(pivot + 1, B.length);

  const lPreOrder = A.slice(0, A.length - rInOrder.length);
  const rPreOrder = A.slice(lPreOrder.length, A.length);

  root.left = constructTree(lPreOrder, lInOrder);
  root.right = constructTree(rPreOrder, rInOrder);

  return root;
};
// const A = [8, 4, 9, 2, 10, 5, 11, 1, 13, 6, 14, 3, 7];
// const B = [8, 9, 4, 10, 22, 5, 2, 13, 14, 6, 7, 3, 1];

// const A = [1, 2, 3];
// const B = [2, 1, 3];

const A = [1, 2, 3, 4, 5];
const B = [3, 2, 1, 4, 5];

console.log(constructTree(A, B));
