function createArray(length, defaultValue) {
    return Array.from({ length: length }, function () { return defaultValue; });
}
// Example usage:
var stringArray = createArray(5, "Hello");
var numberArray = createArray(3, 42);
var booleanArray = createArray(4, true);
console.log(stringArray);
// Output: ["Hello", "Hello", "Hello", "Hello", "Hello"]
console.log(numberArray);
// Output: [42, 42, 42]
console.log(booleanArray);
// Output: [true, true, true, true]
