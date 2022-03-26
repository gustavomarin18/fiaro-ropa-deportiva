import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/ItemCount.css";
import { CarritoContext } from "../../context/CartContext";

const ItemCount = ({ stock, initial, item }) => {
  const [contador, setContador] = useState(initial);

  const { agregarAlCarrito, isInCart } = useContext(CarritoContext);
  console.log("desde item count", isInCart(item.id));

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

  return (
    <>
      {!isInCart(item.id) ? (
        <div className="count-container">
          <h6 className="actual-Count btn1">{contador}</h6>

          <button className="boton btn3" onClick={restarContador}>
            -
          </button>

          <button className="boton btn2" onClick={aumentarContador}>
            +
          </button>
          <h1 className="add-cart">
            vas a agregar al carrito {contador} producto/s
          </h1>

          <Link to="/cart">
            <button
              onClick={() => agregarAlCarrito(item, contador)}
              className="finish-buy"
            >
              Agregar al carrito
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>Ya agregastes este articulo al carrito </h1>
        </div>
      )}
    </>
  );
};

export default ItemCount;
