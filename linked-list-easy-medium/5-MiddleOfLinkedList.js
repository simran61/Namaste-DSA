// QUES: Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// APPROACH 1
// 1. convert this LL to an array
// 2. return arr[length/2]

// APPROACH 2: slow & fast pointer
// slow pointer: 1 step
// fast pointer: 2 step

var middleNode = function (head) {
  let slow = head;
  let fast = head;
  //  let slow = fast = head;

  while (fast != null && fast.next != null) {
    //   while (fast && fast.next) {      // run this loop till fast exists, or till fast is not null, not undefined or not false
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// TIME COMPLEXITY => O(n/2) => cause loop is running half time which is kinda equal to O(n)
// SPACE COMPLEXITY => O(1)
