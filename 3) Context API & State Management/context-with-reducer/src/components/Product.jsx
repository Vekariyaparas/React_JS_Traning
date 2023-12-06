import { useCart } from "./CartContext";

export const Product = ({ id, name, count }) => {
    const { dispatch } = useCart
    ();
  
    const addToCart = () => {
      const quantity = 1; // You can change this as needed
      dispatch({ type: 'ADD_TO_CART', payload: { productId: id, quantity } });
    };
  
    return (
      <div>        
      <table style={{width: '100%', textAlign: 'center'}}>
        <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Action</th>
        </tr>
        <tr style={{width: '100%'}}>
            <td>{name}</td>
            <td>Inventory: {count}</td>
            <td><button onClick={addToCart}>Add to Cart</button></td>
        </tr>
      </table>
      </div>
    );
  };