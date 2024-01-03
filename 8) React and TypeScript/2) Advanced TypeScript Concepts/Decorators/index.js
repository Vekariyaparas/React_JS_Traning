var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Decorator function to log class instantiations
function logClass(target) {
    // Save a reference to the original constructor
    var original = target;
    // The new constructor behavior
    function newConstructor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Log the instantiation
        console.log("Instantiating ".concat(original.name, " with arguments: ").concat(JSON.stringify(args)));
        // Create an instance using the original constructor
        var instance = new (original.bind.apply(original, __spreadArray([void 0], args, false)))();
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
var ExampleClass = /** @class */ (function () {
    function ExampleClass(name) {
        this.name = name;
        console.log("ExampleClass instantiated with name: ".concat(name));
    }
    return ExampleClass;
}());
// Creating an instance of the decorated class
var exampleInstance = new ExampleClass("Sample");
// Output:
// Instantiating ExampleClass with arguments: ["Sample"]
// ExampleClass instantiated with name: Sample
