// QUES: Write a recursive function to find the sum of first n numbers

let arr = [5, 3, 2, 0, 1];

function sum(n) {
  if (n == 0) {
    return arr[n];
    // return arr[0];
  }
  return arr[n] + sum(n - 1);
}

let result = sum(arr.length - 1);
console.log(result);

// sum(4) => 1+sum(3) => 1+[0+sum(2)] => 1+[0+[2+sum(1)]] => 1+[0+[2+[3+sum(0)]]] => 1+[0+[2+[3+5]]]

// QUES: Write a recursive function to find the sum of first n numbers

let arr2 = [5, 4, 7, 2, 0, 1];

// USING IF-ELSE
// function sum(n) {
//   let isOdd = arr[n] % 2 != 0;
//   if (n == 0) {
//     if (isOdd) return arr[n];
//     else return 0;
//   }
//   if (isOdd) return arr[n] + sum(n - 1);
//   else return 0 + sum(n - 1);
// }

// SAME BUT USING TERNARY OPERATOR
function sum(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return isOdd ? arr[n] + sum(n - 1) : 0 + sum(n - 1);
}

// SAME AS TERNARY OPERATOR BUT WITH COMMON "sum(n - 1)" IN LAST RETURN STATEMENT
// function sum(n) {
//   let isOdd = arr[n] % 2 != 0;
//   if (n == 0) {
//     return isOdd ? arr[n] : 0;
//   }
//   return (isOdd ? arr[n] : 0) + sum(n - 1);
// }

let result2 = sum(arr.length - 1);
console.log(result);
