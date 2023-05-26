### What is TypeScript, and how is it different from JavaScript?
#### TypeScript is a programming language that is a superset of JavaScript, hence it designed to enhance the capabilities by providing additional tools and features (will describe bellow) compared to JavaScript. Here are some differences between TypeScript and JavaScript:
1. Static typing: TypeScript allows to specify the type of variables, function parameters and return values. As a result, we can find the type related errors duing developement. But in case of JavaScript, we don't get this kind of facilities.
2. Supporting features: TypeScript supports generics and a type inference which is not available in JavaScript.
3. OOP features: While JavaScript supports object oriented programming, TypeScript provides additional support for classes, interfaces, inheritance and access modifiers such as 'public', 'private' and 'protected'.

### Can you explain the difference between "interface" and "type" in TypeScript?
#### Difference between "interface" and "type" in TypeScript describes bellow:
1. Syntax: The syntax of Interface and Type is a bit different. Interface declarations must start with 'interface' where Type should be declared with 'type' keyword.
2. Extending and implementing: In case of interface extensions we use 'extends' keyword, on the other side for type extensions we use intersection (&) symbol.
3. Type aliases: 'type' allows us to create type aliases for other types, including primitive types, union types etc. which is not allowed in case of 'interface'.

### Can you give an example of how to use generics in TypeScript?
#### Generics in TypeScript helps us to reuse a part of code for different types of data. For example:
```
function exampleGenerics<T>(arr: T[]): void {
    for (const item of arr) {
        console.log(item);
    }
}
const numbers = [1, 2, 3];
const names = ['Sakib', 'Apu', 'Bubli'];
exampleGenerics(numbers);
exampleGenerics(names);
```
Here, the function name exampleGenerics which can be anytype of array, hence we made it generic by using <T>.

### What is the difference between an "unknown" and "any" type in TypeScript?
#### Unknown types is used when the value is not known in advance whereas any type allows any kind of value or type (string, number, boolean, etc) we can get. 

### What is the "as" keyword used for in TypeScript?
#### In TypeScript, the "as" keyword is used for assertions or type casting, hence we can set the data as string or number or boolean etc by using "as" keyword. For example:
```
let data: unknown = "Hello";
let length: number = (data as string).length;
console.log(length);
```"# TypeScript-A1" 
