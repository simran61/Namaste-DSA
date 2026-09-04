// QUES: Rotate List

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  // calculate length
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  // to avoid unnecesary rotations
  k = k % length;

  let s = head;
  let f = head;
  // move f pointer k steps ahead
  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  // reaching the end of the list
  while (f.next) {
    s = s.next;
    f = f.next;
  }

  f.next = head;
  let newHead = s.next;

  s.next = null;

  return newHead;
};

// TIME COMPLEXITY: O(n+n) => O(2n) => O(n)
// SPACE COMPLEXITY: O(1)
