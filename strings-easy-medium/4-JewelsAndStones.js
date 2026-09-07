// QUES: Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// APPROACH 1: using in-built JS functions
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) count++;
  }
  return count;
};

// include() has TIME COMPLEXITY of O(n)

// APPROACH 2
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++)
      if (jewels[i] === stones[j]) count++;
  }
  return count;
};

// ORRRRRRRRRR

var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++)
      if (jewels[j] === stones[i]) {
        count++;
        break;
      }
  }
  return count;
};

// TIME COMPLEXITY: m= length of jewels, n=length of stones => O(m)*n => O(m*n)
// SPACE COMPLEXITY: O(1)

// APPROACH 3: using set

var numJewelsInStones = function (jewels, stones) {
  let jSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) count++;
  }
  return count;
};

// SET has TIME COMPLEXITY of O(1)
// TIME COMPLEXITY: O(1)*n => O(n)
// SPACE COMPLEXITY: Set cannot have duplicates. Since set will store jewels and jewels can only contain english alphabets (case sensitive) thus, total values that jewels set can have = 26 (a-z) + 26 (A-Z) = 52 elements (constant) => O(1)
