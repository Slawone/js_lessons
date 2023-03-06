const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice: function() {
    return this.totalPrice;
  },
  add: function(product, price, productCount = 1) {
    this.items.push({
      product,
      price,
      productCount,
    })
    this.calculateItemPrice(price, productCount)
    this.increaseCount(productCount);
  },
  increaseCount: function(num) {
    this.count += num;
  },
  calculateItemPrice: function(price, productCount) {
    this.totalPrice += price * productCount;
  },
  clear: function() {
    const newCart = {
      items: [],
      totalPrice: 0,
      count: 0,
    };
    Object.assign(this, newCart);
  },
  print: function() {
    const jsonItems = JSON.stringify(this.items);
    const price = this.getTotalPrice();
    console.log(jsonItems);
    console.log(price);
  },
};

cart.add('beer', 79, 6);
cart.add('fish', 115, 4);
cart.add('cola', 145, 2);
cart.add('package', 7, 1);

cart.print();