// Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

// Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

class Person {
    constructor(private name: string, private age: number) {
    }
    public getDetails(): string {
        return `The person called ${this.name} and his age is ${this.age}`;
    }
}

class Student extends Person {
    constructor(name: string, age: number, private grade: number) {
        super(name, age);
    }
    public getGrade(): number {
        return this.grade;
    }
}

const person = new Person("Jhankar Mahbub", 40);
console.log(person.getDetails());

const student = new Student("Shariful Islam", 23, 30);
console.log(student.getDetails());
console.log(student.getGrade());