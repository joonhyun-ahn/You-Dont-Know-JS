function range(start, end) {
  let result = [];
  // if (start > end) return result;
  // result.push(start++);

  if (!isNaN(end)) {
    while (start <= end) result = [...result, start++];
    return result;
  }

  return function to(end) {
    if (start > end) result = [];
    while (start <= end) result = [...result, start++];
    return result;
  };
}

console.log(range(3, 3));
console.log(range(3, 8));
console.log(range(3, 0));

const start3 = range(3);
const start4 = range(4);

console.log(start3(3));
console.log(start3(8));
console.log(start3(0));

console.log(start4(6));

// function lookupStudent(studentID) {
//   const students = [
//     { id: 14, name: '카일' },
//     { id: 73, name: '보라' },
//     { id: 112, name: '지수' },
//     { id: 6, name: '호일' },
//   ];

//   return function greetStudent(greeting) {
//     const student = students.find((student) => student.id === studentID);

//     return `${greeting}, ${student.name} 님!`;
//   };
// }

// const chosenStudents = [lookupStudent(6), lookupStudent(112)];

// console.log(chosenStudents[0].name);
// console.log(chosenStudents[0]('안녕하세요'));
// console.log(chosenStudents[1]('잘지내요?'));
