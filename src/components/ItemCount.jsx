import React, { useState } from "react";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const agregarAlCarrito = () => {
    onAdd(cantidad);
  };

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center gap-2 mb-2">
        <button className="btn btn-outline-secondary" onClick={decrementar}>
          -
        </button>
        <span>{cantidad}</span>
        <button className="btn btn-outline-secondary" onClick={incrementar}>
          +
        </button>
      </div>
      <button className="btn btn-secondary" onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
