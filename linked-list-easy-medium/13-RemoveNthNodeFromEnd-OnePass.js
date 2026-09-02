// QUES: Remove Nth Node From End - One Pass

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// ________________________________________

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // add sentinel node at start
  let sentinel = new ListNode();
  sentinel.next = head;

  // move my first pointer ahead by n
  let first = sentinel;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  // move both pointer until first pointer reaches the last node
  let second = sentinel;
  while (first.next) {
    second = second.next;
    first = first.next;
  }

  // just delete second.next
  second.next = second.next.next;
  return sentinel.next;
};

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
