import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./NavBar.css";
import { Logo } from "./logo";

import { CartWidged } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar className="navBar " data-bs-theme="black">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Navbar.Brand>
        <Nav className={"navLink d-flex gap-5"}>
          <NavLink to="category/tortas">Tortas</NavLink>
          <NavLink to="category/macaroons">Macaroons</NavLink>
          <NavLink to="category/alfajor">Alfajores</NavLink>
        </Nav>
        <CartWidged />
      </Container>
    </Navbar>
  );
};
