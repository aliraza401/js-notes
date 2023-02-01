// Linked List
// Arrary(static) double-up then increasing size their limit is increased and shifted to new memory.

// List that is linked.
// set of nodes.
// two parts data and pointer.
// start is head and end is tail.
// Null terminated.

const basket = ["apple", "banana", "grape"];
// (2343)[apple]-- > (3254)[banana]-- > (4543)[grape]-- > null;

// Why linked list::
// 1. Are dynamic.
// 2. Insert anything anywhere.
// 3. Different elements can be at different memory spaces no need to be in order in memeory.

// Pointer:
// referance to memory location.
const obj1 = { a: 12 };
const obj2 = obj1; //ref to obj1

// Linked list simple example
const myLinkedList = {
  head: {
    value: "12",
    pointer: { value: "122", pointer: null },
  },
};

// Create Linked List
const getNode = data => ({value: data, next: null});

class LinkedList {
  constructor(data) {
    const newNode = getNode(data);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  append(data) {
    const newNode = getNode(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this
  }
  prepend(data) {
    const newNode = getNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this
  }
  insert(index, data) {
    if(index > this.length) return this.append(data);
    if(index === 1) return this.prepend(data);

    let currentNode = this.head;
    let counter = 1;
    while(currentNode !== null) {
      if(counter === index) {
        const newNode = getNode(data);
        const successorNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = successorNode;
        this.length += 1;

      }
      currentNode = currentNode.next;
      counter += 1;
    }
  }
  remove(index) {
    if(index > this.length) return 'Invalid Index';
    let counter = 1;
    let currentNode = this.head;
    while(currentNode !== null) {
      if(counter === index) {
        const toBeDeletedNode = currentNode.next;
        currentNode.next = toBeDeletedNode.next;
        this.length -= 1;
      }
      counter++;
      currentNode = currentNode.next;
    }
  }
  printNode() {
    let currentNode = this.head;
    let arr = [];
    while(currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    } 
    console.log(arr);
  }
}

const list = new LinkedList(15);
list.append(11);
list.append(100);
list.append(110);
list.prepend(12);

// list.remove(1);

list.printNode();

// console.log();
