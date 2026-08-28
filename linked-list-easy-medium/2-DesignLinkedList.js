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

// _____________________________________

// 3. Adding node at head

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// _____________________________________

// 4. Adding node at tail

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  // if LL is empty
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

// 1. create a new node
// 2. reach the last node
// 3. link last to new node
// 4. handle corner case
// 5. increase size

// _____________________________________

// 5. Adding node at an index

MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);

  // if index is out of bound
  if (index < 0 || index > this.size) return;

  // if LL is empty
  if (index == 0) {
    this.addAtHead(val);
    return;
  }
  // if we want to insert at tail
  else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

// 1. create a new node
// 2. reach at (index-1) = curr
// 3. newNode.next = curr.next [POINT NUMBER 3 & 4 can't be switched]
// 4. curr.next = newNode
// 5. handle corner case
// 6. increase the size

// _____________________________________

// 6. Get the value at index

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

// _____________________________________

// 7. Delete the value at index

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }

  this.size--;
};

// 1. reach the (index-1) for deletion
// 2. link it to the new next node (2 step ahead)
// 3. handle corner cases
// 4. reduce the size

// _____________________________________
