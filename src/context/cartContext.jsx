import React from "react";
import { createContext, useState } from "react";
export const CarritoContext = createContext();

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, quanty) => {
    const nuevoItem = { ...item, quanty: quanty };
    setCarrito([...carrito, nuevoItem]);
  };

  const isInCart = (itemId) => {
    return carrito.some((elemento) => elemento.id === itemId);
  };

  const contarItems = () => {
    if (carrito.length > 0) {
      let acumulador = 0;
      carrito.map((item) => (acumulador += item.quanty));
      return acumulador;
    }
  };

  const deleteAll = () => {
    setCarrito([]);
  };

  const removeItem = (itemId) => {
    const deleteItem = carrito.filter((item) => item.id !== itemId);
    setCarrito([...deleteItem]);
  };

  const cartTotal = () => {
    let total = 0;
    carrito.map((item) => (total += item.price * item.quanty));
    return total;
  };

  return (
    <CarritoContext.Provider
      value={{
        agregarAlCarrito,
        carrito,
        contarItems,
        deleteAll,
        removeItem,
        cartTotal,
        isInCart,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CartContext;
