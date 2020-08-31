//SPREAD OPERATOR
const x = [1, 2, 3];
const y = [...x, 4];
console.log(y);

const person = { name: "Fehmi" };
const newPerson = { ...person, age: 22 };

console.log(newPerson);

const filter = (...args) => {
    return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));

// MAP FUNCTION
const x = [1, 2, 3];

const y = x.map((NUM) => {
    console.log(NUM * 3);
});
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
