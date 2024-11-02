/***
Task-1

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

for (let i = 1; i <= 60; i++) {
  console.log(
    `${i} : I will invest at least 6 hrs every single day for next 60 days!`
  );
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
// system 1
for (let i = 61; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(`The odd numbers from 61 to 100 is : ${i}`);
  }
}
// system 2
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(`The odd numbers from 61 to 100 is : ${i}`);
  }
}
// system 3
for (let i = 61; i <= 100; i += 2) {
  console.log(`The odd numbers from 61 to 100 is : ${i}`);
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
// system 1
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log(`The even numbers are : ${i}`);
  }
}
// system 2
for (let i = 78; i <= 98; i += 2) {
  console.log(`The even numbers are : ${i}`);
}
//system 3
for (let i = 78; i <= 98; i++) {
  if (i % 2 !== 1) {
    console.log(`The even numbers are : ${i}`);
  }
}
