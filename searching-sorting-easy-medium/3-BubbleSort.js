// QUES: Bubble Sort

let arr = [5, 4, 9, 15, 7, 1, 0];

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));

// Time Complexity => O(n^2)
// Space Complexity => constant => O(1)

// MORE OPTIMIZED SOLUTION 👇🏻 (if array values are not getting swapped in one whole iteration if j that means the array is already sorted and there is no need to perform more i iterations and thus we can break the loop)

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}
