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
    <footer className="footer bg-dark text-white py-4" id='contact'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center mb-3 footer-logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-4 text-center mt-3">
            <div className="map-responsive">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d319.6008610516688!2d45.128851527711475!3d40.351818652810884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1723719468354!5m2!1sru!2sam"
                maxWidth="600px"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe> */}
            </div>
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
      <div className='copytext'>© 2024 grmservice.am - Բոլոր իրավունքները պաշտպանված են</div>
    </footer>
  );
};

export default Footer;
