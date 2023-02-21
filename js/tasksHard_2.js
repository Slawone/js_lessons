const profit = +prompt('Введите ваш доход, чтобы узнать прогрессивный налог');

if (profit < 15000) {
  const tax = profit * 0.13;
  const total = profit - tax;
  console.log(`Ваш налог составил ${tax} руб. к выдаче ${total} руб.`);
}

if (profit >= 15000 && profit <= 50000) {
  const taxPart = profit - 15000;
  const tax = taxPart * 0.2;
  const total = profit - tax;
  console.log(`Ваш налог составил ${tax} руб. к выдаче ${total} руб.`);
}

if (profit > 50000) {
  const taxPart = profit - 50000;
  const tax = taxPart * 0.3;
  const total = profit - tax;
  console.log(`Ваш налог составил ${tax} руб. к выдаче ${total} руб.`);
}