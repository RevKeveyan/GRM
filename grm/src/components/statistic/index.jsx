// src/components/Statistics.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="statistics py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="stat-box">
              <h3>10+</h3>
              <p>{t('experience.years')}</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="stat-box">
              <h3>1000+</h3>
              <p>{t('experience.customers')}</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="stat-box">
              <h3>13+</h3>
              <p>{t('experience.customers')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
