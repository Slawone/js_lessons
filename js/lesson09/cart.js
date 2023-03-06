const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add: function(product, price, productCount = 1) {
    this.items.push({
      product,
      price,
      productCount,
    });
    this.increaseCount(productCount);
  },
  increaseCount: function(num) {
    this.count += num;
  },
  calculateItemPrice: function() {
    let sum = this.items.map(item => {
      return item.price * item.productCount;
    }).reduce((acc, item) => {
      return acc + item;
    })
    return sum;
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