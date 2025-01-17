//   Problem Description
//   Given a binary tree, return the preorder traversal of its nodes values.

//   Problem Constraints
//   1 <= number of nodes <= 105

//   Input Format
//   First and only argument is root node of the binary tree, A.

//   Output Format
//   Return an integer array denoting the preorder traversal of the given binary tree.

//   Example Input
//   Input 1:

//      1
//       \
//        2
//       /
//      3
//   Input 2:

//      1
//     / \
//    6   2
//       /
//      3

//   Example Output
//   Output 1:

//    [1, 2, 3]
//   Output 2:

//    [1, 6, 2, 3]

//   Example Explanation
//   Explanation 1:

//    The Preoder Traversal of the given tree is [1, 2, 3].
//   Explanation 2:

//    The Preoder Traversal of the given tree is [1, 6, 2, 3].

// 129 97 98 93 106 27 61 -1 173 40 78 22 152 99 114 47 69 -1 -1 110 144 14 56 165 174 49 1 57 126 123 100 30 -1 -1 -1 161 13 139 2 85 128 119 177 -1 169 135 77 112 50 17 140 138 58 -1 -1 105 -1 -1 -1 -1 70 -1 -1 102 -1 -1 103 -1 176 -1 -1 115 132 154 125 5 -1 108 36 32 7 -1 -1 148 -1 153 16 130 72 -1 -1 95 116 48 104 -1 -1 20 156 -1 -1 88 -1 142 175 -1 64 133 83 94 -1 4 71 101 -1 -1 -1 -1 42 -1 -1 -1 -1 134 166 28 92 33 82 74 45 -1 -1 168 -1 9 -1 44 26 -1 -1 170 6 -1 -1 89 143 160 -1 68 178 111 167 -1 109 151 -1 -1 -1 81 23 -1 -1 -1 -1 -1 -1 66 11 10 179 15 96 -1 127 18 163 -1 -1 24 29 -1 -1 -1 -1 -1 34 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 21 118 -1 31 -1 35 -1 37 -1 122 162 3 -1 -1 -1 121 59 -1 -1 -1 19 158 157 -1 171 84 46 149 -1 -1 -1 -1 76 147 54 150 -1 -1 -1 -1 63 62 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 86 43 55 -1 -1 -1 -1 172 120 -1 -1 91 155 8 107 -1 -1 -1 164 -1 -1 113 -1 73 137 -1 -1 39 -1 -1 41 -1 -1 -1 75 146 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 90 -1 145 -1 -1 117 51 -1 -1 136 -1 79 80 -1 53 52 -1 -1 -1 159 -1 -1 -1 60 -1 -1 -1 131 -1 38 12 -1 -1 -1 -1 124 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 67 65 -1 87 -1 25 -1 141 -1 -1 -1 -1
// Arg 1: A Binary Tree, -1 signifies a NULL child, For e.g 6 9 4 -1 -1 8 -1 -1 3 -1 -1
//   6
//  /   \
// 9     4
//      /
//     8
//      \
//       3

// Definition for a  binary tree node
function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

import BinarySearchTree from './BST.js';

const bst = new BinarySearchTree();
const nodes = [
  129, 97, 98, 93, 106, 27, 61, -1, 173, 40, 78, 22, 152, 99, 114, 47, 69, -1,
  -1, 110, 144, 14, 56, 165, 174, 49, 1, 57, 126, 123, 100, 30, -1, -1, -1, 161,
  13, 139, 2, 85, 128, 119, 177, -1, 169, 135, 77, 112, 50, 17, 140, 138, 58,
  -1, -1, 105, -1, -1, -1, -1, 70, -1, -1, 102, -1, -1, 103, -1, 176, -1, -1,
  115, 132, 154, 125, 5, -1, 108, 36, 32, 7, -1, -1, 148, -1, 153, 16, 130, 72,
  -1, -1, 95, 116, 48, 104, -1, -1, 20, 156, -1, -1, 88, -1, 142, 175, -1, 64,
  133, 83, 94, -1, 4, 71, 101, -1, -1, -1, -1, 42, -1, -1, -1, -1, 134, 166, 28,
  92, 33, 82, 74, 45, -1, -1, 168, -1, 9, -1, 44, 26, -1, -1, 170, 6, -1, -1,
  89, 143, 160, -1, 68, 178, 111, 167, -1, 109, 151, -1, -1, -1, 81, 23, -1, -1,
  -1, -1, -1, -1, 66, 11, 10, 179, 15, 96, -1, 127, 18, 163, -1, -1, 24, 29, -1,
  -1, -1, -1, -1, 34, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, 118,
  -1, 31, -1, 35, -1, 37, -1, 122, 162, 3, -1, -1, -1, 121, 59, -1, -1, -1, 19,
  158, 157, -1, 171, 84, 46, 149, -1, -1, -1, -1, 76, 147, 54, 150, -1, -1, -1,
  -1, 63, 62, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 86, 43, 55, -1, -1, -1,
  -1, 172, 120, -1, -1, 91, 155, 8, 107, -1, -1, -1, 164, -1, -1, 113, -1, 73,
  137, -1, -1, 39, -1, -1, 41, -1, -1, -1, 75, 146, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, 90, -1, 145, -1, -1, 117, 51, -1, -1, 136, -1, 79, 80,
  -1, 53, 52, -1, -1, -1, 159, -1, -1, -1, 60, -1, -1, -1, 131, -1, 38, 12, -1,
  -1, -1, -1, 124, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 67, 65, -1, 87,
  -1, 25, -1, 141, -1, -1, -1, -1,
];

for (const value of nodes) {
  if (value !== -1) {
    bst.insert(value);
  }
}

const preorderTraversal = function (A) {
  let ans = [];
  let stack = [];
  stack.push(A);
  while (stack.length !== 0) {
    const node = stack.pop();
    ans.push(node.value); // storing node
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return ans;
};

console.log(preorderTraversal(bst.root));
