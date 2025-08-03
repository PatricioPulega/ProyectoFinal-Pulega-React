import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartProvider";

const CartWidget = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <button
        className="btn btn-outline-primary position-relative"
        onClick={() => setShowModal(true)}
      >
        🛒
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        )}
      </button>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">🛒 Tu carrito</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {cart.length === 0 ? (
                  <p>El carrito está vacío 😕</p>
                ) : (
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
                )}
              </div>
              <div className="modal-body mt-3">
                <h5 className="text-end">
                  Total:{" "}
                  <span className="badge bg-success">
                    ${totalPrice.toFixed(2)}
                  </span>
                </h5>
              </div>

              <div className="modal-footer">
                {cart.length > 0 && (
                  <>
                    <button className="btn btn-warning" onClick={clearCart}>
                      Vaciar carrito
                    </button>
                    <Link
                      to="/checkout"
                      className="btn btn-success"
                      onClick={() => setShowModal(false)}
                    >
                      Ir a pagar
                    </Link>
                  </>
                )}
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartWidget;
