# Programming 101

```javascript
console.log("Hello World");
console.log("Simran Gangwani");
```

## Datatypes in JavaScript

```javascript
"simran"; //string
7; //number
("7"); //string
true / false; //boolean
```

## Storing data into variables

```javascript
const a = 10;
const b = 20;

const sum = a + b;
const multiply = a * b;
const difference = a - b;

console.log(sum); //30
console.log(multiply); //200
console.log(difference); //-10
```

## Difference between const and let

```javascript
// ERROR
const a = 10;
a = 20;
```

```javascript
let x = 20;
console.log(x); //20
x = 30;
console.log(x); //30
```

- If we have declared a `const` variable, we cannot change it later, wherethis is not a problem with `let`

## String Concatenation

```javascript
let firstName = "Simran";
let lastName = "Gangwani";

let fullName = firstName + " " + lastName;

console.log(fullname); //Simran Gangwani
```

```javascript
let firstName = "Simran";
let num = "4";

let result = firstName + " " + num;

console.log(result); //Simran 4
```

```javascript
let num1 = 3;
let num2 = 1;

let result = num1 + " " + num2;

console.log(result); //3 1
```

```javascript
let num1 = 3;
let num2 = 1;

let result = num1 + num2;

console.log(result); //4
```

<hr/>

- any javascript code can only be executed inside a JS engine. JS engine understands your code and executes it line by line

```javascript
let firstName = 3;
let lastName = 7;

firstName = "Simran";

let fullName = firstName + lastName;

console.log(fullName); //Simran7
```

## Arrays

- a normal variable can store a single value, but an array can store multiple values
- in some programming languages this data structure is also called `list`.

```javascript
let arr = [2, 6, 0, 100, 9, 27];
console.log(arr); //2, 6, 0, 100, 9, 27

console.log(arr[2]); //0
console.log(arr[4]); //9
console.log(arr[6]); //undefined

let sum = arr[0] + arr[4];
console.log(sum); //11
```

```javascript
let arr = ["akshay", 7, "simran", -3, true, "xyz", false, [5, 10, [2, 30]]];
console.log(arr[1]); //7
console.log(arr[5]); //xyz
console.log(arr[6]); //false
console.log(arr[7]); //5, 10
console.log(arr[7][0]); //5
console.log(arr[7][2][1]); //30
```

### How does JS stores this array

- JS kinds of creates a mapping / creates a table and it stores an index and for each index there is a value.
- Indices are automatically defined, we don't have control over the index

## Objects in JavaScript

- Object contains key-value pairs

```javascript
let obj = {
  a: 7,
  firstName: "Simran",
  lastName: "Gangwani",
  bool: true,
  arr: [6, 7, 8],
};

console.log(obj.a); //7
console.log(obj.firstName); //Simran
console.log(obj.bool); //true
console.log(obj.arr); //6,7,8

console.log(obj.firstname + obj.lastName); //SimranGangwani
```
