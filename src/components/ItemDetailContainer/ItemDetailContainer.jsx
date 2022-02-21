import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const products = [
    {
      id: 1,
      title: "Biker",
      name: "kenia",
      description: "Calza biker",
      descriptionDetail: "Tejido: Lycra sublimada",
      warranty: "Contra defecto de Fabrica",
      origen: "Hecho en Argentina",
      price: 2580,
      stock: 30,
      pictureUrl: "https://i.ibb.co/5sB9HY8/calza-biker-kenia.jpg",
      pictureUrl2: "https://i.ibb.co/7RcQymp/buzo-africa.jpg",
    },
    {
      id: 2,
      title: "Buzo",
      name: "Africa",
      description: "Buzo-Rosa viejo",
      descriptionDetail: "Tejido: Algodón rústico",
      warranty: "Contra defecto de Fabrica",
      origen: "Hecho en Argentina",
      price: 2730,
      stock: 20,
      pictureUrl: "https://i.ibb.co/f2Sbnm0/Buzo-Africa.jpg",
      pictureUrl2: "https://i.ibb.co/SfgpbKd/calza-biker-kenia.jpg",
    },
    {
      id: 3,
      title: "Calza",
      name: "Mali",
      description: "Calza 3/4 lycra",
      descriptionDetail: "Tejido: Algodón rústico",
      warranty: "Contra defecto de Fabrica",
      origen: "Hecho en Argentina",
      price: 2100,
      stock: 10,
      pictureUrl: "https://i.ibb.co/YR5rgws/calza-capri-mali.jpg",
      pictureUrl2: "https://i.ibb.co/SfgpbKd/calza-biker-kenia.jpg",
    },
    {
      id: 4,
      title: "Remera",
      name: "Sabah",
      description: "Remera termica",
      descriptionDetail: "Tejido: Algodón rústico",
      warranty: "Contra defecto de Fabrica",
      origen: "Hecho en Argentina",
      price: 2980,
      stock: 40,
      pictureUrl: "https://i.ibb.co/fMRrzJ5/remera-sabah.jpg",
      pictureUrl2: "https://i.ibb.co/SfgpbKd/calza-biker-kenia.jpg",
    },
    {
      id: 5,
      title: "Top",
      name: "Sicilia",
      description: "Top con mangas",
      descriptionDetail: "Tejido: Algodón rústico",
      warranty: "Contra defecto de Fabrica",
      origen: "Hecho en Argentina",
      price: 1980,
      stock: 6,
      pictureUrl: "https://i.ibb.co/CQxqghS/top-sicilia.jpg",
      pictureUrl2: "https://i.ibb.co/SfgpbKd/calza-biker-kenia.jpg",
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

  {
  }

  return (
    <div>
      {productos
        .filter((productos) => productos.id == id)
        .map((productos, index) => (
          <ItemDetail item={productos} key={productos.id} />
        ))}
    </div>
  );
};

export default ItemDetailContainer;
