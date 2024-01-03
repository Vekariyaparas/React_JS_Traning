// Decorator function to log class instantiations
function logClass(target: any) {
  // Save a reference to the original constructor
  const original = target;

  // The new constructor behavior
  function newConstructor(...args: any[]) {
    // Log the instantiation
    console.log(
      `Instantiating ${original.name} with arguments: ${JSON.stringify(args)}`
    );

    // Create an instance using the original constructor
    const instance = new original(...args);

    // Return the created instance
    return instance;
  }

  // Copy prototype so intanceof operator still works
  newConstructor.prototype = original.prototype;

  // Return the new constructor
  return newConstructor;
}

// Example usage of the decorator
// @logClass
class ExampleClass {
  constructor(public name: string) {
    console.log(`ExampleClass instantiated with name: ${name}`);
  }
}

// Creating an instance of the decorated class
const exampleInstance = new ExampleClass("Sample");

// Output:
// Instantiating ExampleClass with arguments: ["Sample"]
// ExampleClass instantiated with name: Sample
