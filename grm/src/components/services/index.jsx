// src/components/Services.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="services py-5">
      <div className="container">
        <h2 className="text-center mb-4">{t('service.title')}</h2>
        <p className="text-center mb-5">
            {t('service.subtitle')}
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="service-box p-4">
              <div className="service-icon mb-3">
                <i className="fas fa-crane"></i> {/* Use FontAwesome or other icon library */}
              </div>
              <h4>{t('service.service1.title')}</h4>
              <p>{t('service.service1.subtitle')}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="service-box p-4">
              <div className="service-icon mb-3">
                <i className="fas fa-truck"></i> {/* Use FontAwesome or other icon library */}
              </div>
              <h4>{t('service.service2.title')}</h4>
              <p>{t('service.service2.subtitle')}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div className="service-box p-4">
              <div className="service-icon mb-3">
                <i className="fas fa-tools"></i> {/* Use FontAwesome or other icon library */}
              </div>
              <h4>{t('service.service3.title')}</h4>
              <p>{t('service.service3.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
