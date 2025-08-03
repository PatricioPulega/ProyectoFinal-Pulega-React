import React, { useState, useContext } from "react";
import { CartContext } from "./CartProvider";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      buyer: form,
      items: cart,
      total: totalPrice(),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), orden);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  return (
    <div className="container my-5">
      <h2>Finalizar compra</h2>

      {orderId ? (
        <div>
          <h4>¡Gracias por tu compra!</h4>
          <p>
            Tu número de orden es: <strong>{orderId}</strong>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="form-control my-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="form-control my-2"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            className="form-control my-2"
            required
          />
          <button type="submit" className="btn btn-success">
            Confirmar orden
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
