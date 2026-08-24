// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// APPROACH 1: ITERATIVE APPROACH

// APPROACH 2: RECURSIVE APPROACH
// this will create a recursion tree with 2 branches each (since we are calling the function 2 times), untill it reaches the base case

// Fibonacci Series => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, .....
// f(n) = f(n-1) + f(n-2)

var fib = function (n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));

// ORRRRRRRRR

var fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));

// n => 2n => 4n => 8n => 16n => ....
// n * 2 * 2 * 2 * 2 .....1
// n * (2^x) = 1
// Time complexity = O(2^n)   => very bad (better with DP)

// ***** EXPLORE RABIT POPULATION QUESTION *****
