"use strict";
function describePerson(person) {
    const { name, age, isStudent } = person;
    return `${name} is ${age} years old and is ${isStudent ? 'a' : 'not a'} student`;
}
const person = { name: "Alice", age: 25, isStudent: true };
console.log(describePerson(person)); // Output: "Alice is 25 years old and is a student."
