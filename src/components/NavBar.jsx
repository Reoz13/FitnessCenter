import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidged } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="danger" data-bs-theme="black">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">Home </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="category/tortas">Tortas</NavLink>
          <NavLink to="category/macaroons">Macaroons</NavLink>
          <NavLink to="category/alfajor">Alfajores</NavLink>
        </Nav>
        <CartWidged />
      </Container>
    </Navbar>
  );
};
