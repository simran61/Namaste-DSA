// QUES: Design Linked List

// 1. Creating nodes in LL

// 👇🏻 representing a node / function to create a node
function Node(val) {
  this.val = val;
  this.next = null; //initially if this node is independent & it is not a part of any list so it should point to null
}

// 👇🏻 creating a node
let newNode = new Node(5); //we are creating a new instance of the "Node" & we are initializing it with value "5"

// _____________________________________

// 2. Creating a LL

// Linked List is a represention of its head
// 👇🏻 representing a LL / initializing your LL with 0
function MyLinkedList() {
  this.head = null; //suppose this is a new/empty LL so its head will be pointing to null
  this.size = 0;
}
