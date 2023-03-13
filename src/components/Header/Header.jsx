import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="info" variant="light">
        <Container>
          <img
            src="https://cdn-icons-png.flaticon.com/128/8055/8055417.png"
            alt="error"
            width={50}
          />
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to="/add-vlog">
            <Navbar.Brand>Add vlog</Navbar.Brand>
          </Link>
          <Link to="/contact">
            <Navbar.Brand>Contact</Navbar.Brand>
          </Link>
          <Link to="/about-us">
            <Navbar.Brand>About us</Navbar.Brand>
          </Link>
          <Link to="/select">
            <Navbar.Brand>Select</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
