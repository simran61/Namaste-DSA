// QUES: Write a function that returns factorial of n using recursion

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

let result = factorial(5);
console.log(result);
