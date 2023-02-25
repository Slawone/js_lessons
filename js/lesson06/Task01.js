const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
  const newArr = [];

  for (const elem of arr1) {
    if (!arr2.includes(elem)) {
      newArr.push(elem);
    }
  }

  return newArr.join(', ');
};

console.log(`${filter(allStudents, failedStudents)} - сдали экзамен`);