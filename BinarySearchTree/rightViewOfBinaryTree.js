// Problem Description

// Given a binary tree of integers denoted by root A. Return an array of integers representing the right view of the Binary tree.

// Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side.

// Problem Constraints

// 1 <= Number of nodes in binary tree <= 100000

// 0 <= node values <= 10^9

// Input Format

// First and only argument is head of the binary tree A.

// Output Format

// Return an array, representing the right view of the binary tree.

// Example Input

// Input 1:

//             1
//           /   \
//          2    3
//         / \  / \
//        4   5 6  7
//       /
//      8
// Input 2:

//             1
//            /  \
//           2    3
//            \
//             4
//              \
//               5

// Example Output

// Output 1:

//  [1, 3, 7, 8]
// Output 2:

//  [1, 3, 4, 5]

// observation: right view of a binary tree is the last node of each level in the level order traversal of the tree

const rightView = function (A) {
  if (A === null) return [];
  const queue = [A];
  const result = [];
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (i === size - 1) result.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return result;
};
