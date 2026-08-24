// QUES: Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

let nums = [-1, 0, 3, 5, 9, 12];

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) return middle;
    else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

let target = 3;
let result = binarySearch(nums, target);
console.log(result);

// n * 1/2 * 1/2 * 1/2 * ..... x = 1
// n/(2^x) = 1
// n= 2^x
// x = (Log Base 2) n

// Thus Time Complexity => O(log n) => Logrethmic
// Space Complexity => O(3) = O(1) = Constant

// For example if n = 10 then, 10/5/2/1 => 3 iterations
// For example if n = 100 then, 100/50/25/12/6/3/1 => 6 iterations
