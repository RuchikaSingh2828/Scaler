// Given a linked list where every node represents a linked list and contains two pointers of its type:

// Pointer to next node in the main list (right pointer)
// Pointer to a linked list where this node is head (down pointer). All linked lists are sorted.
// You are asked to flatten the linked list into a single list. Use down pointer to link nodes of the flattened list. The flattened linked list should also be sorted.

// Problem Constraints

// 1 <= Total nodes in the list <= 100000

// 1 <= Value of node <= 109

// Input Format

// The only argument given is head pointer of the doubly linked list.

// Output Format

// Return the head pointer of the Flattened list.

// Example Input

// Input 1:

//    3 -> 4 -> 20 -> 20 ->30
//    |    |    |     |    |
//    7    11   22    20   31
//    |               |    |
//    7               28   39
//    |               |
//    8               39
// Input 2:

//    2 -> 4
//    |    |
//    7    11
//    |
//    7

// Example Output

// Output 1:

//  3 -> 4 -> 7 -> 7 -> 8 -> 11 -> 20 -> 20 -> 20 -> 22 -> 28 -> 30 -> 31 -> 39 -> 39
// Output 2:

//  2 -> 4 -> 7 -> 7 -> 11

// Example Explanation

// Explanation 1:

//  The return linked list is the flatten sorted list.

// This is structurally similar to merging K sorted linked lists.

// 🎯 Key Intuition

// Think of the input as:

// List1   →   List2   →   List3 → ...
//  |           |           |
// down        down        down

// Each vertical chain is sorted, and horizontal list connects multiple such chains.

// To flatten:

// Start with the first chain.

// Merge it with the second chain (sorted merge).

// Merge the result with the third chain.

// Continue until the right side ends.

// Sorting is preserved because we always merge two sorted lists at a time.
// This solution runs in:

// Time: O(N log K) (K = number of vertical lists), worst-case O(N²) if every merge is long, but acceptable for constraints.

// Space: O(1) extra (recursion stack apart).

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // right pointer
    this.down = null; // down pointer
  }
}

class NodeList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertDown(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.down) {
        current = current.down;
      }
      current.down = newNode;
    }
    this.size++;
  }

  insertNext(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Insert down at a specific position (1-based; position 1 = head)
  insertDownAt(position, data) {
    if (position < 1) return false;
    const newNode = new Node(data);

    if (!this.head || position === 1) {
      newNode.down = this.head;
      this.head = newNode;
      this.size++;
      return true;
    }

    let current = this.head;
    let i = 1;
    while (current.down && i < position - 1) {
      current = current.down;
      i++;
    }

    newNode.down = current.down;
    current.down = newNode;
    this.size++;
    return true;
  }

  // Insert down after a node with a given value
  insertDownAfterValue(existingValue, data) {
    let current = this.head;
    while (current) {
      if (current.data === existingValue) {
        const newNode = new Node(data);
        newNode.down = current.down;
        current.down = newNode;
        this.size++;
        return true;
      }
      current = current.down;
    }
    return false;
  }

  // Get node at a specific position in down chain (1-based)
  getNodeAt(position) {
    if (position < 1) return null;
    let current = this.head;
    let i = 1;
    while (current && i < position) {
      current = current.down;
      i++;
    }
    return current;
  }

  // Print vertical chain
  printDownChain() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.data);
      current = current.down;
    }
    console.log(values.join(' -> '));
  }
}

function mergeTwoLists(a, b) {
  if (!a) return b;
  if (!b) return a;

  let result;

  if (a.data < b.data) {
    result = a;
    result.down = mergeTwoLists(a.down, b);
  } else {
    result = b;
    result.down = mergeTwoLists(a, b.down);
  }
  result.next = null; // Ensure next pointer is null in merged list
  return result;
}

function flattenLinkedList(root) {
  if (!root || !root.next) {
    return root;
  }

  // Recur for list on right
  root.next = flattenLinkedList(root.next);

  // Merge this list with the list on right
  root = mergeTwoLists(root, root.next);

  return root;
}

// Test: Build the structure from the example
// 3 -> 4 -> 20 -> 20 -> 30
// |    |    |     |    |
// 7   11   22    20   31
// |               |    |
// 7              28   39
// |               |
// 8              39

// Helper: manually link nodes in down chain
function linkDown(node, ...values) {
  let current = node;
  for (let val of values) {
    const newNode = new Node(val);
    current.down = newNode;
    current = newNode;
  }
}

const list1 = new NodeList();
list1.insertNext(3);
list1.insertNext(4);
list1.insertNext(20);
list1.insertNext(20);
list1.insertNext(30);

// Build down chains for each horizontal node
let node = list1.head;
linkDown(node, 7, 7, 8); // 3: down 7 -> 7 -> 8

node = node.next;
linkDown(node, 11); // 4: down 11

node = node.next;
linkDown(node, 22); // 20: down 22

node = node.next;
linkDown(node, 20, 28, 39); // 20: down 20 -> 28 -> 39

node = node.next;
linkDown(node, 31, 39); // 30: down 31 -> 39

console.log('=== Original Structure ===');
console.log('Horizontal chain with down chains:');
let h = list1.head;
while (h) {
  console.log(`Node ${h.data}:`);
  let v = h;
  let values = [];
  while (v) {
    values.push(v.data);
    v = v.down;
  }
  console.log(`  Down: ${values.join(' -> ')}`);
  h = h.next;
}

console.log('\n=== Flattened Result ===');
const flattened = flattenLinkedList(list1.head);
let flatValues = [];
let flat = flattened;
while (flat) {
  flatValues.push(flat.data);
  flat = flat.down;
}
console.log(`Flattened: ${flatValues.join(' -> ')}`);
