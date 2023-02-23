const getCostInRubles = (euro) => {
  const dollarToEuro = 1.2;
  const rublesToDollar = 73;

  const cost = euro * dollarToEuro * rublesToDollar;

  return cost;
}

console.log(getCostInRubles(100));