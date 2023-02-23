const a = 16;
const b = 12;

const gdc = (a, b) => {
  while(a !== 0 && b !== 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  const c = a + b;
  return c;
}

console.log(gdc(a, b));