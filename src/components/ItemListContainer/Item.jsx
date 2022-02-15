import React from "react";
import "../styles/Item.css";
import { Button,  } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <div className="items">
      <h1 className="item-title">{item.title}</h1>
      <p className="item-description">Descripción:{item.description}</p>
      <h4 className="item-price">Precio:{item.price}$</h4>
      <img
        className="img-item"
        src={item.pictureUrl}
        alt="IMG-0061"
        border="0"
      ></img>
      <br></br>
      <Button className="item-button" variant="info">
        Ver detalle del producto
      </Button>
      <p className="item-stock">Stock disponible: {item.stock}</p>
    </div>
  );
};

export default Item;
