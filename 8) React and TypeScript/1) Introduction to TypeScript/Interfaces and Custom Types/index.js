// Example Usage
var user = {
    userId: 1,
    username: 'john_doe',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main Street, Cityville',
};
var product = {
    productId: 101,
    productName: 'Smartphone',
    price: 499.99,
    description: 'A powerful and sleek smartphone.',
    stock: 50,
    category: 'Electronics',
};
// Display user and product information
console.log('User Profile:');
console.log("User ID: ".concat(user.userId));
console.log("Username: ".concat(user.username));
console.log("Email: ".concat(user.email));
console.log("Name: ".concat(user.firstName, " ").concat(user.lastName));
if (user.address) {
    console.log("Address: ".concat(user.address));
}
console.log('Product Details:');
console.log("Product ID: ".concat(product.productId));
console.log("Product Name: ".concat(product.productName));
console.log("Price: $".concat(product.price));
console.log("Description: ".concat(product.description));
console.log("Stock: ".concat(product.stock));
console.log("Category: ".concat(product.category));
