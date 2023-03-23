'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const enPhrases = {
    prompt: 'rock, scissors, paper?',
    gameOver: 'Game over!',
    wrongInput: 'Wrong input',
    again: 'Again?',
    rock: 'rock',
    scissors: 'scissors',
    paper: 'paper',
    draw: 'Draw',
    playerWon: 'You won!',
    computerWon: 'Computer won!',
  };
  const ruPhrases = {
    prompt: 'камень, ножницы, бумага?',
    gameOver: 'Игра окончена!',
    wrongInput: 'Неправильный ввод',
    again: 'Еще разок?',
    rock: 'камень',
    scissors: 'ножницы',
    paper: 'бумага',
    draw: 'Ничья',
    playerWon: 'Вы выиграли!',
    computerWon: 'Компьютер выиграл!',
  };

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

    const langPhrases = lang === 'EN' || lang === 'ENG' ? enPhrases : ruPhrases;
    const figures = lang === 'EN' || lang === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      let userAnswer = prompt(langPhrases.prompt);

      if (userAnswer === null) return alert(langPhrases.gameOver);
      if (userAnswer === '') {
        alert(langPhrases.wrongInput);
        start();
      }

      userAnswer.toLowerCase();
      userAnswer = findLetters(userAnswer, lang);

      if (!figures.includes(userAnswer)) {
        alert(langPhrases.wrongInput);
        start();
      }

      const computerAnswer = figures[getRandomNumber(0, 2)];

      const getConfirm = () => {
        const confirmQuestion = confirm(langPhrases.again);

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
        (userAnswer === langPhrases.rock &&
          computerAnswer === langPhrases.scissors) ||
        (userAnswer === langPhrases.paper &&
          computerAnswer === langPhrases.rock) ||
        (userAnswer === langPhrases.scissors &&
          computerAnswer === langPhrases.paper);
      const isComputerWin =
        (computerAnswer === langPhrases.rock &&
          userAnswer === langPhrases.scissors) ||
        (computerAnswer === langPhrases.paper &&
          userAnswer === langPhrases.rock) ||
        (computerAnswer === langPhrases.scissors &&
          userAnswer === langPhrases.paper);

      if (isDraw) {
        alert(langPhrases.draw);
        getConfirm();
      } else if (isUserWin) {
        result.player += 1;
        alert(langPhrases.playerWon);
        getConfirm();
      } else if (isComputerWin) {
        result.computer += 1;
        alert(langPhrases.computerWon);
        getConfirm();
      }
    };
  };

  window.rps = game;
})();
