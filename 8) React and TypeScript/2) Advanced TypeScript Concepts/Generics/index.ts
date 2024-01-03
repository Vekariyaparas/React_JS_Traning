function createArray<T>(length: number, defaultValue: T): T[] {
  return Array.from({ length }, () => defaultValue);
}

// Example usage:
const stringArray = createArray(5, "Hello");
const numberArray = createArray(3, 42);
const booleanArray = createArray(4, true);

console.log(stringArray);
// Output: ["Hello", "Hello", "Hello", "Hello", "Hello"]

console.log(numberArray);
// Output: [42, 42, 42]

console.log(booleanArray);
// Output: [true, true, true, true]
