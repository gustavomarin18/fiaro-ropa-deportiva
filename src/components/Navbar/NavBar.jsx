import React from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar({ item }) {
  return (
    <div>
      {/*barra de navbar realizada con reactbootstrap -Scrolling- (https://react-bootstrap.github.io/) */}
      <Navbar bg="light" expand="lg" className="p-0">
        <Container className="container-navbar" fluid>
          <Link to="/">
            <Navbar.Brand className="logo-navbar">Fiaro</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Nuestra historia</Nav.Link>
              <Nav.Link href="#action2">Contacto</Nav.Link>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/category/buzo"> Buzos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/calza"> Calzas</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/remera"> Remeras</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/top"> Top</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/*<Nav.Link href="#">
                {" "}
                <FontAwesomeIcon className="sign-in" icon={faSignInAlt} />
                Inicio sesion
  </Nav.Link>*/}

              {/* carrito de compras en componente Cartwidget */}
              <CartWidget />
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Producto"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Encuentrame</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
