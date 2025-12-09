export class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
export class DoublyLinkedList {
  constructor() {
    this.head = new DoublyNode(null);
    this.tail = new DoublyNode(null);
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.length = 0;
  }

  append(newNode) {
    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
    this.length++;
  }

  prepend(newNode) {
    newNode.next = this.head.next;
    newNode.prev = this.head;
    this.head.next.prev = newNode;
    this.head.next = newNode;
    this.length++;
  }
  deleteNode(node) {
    // If someone calls deleteNode(this.head.next) (which is this.tail), node === this.tail is true → returns null.
    // If deleteHeadNode() or deleteTailNode() are called they already check this.length === 0 and return before calling deleteNode.
    if (this.length === 0 || +node === this.head || +node === this.tail)
      return null;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return node;
  }

  deleteTailNode() {
    if (this.length === 0) return null;
    const tailNode = this.tail.prev;
    this.deleteNode(tailNode);
    return tailNode;
  }

  deleteHeadNode() {
    if (this.length === 0) return null;
    const headNode = this.head.next;
    this.deleteNode(headNode);
    return headNode;
  }

  findNode(value) {
    let currentNode = this.head.next;
    while (currentNode !== this.tail) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  printList() {
    let currentNode = this.head.next;
    const values = [];
    while (currentNode !== this.tail) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(' <-> '));
  }
}
