import { useCart } from "./CartContext";
import { Product } from "./Product";

export const ProductList = () => {
    const { state } = useCart();
  
    return (
      <div>
        <h2>Product List</h2>
        {state.inventory.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    );
  };