import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Tu carrito está vacío 🫤</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h3>🛒 Productos en tu carrito</h3>
      <ul className="list-group">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.name}</strong> x {item.quantity}
            </div>
            <div>
              ${item.price * item.quantity}
              <button
                className="btn btn-sm btn-danger ms-3"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 d-flex justify-content-between">
        <button className="btn btn-warning" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Ir a pagar
        </Link>
      </div>
    </div>
  );
};

export default Cart;
