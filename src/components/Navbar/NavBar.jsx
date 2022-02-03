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

function NavBar() {
  return (
    <div>
      {/*barra de navbar realizada con reactbootstrap -Scrolling- (https://react-bootstrap.github.io/) */}
      <Navbar bg="light" expand="lg" className="p-0">
        <Container className="container-navbar" fluid>
          <Navbar.Brand className="logo-navbar" href="#">
            Fiaro
          </Navbar.Brand>
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
                <NavDropdown.Item href="#action3">Bikers</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Buzos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Calzas capri
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Calzas cortas
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                {" "}
                <FontAwesomeIcon className="sign-in" icon={faSignInAlt} />
                Inicio sesion
              </Nav.Link>

              {/* carrito de compras en componente Cartwidget */}
              <CartWidget />
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Producto"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Encuentrame</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
