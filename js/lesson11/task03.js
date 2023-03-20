'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set newWidth(val) {
    this.width = val;
  },
  set newHeight(val) {
    this.height = val;
  },
  get perimetr() {
    return `${2 * (this.width + this.height)}см`;
  },
  get square() {
    return `${this.width * this.height}см`;
  },
};

console.log(rectangle.perimetr);
console.log(rectangle.square);
