import React from "react";
import { CartProvider, useCart } from "./components/CartContext";
import { Cart } from "./components/Cart";
import { ProductList } from "./components/ProductList";

const App = () => {
  return (
    <CartProvider>
      <div>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
