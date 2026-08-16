// QUES: write a function that returns the palindrome of a number

var isPalindrome = function (x) {
  // handling negative input
  if (x < 0) return false;

  // storing original number for comparision
  let xCopy = x;

  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }

  if (rev == xCopy) return true;
  else return false;

  //   ORRRRR
  //   return rev === xCopy;
};

let num = 101;
let result = isPalindrome(num);
console.log(result);
