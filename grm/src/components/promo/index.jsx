import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import "./style.scss";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#1A1C19" }}
      className="justify-content-center"
    >
      <Container className="justify-content-center">
        <Navbar.Brand
          href="mailto:contact@grmservice.am"
          className="mx-auto navbar-brand"
        >
          contact@grmservice.am
        </Navbar.Brand>
        <Nav className="mx-auto" >
          <Nav.Link href="tel:+37493483814" className="nav-link1">
            <FaPhoneAlt style={{ marginRight: "5px",  }} />
            093-483-814
          </Nav.Link>
          <Nav.Link href="tel:+37477965411" className="nav-link1">
            <FaPhoneAlt style={{ marginRight: "5px" }} />
            077-965-411
          </Nav.Link>
          <Nav.Link href="tel:+37493451338" className="nav-link1">
            <FaPhoneAlt style={{ marginRight: "5px" }} />
            093-451-338
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
