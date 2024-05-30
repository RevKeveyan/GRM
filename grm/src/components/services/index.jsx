// src/components/Services.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const Services = () => {
  return (
    <section className="services py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <p className="text-center mb-5">
          We provide the services of a crane operator, a tow truck operator, and offer equipment for various works to meet all your needs.
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="service-box p-4">
              <div className="service-icon mb-3">
                <i className="fas fa-crane"></i> {/* Use FontAwesome or other icon library */}
              </div>
              <h4>Crane Operator</h4>
              <p>Our experienced crane operators are available for all types of lifting and construction needs.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="service-box p-4">
              <div className="service-icon mb-3">
                <i className="fas fa-truck"></i> {/* Use FontAwesome or other icon library */}
              </div>
              <h4>Tow Truck Operator</h4>
              <p>Reliable tow truck services available 24/7 to assist you in any situation.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="service-box p-4">
              <div className="service-icon mb-3">
                <i className="fas fa-tools"></i> {/* Use FontAwesome or other icon library */}
              </div>
              <h4>Equipment Rental</h4>
              <p>We provide high-quality equipment for various works, ensuring your projects run smoothly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
