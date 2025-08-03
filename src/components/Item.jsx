import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{producto.nombre}</h3>
          <p className="card-text">Precio: ${producto.precio}</p>
          <Link
            to={`/item/${producto.id}`}
            className="btn btn-secondary btn-sm"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
