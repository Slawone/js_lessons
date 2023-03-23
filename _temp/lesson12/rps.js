'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const game = (lang) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const findLetters = (str, lang) => {
      if (lang === 'EN' || lang === 'ENG') {
        if (str.startsWith('r')) {
          str = 'rock';
        }
        if (str.startsWith('p')) {
          str = 'paper';
        }
        if (str.startsWith('s')) {
          str = 'scissors';
        }
      } else {
        if (str.startsWith('к')) {
          str = 'камень';
        }
        if (str.startsWith('б')) {
          str = 'бумага';
        }
        if (str.startsWith('н')) {
          str = 'ножницы';
        }
      }

      return str;
    };

    return function start() {
      if (lang === 'EN' || lang === 'ENG') {
        let userAnswer = prompt('rock, scissors, paper?');

        if (userAnswer === null) return alert('Game over!');
        if (userAnswer === '') {
          alert('Wrong input');
          start();
        }

        userAnswer.toLowerCase();
        userAnswer = findLetters(userAnswer, lang);

        if (!FIGURES_ENG.includes(userAnswer)) {
          alert('Wrong input');
          start();
        }

        const computerAnswer = FIGURES_ENG[getRandomNumber(0, 2)];

        const getConfirm = () => {
          const confirmQuestion = confirm('Again?');

          if (confirmQuestion === false) {
            return alert(`
              Result:
              Player: ${result.player}
              Computer: ${result.computer}
            `);
          } else {
            start();
          }
        };

        const isDraw = userAnswer === computerAnswer;
        const isUserWin =
          (userAnswer === 'rock' && computerAnswer === 'scissors') ||
          (userAnswer === 'paper' && computerAnswer === 'rock') ||
          (userAnswer === 'scissors' && computerAnswer === 'paper');
        const isComputerWin =
          (computerAnswer === 'rock' && userAnswer === 'scissors') ||
          (computerAnswer === 'paper' && userAnswer === 'rock') ||
          (computerAnswer === 'scissors' && userAnswer === 'paper');

        if (isDraw) {
          alert('Draw');
          getConfirm();
        } else if (isUserWin) {
          result.player += 1;
          alert('You won!');
          getConfirm();
        } else if (isComputerWin) {
          result.computer += 1;
          alert('Computer won!');
          getConfirm();
        }
      } else {
        let userAnswer = prompt('камень, ножницы, бумага?');

        if (userAnswer === null) return alert('Игра окончена!');
        if (userAnswer === '') {
          alert('Неправильный ввод');
          start();
        }

        userAnswer.toLowerCase();
        userAnswer = findLetters(userAnswer, lang);

        if (!FIGURES_RUS.includes(userAnswer)) {
          alert('Неправильный ввод');
          start();
        }

        const computerAnswer = FIGURES_RUS[getRandomNumber(0, 2)];

        const getConfirm = () => {
          const confirmQuestion = confirm('Еще разок?');

          if (confirmQuestion === false) {
            return alert(`
              Результат:
              Игрок: ${result.player}
              Компьютер: ${result.computer}
            `);
          } else {
            start();
          }
        };

        const isDraw = userAnswer === computerAnswer;
        const isUserWin =
          (userAnswer === 'камень' && computerAnswer === 'ножницы') ||
          (userAnswer === 'бумага' && computerAnswer === 'камень') ||
          (userAnswer === 'ножницы' && computerAnswer === 'бумага');
        const isComputerWin =
          (computerAnswer === 'камень' && userAnswer === 'ножницы') ||
          (computerAnswer === 'бумага' && userAnswer === 'камень') ||
          (computerAnswer === 'ножницы' && userAnswer === 'бумага');

        if (isDraw) {
          alert('Ничья');
          getConfirm();
        } else if (isUserWin) {
          result.player += 1;
          alert('Вы выиграли!');
          getConfirm();
        } else if (isComputerWin) {
          result.computer += 1;
          alert('Компьютер выиграл!');
          getConfirm();
        }
      }
    };
  };

  window.rps = game;
})();
