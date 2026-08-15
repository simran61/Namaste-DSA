// QUES 1: print the following star pattern
// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// QUES 2: print the following star pattern
// *
// * *
// * * *
// * * * *

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  //   for (let j = 0; j < i + 1; j++) {
  for (let j = 0; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// QUES 3: print the following star pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  //   for (let j = 0; j < i + 1; j++) {
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1) + " ";
  }
  console.log(row);
}

// QUES 4: print the following star pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1) + " ";
  }
  console.log(row);
}
// ORRRRRRRR
let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i + " ";
  }
  console.log(row);
}

// QUES 5: print the following star pattern
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1) + " ";
  }
  console.log(row);
}

// QUES 6: print the following star pattern
// * * * * *
// * * * *
// * * *
// * *
// *

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// QUES 7: print the following star pattern
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    if (j < n - 1 - i) {
      row = row + " ";
    } else {
      row = row + "*";
    }
  }
  console.log(row);
}
// ORRRRRRRRRRRRR
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  //   adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  //   adding stars
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

// QUES 8: print the following star pattern
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

let n = 6;

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row = row + toggle + " ";
    if (toggle == 1) toggle = 0;
    else toggle = 1;
  }
  console.log(row);
}
// ORRRRRRRRRRR
let n = 6;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    if (j % 2 == 0) row = row + "1 ";
    else row = row + "0 ";
  }
  console.log(row);
}

// QUES 9: print the following star pattern
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let n = 5;
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + toggle + " ";

    if (toggle == 1) toggle = 0;
    else toggle = 1;
  }
  console.log(row);
}
