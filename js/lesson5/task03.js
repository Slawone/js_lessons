/*
Перебираем строку при помощи цикла for. Стартовое значение i задаем str.length - 1,
что соответсвует последнему индексу строки. (Длина строки имеет числовое значение на 1 больше значения послденего индекса.)
*/

const reverseString = (str) => {
  let newStr = '';

  for (let i = str.length -1; i >= 0; i -= 1) {
    newStr += str[i]
  }

  return newStr;
};

console.log(reverseString('Привет мир'));