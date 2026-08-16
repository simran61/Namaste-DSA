// QUES: write a function that returns the count of digits in a number

function countDigits(n) {
  // handling zero case
  if (n == 0) return 1;

  // handling negative numbers
  n = Math.abs(n);

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = -259;
let result = countDigits(num);
console.log(result);
