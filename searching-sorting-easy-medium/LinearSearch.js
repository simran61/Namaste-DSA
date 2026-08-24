// QUES: Search for an element in an array using Linear Search

let arr = [4, 9, 1, 0, 2];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}

console.log(linearSearch(arr, 0));
