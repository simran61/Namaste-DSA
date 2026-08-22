// Recursion: function  calls itself to solve smaller version of the same problem

// Two parts of recursion:
// 1. Base Case: stop condition (when to stop calling itself)
// 2. Recursive Case: part where function calls itself

// Infinte recursion leads to STACK OVERFLOW

// Real life examples:
// 1. Queue of people
// 2. Comment threads
// 3. Organisational Hierarchies

// Common Mistakes
// 1. Missing Base Case - Leads to Stack Overflow
// 2. Not simplifying the input - otherwise never reaches base case
// 3. Too deep recursion - Large Inputs
// 4. Keeping in mind the Time Complexity - if we are printing from 1 to n using a for-loop or using recursion, both of them will have a time complexity of O(n), as the function is running n-times

// When to use recursion
// 1. Problem can be broken into sub problems
// 2. Trees & Graphs
// 3. Backtracking, DP, Divide & Conquer

// _________________________________________________________

// QUES 1: Print n.....to....1 using recursion
function print(n) {
  if (n < 1) return;
  console.log(n);
  print(--n);
  // ORRR
  // n = n - 1
  // print(n)
  // *****
  // print(n--) this will not work, it will just give 10, 10, 10 ..... infinitely
}

let num = 10;
print(num);

// QUES 2: Print 1 to n using recursion
let n = 5;

function print(x) {
  if (x > 10) return;
  console.log(x);
  print(++x);
  // ORRRR
  // x = x + 1
  // print(x)
}

print(1);
