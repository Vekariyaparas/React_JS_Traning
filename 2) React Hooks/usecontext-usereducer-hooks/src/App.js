import React from "react";
import Item from "./Components/Item";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/CartContext";
import img1 from "./Components/images/img1.jpg";
import img2 from "./Components/images/img2.jpg";
import img3 from "./Components/images/img3.jpg";
import img4 from "./Components/images/img4.jpg";

function App() {
  return (
    <CartProvider>
      <div>
        <Item
          id={1}
          name="Item 1"
          price={10}
          img={<img src={img1} width={100} />}
        />
        <Item
          id={2}
          name="Item 2"
          price={20}
          img={<img src={img2} width={100} />}
        />
        <Item
          id={3}
          name="Item 3"
          price={30}
          img={<img src={img3} width={100} />}
        />
        <Item
          id={4}
          name="Item 4"
          price={40}
          img={<img src={img4} width={100} />}
        />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
