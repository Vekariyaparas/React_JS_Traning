import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  inventory: [
    { id: 1, name: "Product 1", count: 10 },
    { id: 2, name: "Product 2", count: 15 },
    { id: 3, name: "Product 3", count: 14 },
    { id: 4, name: "Product 4", count: 16 },
    { id: 5, name: "Product 5", count: 17 },
  ],
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { productId, quantity } = action.payload;
      const productInCart = state.cart.find((item) => item.id === productId);
      const updatedCart = productInCart
        ? state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...state.cart, { id: productId, quantity }];

      const updatedInventory = state.inventory.map((item) =>
        item.id === productId ? { ...item, count: item.count - quantity } : item
      );

      return { ...state, cart: updatedCart, inventory: updatedInventory };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
