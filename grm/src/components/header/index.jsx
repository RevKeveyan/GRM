// Header.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import Logo from "../../assets/icons/gmr-logo.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import enFlag from "../../assets/icons/flags/us.png";
import ruFlag from "../../assets/icons/flags/ru.png";
import hyFlag from "../../assets/icons/flags/am.png";
import "./style.scss"
function Header() {
  const phoneNumber = '098-01-87-88'; 
  const hrPhoneNumber = '37498018788';

  const { t, i18n } = useTranslation();

  const handleLanguageSelect = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getCurrentFlag = () => {
    switch (i18n.language) {
      case 'ru':
        return ruFlag;
      case 'hy':
        return hyFlag;
      case 'en':
      default:
        return enFlag;
    }
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#1A1C19" }} className="bg-body-tertiary justify-content-center">
      <Container>
        <Navbar.Brand>
          <div className="align-items-center justify-content-center" style={{ display: "flex" }}>
            <div className="header-menu" style={{ maxWidth: "300px", marginLeft: "10px" ,}}>
              <img style={{ maxWidth: "100%" }} src={Logo} alt="site.am" />
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="me-auto">
            <Nav.Link href="#tariff">{t('header.service')}</Nav.Link>
            <Nav.Link href="#about">{t('header.about')}</Nav.Link>
            <Nav.Link href="#gallery">{t('header.gallery')}</Nav.Link>
            <Nav.Link href="#contact">{t('header.contact')}</Nav.Link>
          </Nav>
           <NavDropdown
            style={{ marginRight: "20px" }}
            title={<img src={getCurrentFlag()} alt="Language" style={{ width: '20px' }} />}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item onClick={() => handleLanguageSelect('en')}>
              <img src={enFlag} alt="English" style={{ width: '20px', marginRight: '10px' }} />
              English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageSelect('ru')}>
              <img src={ruFlag} alt="Русский" style={{ width: '20px', marginRight: '10px' }} />
              Русский
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageSelect('hy')}>
              <img src={hyFlag} alt="Հայերեն" style={{ width: '20px', marginRight: '10px' }} />
              Հայերեն
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default Header;
