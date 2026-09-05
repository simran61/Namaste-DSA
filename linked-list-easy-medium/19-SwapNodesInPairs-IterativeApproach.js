// QUES: Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

// Example 4:
// Input: head = [1,2,3]
// Output: [2,1,3]

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  dummy.next = head;

  let p = dummy;
  let c = head;
  let n = head.next;

  while (c && n) {
    p.next = n;
    c.next = n.next;
    n.next = c;

    p = c;
    c = p.next;
    n = c && c.next;
  }
  return dummy.next;
};

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
