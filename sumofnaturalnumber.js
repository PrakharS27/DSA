// Q1. Sum of all natural number from 1 to n

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sum1(n) {
  return (n * (n + 1)) / 2;
}

console.log(sum(5)); // Output: 1+2+3+4+5 = 15
console.log(sum1(5)); // Output: 1+2+3+4+5 = 15

console.log(sum(6));
