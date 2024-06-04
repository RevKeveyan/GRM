// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaViber, FaWhatsapp, FaFacebookF, FaPhoneAlt } from 'react-icons/fa'; // Import FaPhoneAlt for phone icon
import Logo from '../../assets/icons/logo.png';  // Ensure you have a logo image
import "./style.scss";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center mb-3 footer-logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-4 text-center mb-3">
            <h5>{t('footer.menu.title')}</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">{t('footer.menu.option1')}</a></li>
              <li><a href="/aboutus" className="text-white">{t('footer.menu.option2')}</a></li>
              <li><a href="/gallery" className="text-white">{t('footer.menu.option4')}</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center mb-3">
            <h5>{t('footer.contacts.title')}</h5>
            <div className="d-flex justify-content-center mb-3">
              <a href="viber://chat?number=%2B1234567890" className="text-white mx-2 icon-hover">
                <FaViber size={30} className='vi'/>
              </a>
              <a href="https://wa.me/1234567890" className="text-white mx-2 icon-hover">
                <FaWhatsapp size={30}  className='wa'/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556296985461" className="text-white mx-2 icon-hover">
                <FaFacebookF size={30} className='fa'/>
              </a>
            </div>
            <ul className="list-unstyled">
              <li>
                <a href="tel:093483814" className="text-white phone-number">
                  <FaPhoneAlt className="phone" /> 093 483 814
                </a>
              </li>
              <li>
                <a href="tel:077965411" className="text-white phone-number">
                  <FaPhoneAlt className="phone" /> 077 965 411
                </a>
              </li>
              <li>
                <a href="tel:093451338" className="text-white phone-number">
                  <FaPhoneAlt className="phone" /> 093 451 338
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
