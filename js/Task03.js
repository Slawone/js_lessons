const calculate = (sum, products, promocode) => {
  let totalSum;
  
  if (products < 10) {
    totalSum = sum;
  }

  if (products > 10) {
    totalSum = sum * 0.97;
  }

  if (totalSum > 30000) {
    totalSum -= (totalSum - 30000) * 0.85;
  }

  if (promocode === "METHED") {
    totalSum *= 0.9;
  }
  
  if (promocode === 'G3H2Z1' && totalSum > 2000) {
    totalSum -= 500;
  }
  
  return totalSum;
}; 

console.log(calculate(3000, 2, 'METHED'));