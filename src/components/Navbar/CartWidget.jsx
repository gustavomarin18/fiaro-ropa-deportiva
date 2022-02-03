import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";

const CartWidget = () => {
  return (
    <div>
      <Nav.Link href="#">
        <FontAwesomeIcon className="shoping-cart" icon={faShoppingCart} />
      </Nav.Link>
    </div>
  );
};

export default CartWidget;
