// QUES 1: write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

function searchElement(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}

let arr = [2, 4, 6, 78, 43, 9];

let result = searchElement(arr, 78);
console.log(result);

// QUES 2: write a function that return the number of negative numbers in an array

function countNegatives(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
      // count = count + 1
      // ++count
    }
  }

  return count;
}

let arr = [2, -5, 7, -30, -46, 0, 18, 72];

let result = countNegatives(arr);
console.log(result);

// QUES 3: write a function that returns the largest number in an array

function findLargest(arr) {
  // let largest = -1         // considering only positive array
  // let largest = arr[0]
  let largest = -Infinity; // any number present in my array would always be greater than -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [-5, -2, -7, -10, -8, -17, -19];
let result = findLargest(arr);
console.log(result);

// QUES 4: write a function that returns the smallest number in an array

function findSmallest(arr) {
  //    let smallest =arr[0]
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

let arr = [-5, -2, -7, -10, -8, -17, -19];
let result = findSmallest(arr);
console.log(result);
