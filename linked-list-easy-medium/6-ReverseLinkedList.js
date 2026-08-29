// QUES: Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    //   while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev; //this line can be removed & we can directly `return prev` as we just need to return the first node, & prev is now pointing to our first node
  return head;
};
