// QUES: Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Example 3:
// Input: n = 3
// Output: false

// APPROACH

// 1. If (n) is power of 2 then if we keep diving it by 2 it reaches 1
// For example: 16/2 => 8/2 => 4/2 => 2/2 => 1

// 2. Odd number can never be power of 2
// FOr example: 3, 5, 538721

// 3. If on diving it comes less than 1 then it is not power of 2
// For example: 6/2 => 3/2 => 1.5/2 => 0.75 < 1

function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n % 2 != 0 || n < 1) return false;

  return powerOfTwo(n / 2);
}

let result = powerOfTwo(16);
console.log(result);
