// Two elements of a Binary Search Tree (BST), represented by root A are swapped by mistake. Tell us the 2 values, when swapped, will restore the Binary Search Tree (BST).

// A solution using O(n) space is pretty straightforward. Could you devise a constant space solution?

// Note: The 2 values must be returned in ascending order

// Problem Constraints

// 1 <= size of tree <= 100000

// Input Format

// First and only argument is the head of the tree,A

// Output Format

// Return the 2 elements which need to be swapped.

// Example Input

// Input 1:

//          1
//         / \
//        2   3
// Input 2:

//          2
//         / \
//        3   1

// Example Output

// Output 1:

//  [2, 1]
// Output 2:

//  [3, 1]

// Example Explanation

// Explanation 1:

// Swapping 1 and 2 will change the BST to be
//          2
//         / \
//        1   3
// which is a valid BST
// Explanation 2:

// Swapping 1 and 3 will change the BST to be
//          2
//         / \
//        1   3
// which is a valid BST

function recoverTree(A) {
  const morrisTraversal = (root) => {
    let curr = root;
    let ans = [];
    while (curr !== null) {
      if (curr.left == null) {
        ans.push(curr.data);
        curr = curr.right;
      } else {
        temp = curr.left;
        while (temp.right !== null && temp.right !== curr) {
          temp = temp.right;
        }
        if (temp.right == null) {
          temp.right = curr;
          curr = curr.left;
        } else if (temp.right === curr) {
          temp.right = null;
          ans.push(curr.data);
          curr = curr.right;
        }
      }
    }
    return ans;
  };

  let traversedArray = morrisTraversal(A);
  // return traversedArray;
  let first = -1;
  let mid = -1;
  let last = -1;
  for (let i = 0; i < traversedArray.length - 1; i++) {
    if (traversedArray[i] > traversedArray[i + 1]) {
      if (first === -1) {
        //first inversion
        first = traversedArray[i];
        mid = traversedArray[i + 1];
      } else {
        last = traversedArray[i + 1];
      }
    }
  }

  return last === -1 ? [mid, first] : [last, first];
}
