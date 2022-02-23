import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(initial);
  const [first, setFirst] = useState(false);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restarContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  const onAdd = () => {
    if (stock > 0) {
      setFirst(true);
      setContador(contador);
    }
  };

  return (
    <>
      {first === false ? (
        <div className="count-container">
          <h6 className="actual-Count btn1">{contador}</h6>

          <button className="boton btn3" onClick={restarContador}>
            -
          </button>
          <button className="boton btn4" onClick={onAdd}>
            Agregar al carrito
          </button>
          <button className="boton btn2" onClick={aumentarContador}>
            +
          </button>
        </div>
      ) : (
        <div>
          <h1 className="add-cart">
            vas a agregar al carrito {contador} producto/s
          </h1>
          <Link to="/cart">
            <button className="finish-buy">Terminar mi compra</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemCount;

{
  /*import React from "react";
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

export default ItemCount;*/
}
