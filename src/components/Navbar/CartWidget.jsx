import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";
import { React, useContext } from "react";

const CartWidget = () => {
  const { contarItems } = useContext(CarritoContext);

  return (
    <div>
      <Nav.Link>
        <Link to="/cart">
          <FontAwesomeIcon className="shoping-cart" icon={faShoppingCart} />
          {contarItems()}
        </Link>
      </Nav.Link>
    </div>
  );
};

export default CartWidget;
