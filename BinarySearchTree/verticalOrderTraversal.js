// Problem Description
// Given a binary tree, return a 2-D array with vertical order traversal of it. Go through the example and image for more details.

// NOTE: If 2 Tree Nodes shares the same vertical level then the one with lesser depth will come first.

// Problem Constraints
// 0 <= number of nodes <= 105

// Input Format
// First and only arument is a pointer to the root node of binary tree, A.

// Output Format
// Return a 2D array denoting the vertical order traversal of tree as shown.

// Example Input
// Input 1:

//       6
//     /   \
//    3     7
//   / \     \
//  2   5     9
// Input 2:

//       1
//     /   \
//    3     7
//   /       \
//  2         9

// Example Output
// Output 1:

//  [
//     [2],
//     [3],
//     [6, 5],
//     [7],
//     [9]
//  ]
// Output 2:

//  [
//     [2],
//     [3],
//     [1],
//     [7],
//     [9]
//  ]

// Example Explanation
// Explanation 1:

//  First row represent the verical line 1 and so on.

import BinarySearchTree from './BST.js';

const bst = new BinarySearchTree();
const nodes = [8262, -1, 411, -1, -1];
for (const value of nodes) {
  if (value !== -1) {
    bst.insert(value);
  }
}

const verticalOrderTraversal = (A) => {
  const queue = [[0, A]];
  const hashMap = new Map();
  const res = [];
  let maxLevel = -Infinity;
  let minLevel = Infinity;
  while (queue.length > 0) {
    let hrLevSize = queue.length;

    while (hrLevSize--) {
      let [verLeveL, node] = queue.shift();
      minLevel = Math.min(minLevel, verLeveL);
      maxLevel = Math.max(maxLevel, verLeveL);
      if (hashMap.has(verLeveL)) {
        const levelDatas = hashMap.get(verLeveL);
        levelDatas.push(node.data);
        hashMap.set(verLeveL, levelDatas);
      } else {
        hashMap.set(verLeveL, [node.value]);
      }

      if (node.left) {
        const level = verLeveL - 1;
        minLevel = Math.min(minLevel, level);
        queue.push([level, node.left]);
      }
      if (node.right) {
        const level = verLeveL + 1;
        maxLevel = Math.max(maxLevel, level);
        queue.push([level, node.right]);
      }
    }
  }
  for (let i = minLevel; i <= maxLevel; i++) {
    const datas = hashMap.get(i);
    res.push(datas);
  }
  return res;
};

console.log(verticalOrderTraversal(bst.root));

// output [8262 ] [411 ]
