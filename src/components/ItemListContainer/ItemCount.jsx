import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(initial);

  const sumarItem = () => {
    return setContador(contador + 1);
  };
  const restarItem = () => {
    return setContador(contador - 1);
  };

  const addItem = () => {
    return alert("se agregaron al carrito " + contador + " items");
  };

  return (
    <div className="count-container">
      <h1 className="count">{contador}</h1>

      <Button
        variant="primary"
        onClick={() => (contador > initial ? setContador(restarItem) : null)}
      >
        -
      </Button>

      <Button variant="success" onClick={() => setContador(initial)}>
        resetear
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          contador < stock
            ? setContador(sumarItem)
            : alert("el stock que tenemos es de " + stock + " unidades")
        }
      >
        +
      </Button>
      <br></br>

      <Button
        variant="danger"
        onClick={() => (contador <= stock ? addItem() : null)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
