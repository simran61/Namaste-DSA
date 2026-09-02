// QUES: Remove Nth Node From End of List - Two Pass

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
  let sentinel = new ListNode();
  sentinel.next = head;

  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  //   delete position => (length-n) + 1
  // previous position => delete position -1 => ((legth-n)+1)-1
  let prevPos = length - n;

  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return sentinel.next;
};

// TIME COMPLEXITY: O(n+n) => O(2n) => O(n)
// SPACE COMPLEXITY: O(1)
