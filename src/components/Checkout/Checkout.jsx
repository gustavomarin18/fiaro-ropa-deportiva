import React, { useState, useContext } from "react";
import useFireStore from "../../hooks/useFireStore";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";

const Checkout = ({ carrito, cartTotal }) => {
  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    item: carrito,
    total: cartTotal,
  });
  const { deleteAll } = useContext(CarritoContext);

  const { generateOrder } = useFireStore();

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateOrder({ datos: form });
    deleteAll();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleImputEmail1" class="form-label">
            Nombre
          </label>
          <input
            onChange={handleChange}
            name="name"
            value={form.buyer.name}
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="exampleImputEmail1" class="form-label">
            Telefono
          </label>
          <input
            onChange={handleChange}
            name="phone"
            value={form.buyer.phone}
            type="number"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="exampleImputEmail1" class="form-label">
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            value={form.buyer.email}
            type="email"
            class="form-control"
          />
        </div>

        <button
          disabled={!form.buyer.name || !form.buyer.phone || !form.buyer.email}
          type="submit"
          class="btn btn-primary"
        >
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
