// Basic variable declarations
let numberVar: number = 42;
let stringVar: string = "Hello, TypeScript!";
let booleanVar: boolean = true;
let arrayVar: number[] = [1, 2, 3];
let tupleVar: [string, number] = ["TypeScript", 2023];
let anyVar: any = "I can be anything!";

// Type assertions
let assertion1: any = "This is a string";
let assertionLength1: number = (assertion1 as string).length;

let assertion2: any = 123;
let assertionLength2: number = (<string>assertion2).length;

// Type inference
let inferredNumber = 42; // TypeScript infers number type
let inferredString = "Inferred String"; // TypeScript infers string type

// Type inference with function return
function add(a: number, b: number) {
    return a + b;
}

let result = add(10, 20); // TypeScript infers result as number

// Type inference with array
let inferredArray = [1, 2, 3]; // TypeScript infers number[] type

// Type inference with object
let inferredObject = { name: "John", age: 25 }; // TypeScript infers { name: string, age: number } type

console.log(numberVar, stringVar, booleanVar, arrayVar, tupleVar, anyVar);
console.log(assertionLength1, assertionLength2);
console.log(inferredNumber, inferredString, result, inferredArray, inferredObject);