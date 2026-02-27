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

// helper constructor for tree nodes
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function verticalOrderTraversal(A) {
  if (!A) return [];
  let queue = [[A, 0]];
  let map = new Map();
  let min = 0,
    max = 0;
  while (queue.length) {
    let [node, level] = queue.shift();
    if (!map.has(level)) {
      map.set(level, []);
    }
    map.get(level).push(node.val);
    min = Math.min(min, level);
    max = Math.max(max, level);
    if (node.left) {
      queue.push([node.left, level - 1]);
    }
    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(map.get(i));
  }
  return result;
}

// --- sample usage --------------------------------------------------
// the function expects a proper binary tree (nodes with .val/.left/.right),
// not a plain JavaScript array. passing an array will lead to `node.val`
// being undefined, which is why you saw `undefined` in your output.

// build the example tree from the problem description:
//       6
//     /   \
//    3     7
//   / \     \
//  2   5     9
const root = new TreeNode(
  6,
  new TreeNode(3, new TreeNode(2), new TreeNode(5)),
  new TreeNode(7, null, new TreeNode(9)),
);

console.log(verticalOrderTraversal(root));
// => [ [2], [3], [6,5], [7], [9] ]
// (prints the correct vertical order traversal)

// if you really want to convert a level-order array into a tree,
// write a small converter separately and pass its result here.
