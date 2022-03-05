import { React, useContext } from "react";
import "../styles/Cart.css";
import { CarritoContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const {  deleteAll, carrito, removeItem, cartTotal } =
    useContext(CarritoContext);

 

  return (
    <div className="cart">
      {carrito.map((d) => (
        
        <div className="cartArticle" key={d.id}>
          <img className="cartImage" src={d.pictureUrl}></img>
          <h1>{d.title}</h1>
          <h1>cantidad:{d.quanty}</h1>

          <p>{d.description}</p>

          <p>{d.price}$</p>
          <button onClick={() => removeItem(d.id)}>borrar</button>
         
        </div>
      ))}

      {carrito.length > 0 ? (
        <div className="checkout" >
          <button className="checkoutClear" onClick={deleteAll}>Borrar todo</button>
          <h1>El precio total de tus productos es ${cartTotal()}</h1>
          <div><Checkout carrito={carrito} cartTotal={cartTotal()}/></div>


         
        </div>
      ) : (
        <div className="empty">
        <Link  to="/">
          <h1>
            No tienes productos seleccionados hace click aqui para empezar a
            comprar
          </h1>
        </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
