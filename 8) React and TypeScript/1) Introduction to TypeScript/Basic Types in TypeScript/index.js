// Basic variable declarations
var numberVar = 42;
var stringVar = "Hello, TypeScript!";
var booleanVar = true;
var arrayVar = [1, 2, 3];
var tupleVar = ["TypeScript", 2023];
var anyVar = "I can be anything!";
// Type assertions
var assertion1 = "This is a string";
var assertionLength1 = assertion1.length;
var assertion2 = 123;
var assertionLength2 = assertion2.length;
// Type inference
var inferredNumber = 42; // TypeScript infers number type
var inferredString = "Inferred String"; // TypeScript infers string type
// Type inference with function return
function add(a, b) {
    return a + b;
}
var result = add(10, 20); // TypeScript infers result as number
// Type inference with array
var inferredArray = [1, 2, 3]; // TypeScript infers number[] type
// Type inference with object
var inferredObject = { name: "John", age: 25 }; // TypeScript infers { name: string, age: number } type
console.log(numberVar, stringVar, booleanVar, arrayVar, tupleVar, anyVar);
console.log(assertionLength1, assertionLength2);
console.log(inferredNumber, inferredString, result, inferredArray, inferredObject);
