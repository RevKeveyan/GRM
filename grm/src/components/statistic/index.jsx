// src/components/Statistics.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const Statistics = () => {
  return (
    <section className="statistics py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="stat-box">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="stat-box">
              <h3>1000+</h3>
              <p>Satisfied Customers</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="stat-box">
              <h3>67+</h3>
              <p>Total Transports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
