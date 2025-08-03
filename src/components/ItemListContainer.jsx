import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(items);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container my-4">
      <h2>{mensaje || "Productos"}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
