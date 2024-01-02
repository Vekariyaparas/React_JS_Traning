// User Profile Interface
interface UserProfile {
    userId: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    address?: string; // Optional property
  }
  
  // Product Interface
  interface Product {
    productId: number;
    productName: string;
    price: number;
    description: string;
    stock: number;
    category: string;
  }
  
  // Example Usage
  const user: UserProfile = {
    userId: 1,
    username: 'john_doe',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main Street, Cityville',
  };
  
  const product: Product = {
    productId: 101,
    productName: 'Smartphone',
    price: 499.99,
    description: 'A powerful and sleek smartphone.',
    stock: 50,
    category: 'Electronics',
  };
  
  // Display user and product information
  console.log('User Profile:');
  console.log(`User ID: ${user.userId}`);
  console.log(`Username: ${user.username}`);
  console.log(`Email: ${user.email}`);
  console.log(`Name: ${user.firstName} ${user.lastName}`);
  if (user.address) {
    console.log(`Address: ${user.address}`);
  }
  
  console.log('Product Details:');
  console.log(`Product ID: ${product.productId}`);
  console.log(`Product Name: ${product.productName}`);
  console.log(`Price: $${product.price}`);
  console.log(`Description: ${product.description}`);
  console.log(`Stock: ${product.stock}`);
  console.log(`Category: ${product.category}`);
  