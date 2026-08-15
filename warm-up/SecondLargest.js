// QUES: write a function that returns second largest number in an array

function secondLargest(arr) {
  // handling corner cases for empty and array with just 1 elements
  if (arr.length < 2) {
    return "Array should have atleast 2 elements";
    // return null
    // return -1
  }

  let firstLargestNum = -Infinity;
  let secondLargestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNum) {
      secondLargestNum = firstLargestNum;
      firstLargestNum = arr[i];
    } else if (arr[i] > secondLargestNum && arr[i] != firstLargestNum) {
      // condition after && is for checking duplicate value of Largest number
      secondLargestNum = arr[i];
    }
  }
  return secondLargestNum;
}

let arr = [4, 6, 10, 20, 8, 20, 9, 3, 5, 20, 20];
let result = secondLargest(arr);
console.log(result);
