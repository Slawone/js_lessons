const num1 = +prompt('Введите число 1');
const num2 = +prompt('Введите число 2');

const minNumnum2er = (num1, num2) => {
  return (num1 > num2) * num2 + (num2 > num1) * num1;
}

console.log(`Минимальное число ${minNumnum2er(num1, num2)}`);