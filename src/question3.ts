interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

function describePerson(person: Person): string {
  const {name, age, isStudent} = person;
  const student = isStudent ? 'is' : 'not'
  return `${name} is ${age} years old and is ${student} student`
}

const person: Person = { name: "Alice", age: 25, isStudent: true };
console.log(describePerson(person)); // Output: "Alice is 25 years old and is a student."
