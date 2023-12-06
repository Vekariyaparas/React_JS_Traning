import React from "react";
import { useCart } from "./CartContext";

export const Cart = () => {
  const { state } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <tr>
          <th>Product ID</th>
          <th>Quantity</th>
        </tr>
        {state.cart.map((item) => (
          <tr>
            <td key={item.id}>{item.id}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
