// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/icons/logo.png';  // Ensure you have a logo image
import "./style.scss";


const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center mb-3 footer-logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-4 text-center mb-3">
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/aboutus" className="text-white">About Us</a></li>
              <li><a href="/contacts" className="text-white">Contacts</a></li>
              <li><a href="/gallery" className="text-white">Gallery</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="viber://chat?number=%2B1234567890" className="text-white">Viber</a></li>
              <li><a href="https://wa.me/1234567890" className="text-white">WhatsApp</a></li>
              <li><span className="text-white">Phone: +1 234 567 890</span></li>
              <li><span className="text-white">Phone: +1 098 765 432</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
