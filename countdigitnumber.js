// Q3. Count the number of digits of a number.

function countDigits(num) {
  let count = 0;
  num = Math.abs(num);

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

function countDigits1(num1) {
  let count = 0;
  num1 = Math.abs(num1);

  do {
    num1 = Math.floor(num1 / 10);
    count++;
  } while (num1 > 0);

  return count;
}

console.log(countDigits(9/10));
console.log(countDigits1(0.9));

