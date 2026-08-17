function printHelloWorld() {
  console.log("Hello World");
}

printHelloWorld(); //Hello World

// **********************

function greet(name) {
  console.log("Namaste " + name);
}

greet("Simran"); //Namaste Simran
greet("Mickey"); //Namaste Mickey

let x = "Simran Gangwani";
greet(x); //Namaste Simran Gangwani

// **********************

function sum(a, b) {
  let add = a + b;
  console.log(add);
}

sum(7, 10); //17

let x = 10;
let y = 30;
let z = 20;

sum(x, y); //40
sum(z, y); //50

// QUES: Write a function that returns square of a number

function square(x) {
  let result = x * x;
  return result;
}

let value = square(2);
console.log(value); //4

let value2 = square(-3);
console.log(value2); //9

let z = square(99);
z = z + 2;
console.log(z); //9803

// QUES: create a function that accepts the age & tells whether a person is eligible to vote or not

function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid Input");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

console.log(eligibleToVote(10)); //Not eligible to vote
console.log(eligibleToVote(18)); //Eligible to vote
console.log(eligibleToVote(20)); //Eligible to vote
console.log(eligibleToVote(-1)); //Invalid Input

// QUES: crete a function to check if a number is even or odd

function isEvenOdd(num) {
  let rem = num % 2;
  if (rem == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

isEvenOdd(6); //Even Number
isEvenOdd(7); //Odd Number
