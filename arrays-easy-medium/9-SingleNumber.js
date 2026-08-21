// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// APPROACH 1
function singleNumber(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
  //   ORRRR simply loop over the obj but remeber to conver key from string to number before returning
  // for (const key in hash) {
  //     if (hash[key] == 1) {
  //         return Number(key)
  //     }
  // }
}

let nums = [4, 1, 2, 1, 2];
let result = singleNumber(nums);
console.log(result);

// **********************
// APPROACH 2 - Bitwise XOR : it compares two numbers bit by bit using their binary representations.
// a (XOR) 0 = a
// a (XOR) a = 0

function singleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}
