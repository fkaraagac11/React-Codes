const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const myFamilyBirthYear = [1973, 1976, 2001, 2010];
const myFamilyAges = myFamilyBirthYear.map(function (x) {
    return 2020 - x;
});

console.log(myFamilyAges);
