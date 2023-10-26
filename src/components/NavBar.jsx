import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidged } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="danger" data-bs-theme="black">
      <Container>
        <Navbar.Brand href="#home">FitnessCenter</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Clases</Nav.Link>
          <Nav.Link href="#pricing">Horarios</Nav.Link>
          <Nav.Link href="#contactos">Contactos</Nav.Link>
        </Nav>
        <CartWidged />
      </Container>
    </Navbar>
  );
};
