import React from "react";
import { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import db from "../../service/firebase";

const ItemDetailContainer = () => {
  const { nombre } = useContext(CarritoContext);

  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  const getData = async () => {
    try {
      const data = collection(db, "items");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProductos(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(productos);

  return (
    <div>
      {productos
        .filter((productos) => productos.id == id)
        .map((productos, index) => (
          <ItemDetail item={productos} key={productos.id} />
        ))}

      <h1>{nombre}</h1>
    </div>
  );
};

export default ItemDetailContainer;
