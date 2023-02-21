import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Catagory } from "./pages/catagory";
import { Navbar } from "./components/Navbar";
import { ShoppingCart } from "./pages/cart";
import { ProductDetail } from "./pages/product-detail";
import { ShoppingCartProvider } from "./context/CartContext";

function App() {
  const [catagories, setCatagories] = useState();
  useEffect(() => {
    const fetchCatagories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      setCatagories(await response.json());
    };
    fetchCatagories();
  }, []);

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <div className="lg:px-6">
          <Navbar catagories={catagories} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/category/:catagory" element={<Catagory />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
