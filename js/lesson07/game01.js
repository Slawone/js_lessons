const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

let input;

while (input = prompt('Введите число от 1 до 100', '')) {  
  if (isNaN(input)) {
    alert('Введите число')
  }
  if (input > randomNumber) {
    alert("Угадываемое число меньше!");
  }
  if (input < randomNumber) {
    alert("Угадываемое число больше!");
  }
  if (input == randomNumber) {
    alert("Правильно! Вы выиграли!");
    break;
  }
}