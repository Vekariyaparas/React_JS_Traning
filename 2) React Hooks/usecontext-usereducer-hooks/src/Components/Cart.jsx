import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartState, dispatch } = useContext(CartContext);
  const removeFromCart = (itemId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>

        {cartState.cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.img}</td>
            <td>${item.price}</td>
            <td>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </table>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
