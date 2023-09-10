import { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Product from "./Product";
import Lightbox from "./Lightbox";
import { context } from "./Contexts/context";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [count, setCount] = useState(1);
  const [thumbClick, setThumbClick] = useState(false);

  return (
    <div className="app">
      <context.Provider
        value={{
          cartItems,
          setCartItems,
          count,
          setCount,
          thumbClick,
          setThumbClick,
        }}
      >
        <Header />
        <Product />
        <Lightbox />
      </context.Provider>
    </div>
  );
}

export default App;
