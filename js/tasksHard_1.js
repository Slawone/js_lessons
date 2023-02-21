const income = +prompt('Введите ваш доход, чтобы узнать стандартный налог');

if (income < 15000) {
  const tax = income * 0.13;
  const total = income - tax;
  console.log(`Ваш налог составил ${tax} руб. к выдаче ${total} руб.`);
}

if (income >= 15000 && income <= 50000) {
  const tax = income * 0.2;
  const total = income - tax;
  console.log(`Ваш налог составил ${tax} руб. к выдаче ${total} руб.`);
}

if (income > 50000) {
  const tax = income * 0.3;
  const total = income - tax;
  console.log(`Ваш налог составил ${tax} руб. к выдаче ${total} руб.`);
}