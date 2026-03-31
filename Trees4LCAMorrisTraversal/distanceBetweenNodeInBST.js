// Problem Description

// Given a binary search tree.
// Return the distance between two nodes with given two keys B and C. It may be assumed that both keys exist in BST.

// NOTE: Distance between two nodes is number of edges between them.

// Problem Constraints

// 1 <= Number of nodes in binary tree <= 1000000

// 0 <= node values <= 109

// Input Format

// First argument is a root node of the binary tree, A.

// Second argument is an integer B.

// Third argument is an integer C.

// Output Format

// Return an integer denoting the distance between two nodes with given two keys B and C

// Example Input

// Input 1:

//          5
//        /   \
//       2     8
//      / \   / \
//     1   4 6   11
//  B = 2
//  C = 11
// Input 2:

//          6
//        /   \
//       2     9
//      / \   / \
//     1   4 7   10
//  B = 2
//  C = 6

// Example Output

// Output 1:

//  3
// Output 2:

//  1

// Example Explanation

// Explanation 1:

//  Path between 2 and 11 is: 2 -> 5 -> 8 -> 11. Distance will be 3.
// Explanation 2:

//  Path between 2 and 6 is: 2 -> 6. Distance will be 1

function distanceBetweenNodes(A, B, C) {
  const findLCA = (root, B, C) => {
    if (root === null) {
      return null;
    }
    if (root.val > B && root.val > C) {
      return findLCA(root.left, B, C);
    }
    if (root.val < B && root.val < C) {
      return findLCA(root.right, B, C);
    }
    return root;
  };

  const findDistance = (root, key) => {
    if (root === null) {
      return -1;
    }
    if (root.val === key) {
      return 0;
    } else if (root.val > key) {
      const leftDistance = findDistance(root.left, key);
      return leftDistance === -1 ? -1 : leftDistance + 1;
    } else {
      const rightDistance = findDistance(root.right, key);
      return rightDistance === -1 ? -1 : rightDistance + 1;
    }
  };

  const lca = findLCA(A, B, C);
  if (lca === null) {
    return -1; // If LCA doesn't exist, return -1
  }

  const distanceB = findDistance(lca, B);
  const distanceC = findDistance(lca, C);

  if (distanceB === -1 || distanceC === -1) {
    return -1; // If either B or C is not found in the tree, return -1
  }

  return distanceB + distanceC;
} 