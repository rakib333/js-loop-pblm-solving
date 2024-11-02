/***
Task-1

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

for (let i = 1; i <= 60; i++) {
  console
    .log
    // `${i} : I will invest at least 6 hrs every single day for next 60 days!`
    ();
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
// system 1
for (let i = 61; i <= 100; i++) {
  if (i % 2 === 1) {
    // console.log(`The odd numbers from 61 to 100 is : ${i}`);
  }
}
// system 2
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    // console.log(`The odd numbers from 61 to 100 is : ${i}`);
  }
}
// system 3
for (let i = 61; i <= 100; i += 2) {
  //   console.log(`The odd numbers from 61 to 100 is : ${i}`);
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
// system 1
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    // console.log(`The even numbers are : ${i}`);
  }
}
// system 2
for (let i = 78; i <= 98; i += 2) {
  //   console.log(`The even numbers are : ${i}`);
}
//system 3
for (let i = 78; i <= 98; i++) {
  if (i % 2 !== 1) {
    // console.log(`The even numbers are : ${i}`);
  }
}

/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
*/
let oddSum = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 === 1) {
    oddSum = oddSum + i;
    // console.log(oddSum);
  }
}
// console.log(oddSum);

/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
let evenSum = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    // console.log(i);
    evenSum = evenSum + i;
  }
}
// console.log(evenSum);

/***

Generate a multiplication table for number 9

 */
const number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

/***

Implement a countdown timer that counts down from 81 to 65.

 */
for (let i = 81; i >= 65; i--) {
  setTimeout(() => {
    console.log(i);
  }, (81 - i) * 1000);
}
