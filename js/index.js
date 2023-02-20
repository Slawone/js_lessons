const productName = prompt('Введите название товара');
const productSum = +prompt('Введите количество товара');
const productCategory = prompt('Назовите категорию товара');
const productPrice = +prompt('Укажите стоимость одной единицы товара');

console.log(typeof productSum);
console.log(typeof productPrice);

console.log(`На складе ${productSum} единицы товара "${productName}" на сумму ${productSum * productPrice} деревянных.`);