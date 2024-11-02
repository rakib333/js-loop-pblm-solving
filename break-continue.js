let count = 81;
let delay = 0;

while (count >= 65) {
  setTimeout(() => {
    console.log(count);
  }, delay * 1000);

  count--;
  delay++;
}
