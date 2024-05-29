// src/components/AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon1 from '../../assets/icons/about/tap.png';  // Ensure you have the icons
import Icon2 from '../../assets/icons/about/tap.png';
import Icon3 from '../../assets/icons/about/tap.png';
import "./style.scss";

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center mb-5">
          We are a transportation company offering various services including tow trucks, manipulators, and taps.
        </p>
        <div className="row mb-4 align-items-center">
          <div className="col-md-2 text-center">
            <div className="icon-circle">
              <img src={Icon1} alt="Tow Truck" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-10">
            <h5>Tow Truck</h5>
            <p>
              Our tow truck service is reliable and available 24/7. We have a fleet of modern tow trucks to assist you.
            </p>
          </div>
        </div>
        <div className="row mb-4 align-items-center">
          <div className="col-md-2 text-center">
            <div className="icon-circle">
              <img src={Icon2} alt="Manipulator" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-10">
            <h5>Manipulator</h5>
            <p>
              Our manipulators are perfect for lifting and transporting heavy loads with precision and safety.
            </p>
          </div>
        </div>
        <div className="row mb-4 align-items-center">
          <div className="col-md-2 text-center">
            <div className="icon-circle">
              <img src={Icon3} alt="Tap" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-10">
            <h5>Tap</h5>
            <p>
              Our tap services ensure a steady and reliable supply for all your needs, with high-quality equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
