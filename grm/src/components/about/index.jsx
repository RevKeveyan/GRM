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
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="about-us py-5" id="about">
      <div className="container">
        <h2 className="text-center mb-4">{t('about.title')}</h2>
        <p className="text-center mb-5 service-subtitle">
        {t('about.subtitle')}
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon1} alt="Tow Truck" className="img-fluid" />
              </div>
              <h5>{t('about.vehicles.tow.title')}</h5>
              {/* <p>
              {t('about.vehicles.tow.subtitle')}
              </p> */}
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon2} alt="Manipulator" className="img-fluid" />
              </div>
              <h5>{t('about.vehicles.manipulator.title')}</h5>
              {/* <p>
              {t('about.vehicles.manipulator.subtitle')}
              </p> */}
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon3} alt="Tap" className="img-fluid" />
              </div>
              <h5>{t('about.vehicles.tap.title')}</h5>
              {/* <p>
              {t('about.vehicles.tap.subtitle')}
              </p> */}
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon4} alt="Tractor" className="img-fluid" />
              </div>
              <h5>{t('about.vehicles.tractor.title')}</h5>
              {/* <p>
              {t('about.vehicles.tractor.subtitle')}
              </p> */}
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon5} alt="Kamaz" className="img-fluid" />
              </div>
              <h5>{t('about.vehicles.truck.title')}</h5>
              {/* <p>
              {t('about.vehicles.truck.subtitle')}
              </p> */}
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <div className="icon-circle">
                <img src={Icon6} alt="Drilling Rig" className="img-fluid" />
              </div>
              <h5>{t('about.vehicles.drill.title')}</h5>
              {/* <p>
              {t('about.vehicles.drill.subtitle')}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
