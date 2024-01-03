// Type that can be a string or a number
type StringOrNumber = string | number;

// Type for specific string values
type Size = "small" | "medium" | "large";

// Example usage
let example1: StringOrNumber;
example1 = "Hello"; // Valid
example1 = 42;       // Valid

let example2: Size;
example2 = "small";  // Valid
example2 = "medium"; // Valid
example2 = "large";  // Valid  
