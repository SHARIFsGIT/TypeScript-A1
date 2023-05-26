// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

interface PersonType {
    name: string;
    age: number;
}
function filterByAge(person: PersonType[]) {
    return person.filter(person => person.age >= 18);
}
const person: PersonType[] = [
    { name: 'Boro', age: 30 },
    { name: 'Mejho', age: 26 },
    { name: 'Sejo', age: 22 },
    { name: 'Choto', age: 17 }
]
console.log(filterByAge(person));