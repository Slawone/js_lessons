const getString = (string) => {
  const newString = string[0].toUpperCase() + string.slice(1).toLowerCase();

  return newString;
}

console.log(getString('привет привет ПриВет'));