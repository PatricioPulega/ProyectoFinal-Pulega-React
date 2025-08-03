import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Contacto from "./components/Contacto";
import About from "./components/About";
import CheckoutForm from "./components/CheckoutForm";
import { CartProvider } from "./components/CartProvider";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Productos" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
    </>
  );
}

export default App;
