/***
Task 1
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */

let n = 1;
while (n <= 60) {
  console.log(
    `${n} : I will invest at least 6 hrs every single day for next 60 days!`
  );
  n++;
}

/*
Subtask-1:

Find all the odd numbers from 61 to 100.

 */
let m = 61;
while (m <= 100) {
  if (m % 2 === 1) {
    console.log(`Odd numbers are : ${m} `);
  }

  m++;
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let p = 78;
while (p <= 98) {
  if (p % 2 === 0) {
    console.log(`Even numbers are : ${p} `);
  }
  p++;
}

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let i = 81;
let oddSum = 0;
while (i <= 131) {
  if (i % 2 === 1) {
    oddSum = oddSum + i;
  }
  i++;
}
console.log("Odd numbers sum is: ", oddSum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let k = 206;
let evenSum = 0;
while (k <= 311) {
  if (k % 2 === 0) {
    evenSum = evenSum + k;
  }
  k++;
}
console.log("Odd numbers sum is: ", evenSum);
