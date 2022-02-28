
import React from "react";
import Item from "./Item";
import { useEffect, useState } from "react";
import "../styles/ItemList.css";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const products = [
    {
      id: 1,
      title: "Biker",
      name: "kenia",
      description: "Calza biker",
      price: 2580,
      stock: 30,
      pictureUrl: "https://i.ibb.co/5sB9HY8/calza-biker-kenia.jpg",
      category: "calza",
    },
    {
      id: 2,
      title: "Buzo",
      name: "Africa",
      description: "Buzo-Rosa viejo",
      price: 2730,
      stock: 20,
      pictureUrl: "https://i.ibb.co/f2Sbnm0/Buzo-Africa.jpg",
      category: "buzo",
    },
    {
      id: 3,
      title: "Calza",
      name: "Mali",
      description: "Calza 3/4 lycra",
      price: 2100,
      stock: 10,
      pictureUrl: "https://i.ibb.co/YR5rgws/calza-capri-mali.jpg",
      category: "calza",
    },
    {
      id: 4,
      title: "Remera",
      name: "Sabah",
      description: "Remera con capucha termica",
      price: 2980,
      stock: 40,
      pictureUrl: "https://i.ibb.co/fMRrzJ5/remera-sabah.jpg",
      category: "remera",
    },
    {
      id: 5,
      title: "Top",
      name: "Sicilia",
      description: "Top con mangas",
      price: 1980,
      stock: 6,
      pictureUrl: "https://i.ibb.co/CQxqghS/top-sicilia.jpg",
      category: "top",
    },
  ];
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

 

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if (data) {
            resolve(data);
          } else {
            reject("No se encontro nada");
          }
        },

        2000
      );
    });

  useEffect(() => {
    getData(products, id)
      .then((res) => setProductos(res))
      .catch((err) => console.log(err));
  }, [id]);

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
















