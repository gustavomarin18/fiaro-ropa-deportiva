import React from "react";
import Item from "./Item";
import { useEffect, useState } from "react";
import "../styles/ItemList.css";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../service/firebase";

const ItemList = () => {
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
    <div className="itemList-design">
      {id == undefined
        ? productos.map((producto) => (
            <Item item={producto} key={producto.id} />
          ))
        : productos
            .filter((productos) => productos.category == id)
            .map((productos, index) => (
              <Item item={productos} key={productos.id} />
            ))}
    </div>
  );
};

export default ItemList;
