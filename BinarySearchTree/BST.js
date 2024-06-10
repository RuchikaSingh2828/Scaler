export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null; //since in the begining it will not have any nodes
  }

  isEmpty() {
    //returning true if root points to null instead of any node
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    //if the tree is empty the new node should become the thr root of the tree
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = []; //here we are relying on an array for queue operations for si mplicity but relyin on array leads to heigher TC thus use the optimised queue implimentation;
    queue.push(this.root);
    while (queue.length) {
      // dequeueing and storing the reference in a temporary pointer
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === value) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // value === root.value thus we wil handle the three conditions
      // node with no children
      if (!root.left && !root.right) {
        return null;
      }

      // node with one children - remove the node and replace it with its child node
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      // node with two children - we copy the value of the in-order successor to the node and delete the inorder successor
      // in order successor is the min value in the right sub tree
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
}

// const bst = new BinarySearchTree();
// console.log(`Tree is Empty ?  -  ${bst.isEmpty()}`);

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(11);
// bst.insert(7);
// bst.insert(21);
// bst.insert(3);

// console.log(bst.search(bst.root, 17));
// console.log(bst.preOrder(bst.root));
// console.log(bst.inOrder(bst.root));
// console.log(bst.postOrder(bst.root));
//bst.levelOrder();
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// console.log(bst.delete(15));
// bst.levelOrder();
