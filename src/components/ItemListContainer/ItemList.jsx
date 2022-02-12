import React from "react";
import Item from "./Item";
import { useEffect, useState } from "react";

const ItemList = () => {
  const products = [
    {
      id: 1,
      title: "biker",
      name: "kenia",
     description: "Calza biker",
      price: 2580,
      stock: 30,
      pictureUrl:
        "https://i.ibb.co/5sB9HY8/calza-biker-kenia.jpg",
    },
    {
      id: 2,
      title: "Buzos",
      name: "Africa",
     description: "Buzo-Rosa viejo",
      price: 2730,
      stock: 20,
      pictureUrl:
      "https://i.ibb.co/f2Sbnm0/Buzo-Africa.jpg",
    },
    {
      id: 3,
      title: "Calzas",
      name: "Mali",
     description: "Calza 3/4 lycra",
      price: 2100,
      stock: 10,
      pictureUrl:
        "https://i.ibb.co/YR5rgws/calza-capri-mali.jpg",
    },
    {
      id: 4,
      title: "Remera",
      name: "Sabah",
     description: "Remera con capucha termica",
      price: 2980,
      stock: 40,
      pictureUrl:
        "https://i.ibb.co/fMRrzJ5/remera-sabah.jpg",
    },
    {
      id: 5,
      title: "Tops",
      name: "Sicilia",
     description: "Top con mangas",
      price: 1980,
      stock: 6,
      pictureUrl:
        "https://i.ibb.co/CQxqghS/top-sicilia.jpg",
    },

  ];

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
    getData(products)
      .then((res) => setProductos(res))
      .catch((err) => console.log(err));
  }, );

  return (
    <div>
      {/* {productos.map((item) =>(<Item key= {item.id} item={item}/>))} */}

      {productos.length ? (
        productos.map((producto) => <Item item={producto} key={producto.id} />)
      ) : (
        <h1>"Cargando..."</h1>
      )}
    </div>
  );
};

export default ItemList;
