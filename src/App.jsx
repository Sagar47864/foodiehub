import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    const existing = cart.find(
      (item) => item.id === food.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1
        }
      ]);
    }
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <Home addToCart={addToCart} />
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;