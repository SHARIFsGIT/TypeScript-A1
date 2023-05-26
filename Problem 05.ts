// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

function checkString(x: unknown): void {
    if (typeof x === "string") {
            console.log(x);
        } else {
            console.log("Given input is not of type string.");
            // throw new Error("Given input is not of type string.");
        }
    }
checkString("It's a string");
checkString(1);