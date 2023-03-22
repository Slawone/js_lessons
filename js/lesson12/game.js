'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const input = prompt('Камень, ножницы, бумага?');

      if (input === 'камень') {
        return alert('Вы выиграли');
      } else if (input === 'ножницы') {
        return alert('ничья');
      } else if (input === null) {
        const continueGame = confirm('Хотите выйти?');
        if (continueGame === true) {
          alert(`
            Игрок ${result.player}
            Компьютер ${result.computer}
          `);
        } else {
          return start();
        }
      }
      
      
      
      // return start();
    };
  };

  window.RPS = game;
})();
