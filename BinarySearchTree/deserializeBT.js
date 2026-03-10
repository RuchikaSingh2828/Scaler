// Problem Description

// You are given an integer array A denoting the Level Order Traversal of the Binary Tree.

// You have to Deserialize the given Traversal in the Binary Tree and return the root of the Binary Tree.

// NOTE:

// In the array, the NULL/None child is denoted by -1.
// For more clarification check the Example Input.

// Problem Constraints

// 1 <= number of nodes <= 105

// -1 <= A[i] <= 105

// Input Format

// Only argument is an integer array A denoting the Level Order Traversal of the Binary Tree.

// Output Format

// Return the root node of the Binary Tree.

// Example Input

// Input 1:

//  A = [1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1]
// Input 2:

//  A = [1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1]

const deserialize = function (A) {
  if (A.length === 0) return null;
  const root = new TreeNode(A[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < A.length) {
    const node = queue.shift();
    if (A[i] !== -1) {
      node.left = new TreeNode(A[i]);
      queue.push(node.left);
    }
    i++;
    if (i < A.length && A[i] !== -1) {
      node.right = new TreeNode(A[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
};
