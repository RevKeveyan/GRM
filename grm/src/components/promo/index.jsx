import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import "./style.scss";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#1A1C19" }}
      className=" p-0 header "
    >
      <Container className=" phone-numbers">
        <Nav className="phone-nav" >
          <Nav.Link href="tel:+37493483814" className="nav-link1">
            <FaPhoneAlt style={{ marginRight: "5px",  }} />
            093-483-814
          </Nav.Link>
          <Nav.Link href="tel:+37477965411" className="nav-link1">
            <FaPhoneAlt style={{ marginRight: "5px" }} />
            077-965-411
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
