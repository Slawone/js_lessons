const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

let input;

while (input !== null) {  
  input = prompt('Введите число от 1 до 100');

  if (isNaN(input) || input === '') {
    alert('Введите число')
  }

  if (input > 0) {    
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
}

alert('Игра окончена!');