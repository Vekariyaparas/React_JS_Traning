import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Item = ({ id, name, price, img }) => {
  const { dispatch } = useContext(CartContext);

  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, img },
    });
  };
  return (
    <>
      <table width={1000}>
        <tr>
          <th>{name}</th>
          <th>${price}</th>
          <th>{img}</th>
          <th>
            <button onClick={addTocart}>Add To Cart</button>
          </th>
        </tr>
      </table>
    </>
  );
};

export default Item;
