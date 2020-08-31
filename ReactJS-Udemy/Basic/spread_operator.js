const x = [1, 2, 3];
const y = [...x, 4];
console.log(y);

const person = { name: "Fehmi" };
const newPerson = { ...person, age: 22 };

console.log(newPerson);
