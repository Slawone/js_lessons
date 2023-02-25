/*
Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.
Так же простое число должно быть больше единицы.
*/

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i == 0) {
        return 'Число не простое';
      }
    }
    return 'Число простое';
  } else {
    return 'Введите число больше 1';
  }
};


console.log(isPrime(-1));
console.log(isPrime(0));
console.log(isPrime(7));