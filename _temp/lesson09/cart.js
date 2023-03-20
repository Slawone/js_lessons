'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(product, price, productCount = 1) {
    this.items.push({
      product,
      price,
      productCount,
    });
    this.increaseCount(productCount);
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    const sum = this.items.reduce((acc, item) =>
      acc + item.price * item.productCount, 0);
    return sum;
  },
  clear() {
    const newCart = {
      items: [],
      totalPrice: 0,
      count: 0,
    };
    Object.assign(this, newCart);
  },
  print() {
    const jsonItems = JSON.stringify(this.items);
    const price = this.totalPrice;
    console.log(jsonItems);
    console.log(price);
  },
};

cart.add('beer', 79, 6);
cart.add('fish', 115, 5);
cart.add('cola', 145, 3);
cart.add('package', 7, 1);

cart.print();
