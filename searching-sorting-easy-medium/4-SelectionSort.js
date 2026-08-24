// QUES: Selection Sort

let arr = [9, 3, 4, 0, -6, 7];

function selectionSort(a) {
  let n = a.length;

  for (let i = 0; i < n - 1; i++) {
    // find minimun in the array
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    // if mininum & i is same then there is no need of swapping
    if (min != i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(arr));

// Time Complexity => O(n^2)
// Space Complexity => constant => O(1)
