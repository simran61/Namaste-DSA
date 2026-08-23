// QUES: Write a recursive function to find the sum of first n numbers

function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

let result = sum(5);
console.log(result);

// RECURSIVE TREE
// sum(5) => 5+sum(4) => 5+[4+sum(3)] => 5+[4+[3+sum(2)]] => 5+[4+[3+[2+sum(1)]]] => 5+[4+[3+[2+[1+sum(0)]]]] => 5+[4+[3+[2+[1+0]]]]
// 5+[4+[3+[2+[1+0]]]] => 5+[4+[3+[2+1]]] => 5+[4+[3+3]] => 5+[4+6] => 5+10 => 15
