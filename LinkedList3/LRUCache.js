import { DoublyNode, DoublyLinkedList } from './doublyLinkedList.js';

export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.list = new DoublyLinkedList();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const node = this.cache.get(key);
    this.list.deleteNode(node);
    this.list.prepend(node);
    return node.value.value;
  }
  set(key, value) {
    if (this.cache.has(key)) {
      const existingNode = this.cache.get(key);
      this.list.deleteNode(existingNode);
      existingNode.value.value = value;
      this.list.prepend(existingNode);
    } else {
      if (this.list.length === this.capacity) {
        const tailNode = this.list.deleteTailNode();
        this.cache.delete(tailNode.value.key);
      }
      const newNode = new DoublyNode({ key, value });
      this.list.prepend(newNode);
      this.cache.set(key, newNode);
    }
    return;
  }
}
//6 1 |S 2 1 |S 2 2 |G 2 |S 1 1 |S 4 1 |G 2
let lru = new LRUCache(1);
lru.set(2, 1);
lru.set(2, 2);
console.log(lru.get(2)); //2
lru.set(1, 1);
lru.set(4, 1);
console.log(lru.get(2)); //-1
