import { useState, useContext } from "react";
import { CartContext } from "../components/CartProvider"; // ajustá el path si lo moviste
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, nombre, descripcion, precio, imagen, stock }) => {
  const [agregado, setAgregado] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (cantidad) => {
    const item = {
      id,
      name: nombre,
      price: precio,
      image: imagen,
    };

    addItem(item, cantidad);
    setAgregado(true);
  };

  return (
    <div className="item-detail">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} style={{ width: "300px" }} />
      <p>{descripcion}</p>
      <p>
        <strong>Precio:</strong> ${precio}
      </p>
      <p>
        <strong>Stock disponible:</strong> {stock}
      </p>

      {agregado ? (
        <p style={{ color: "green" }}>Producto agregado ✅</p>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
      )}
    </div>
  );
};

export default ItemDetail;
