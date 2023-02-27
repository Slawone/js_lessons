const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
  const newArr = [];

  for (let elem of arr) {
    elem = `${prefix} ${elem}`;
    newArr.push(elem)
  }

  return newArr;
}

console.log(addPrefix(names, 'Mr'));