const profit = +prompt('Введите ваш доход, чтобы узнать прогрессивный налог');
let tax;

if (profit < 15000) {
  tax = profit * 0.13;;
}

if (profit >= 15000 && profit <= 50000) {
  const taxPart = profit - 15000;
  tax = taxPart * 0.2;;
}

if (profit > 50000) {
  const taxPart = profit - 50000;
  tax = taxPart * 0.3;
}

const total = profit - tax;

console.log(`Ваш налог составил ${tax} руб. к выдаче ${total} руб.`)