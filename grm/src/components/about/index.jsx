// src/components/AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon1 from '../../assets/icons/about/tow.png';
import Icon2 from '../../assets/icons/about/mon.png';
import Icon3 from '../../assets/icons/about/tap.png';
import Icon4 from '../../assets/icons/about/jcb.png';
import Icon5 from '../../assets/icons/about/kamaz.png';
import Icon6 from '../../assets/icons/about/drill.png'; // New icon import
import "./style.scss";

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center mb-5">
          We are a transportation company offering various services including tow trucks, manipulators, taps, tractors, Kamaz trucks, and drilling rigs.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon1} alt="Tow Truck" className="img-fluid" />
              </div>
              <h5>Tow Truck</h5>
              <p>
                Our tow truck service is reliable and available 24/7. We have a fleet of modern tow trucks to assist you.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon2} alt="Manipulator" className="img-fluid" />
              </div>
              <h5>Manipulator</h5>
              <p>
                Our manipulators are perfect for lifting and transporting heavy loads with precision and safety.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon3} alt="Tap" className="img-fluid" />
              </div>
              <h5>Tap</h5>
              <p>
                Our tap services ensure a steady and reliable supply for all your needs, with high-quality equipment.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon4} alt="Tractor" className="img-fluid" />
              </div>
              <h5>Tractor</h5>
              <p>
                Our tractor services are ideal for agricultural, construction, and landscaping projects, providing power and efficiency.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon5} alt="Kamaz" className="img-fluid" />
              </div>
              <h5>Kamaz</h5>
              <p>
                Our Kamaz trucks are reliable and versatile, suitable for various transport needs.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon6} alt="Drilling Rig" className="img-fluid" />
              </div>
              <h5>Drilling Rig</h5>
              <p>
                Our drilling rigs are equipped with the latest technology for efficient and precise drilling operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
