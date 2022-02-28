import { React, useContext } from "react";

import { CarritoContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartResult, deleteAll, carrito, removeItem,cartTotal } =
    useContext(CarritoContext);


    console.log (carrito)



  return (
    <div>
{carrito.map((d) => (
        <div key={d.id}>
          <img src={d.pictureUrl}></img>
          <h1>{d.title}</h1>
          <h1>cantidad:{d.quanty}</h1>

          <p>{d.description}</p>

          <p>{d.price}</p>
          <button onClick={() => removeItem(d.id)}>borrar</button>
        </div>
      ))}

      {carrito.length > 0 ? (
        <div><button onClick={deleteAll}>Borrar todo</button><h1>El precio total de tus productos es ${cartTotal()}</h1>
        <button>terminar con la compra</button>
        
        </div>
      ) : (
        <Link to="/">
          <h1>
            No tienes productos seleccionados hace click aqui para empezar a
            comprar
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Cart;
