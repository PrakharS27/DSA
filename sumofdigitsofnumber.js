// Q2. Sum of digits of a number

function sum(number) {
  let sum = 0;
  while(number>0){
    sum += number%10;
    number = Math.floor(number/10)
  }

  return sum;
}

console.log(sum(1239));
