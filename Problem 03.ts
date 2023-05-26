// Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

function reverseArrStr<T>(...str: T[]): T[] {
    return str.reverse();
}
const reversedArray = reverseArrStr("Fisrt Element", "Middle Element", "Last Element");
console.log(reversedArray);