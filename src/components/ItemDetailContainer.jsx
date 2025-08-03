import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No se encontró el producto");
          setProducto(null);
        }
      })
      .catch((err) => {
        console.error("Error al cargar producto:", err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  return (
    <div className="container my-4">
      <ItemDetail
        nombre={producto.nombre}
        descripcion={producto.descripcion}
        precio={producto.precio}
        imagen={producto.imagen}
        stock={producto.stock}
        id={producto.id}
      />
    </div>
  );
};

export default ItemDetailContainer;
