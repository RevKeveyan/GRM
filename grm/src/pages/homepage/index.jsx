// App.js

import React from 'react';
import Header from '../../components/header';
import Promo from '../../components/promo';
import Slider from '../../components/slider';
import ImageGallery from '../../components/galerry/index';
import Footer from '../../components/footer';
import AboutUs from '../../components/about';
import Statistics from '../../components/statistic';
import Services from '../../components/services';
import CallButton from '../../components/callbtn';
import { useTranslation } from 'react-i18next';
import "./style.scss"


function HomePage() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Promo/>
      <Header/>
      <Slider/>
        <div className='main-title'>
        <h1 >{t('h1.title')}</h1>
        </div>
      <Statistics/>
      <Services/>
      <AboutUs/>
      <ImageGallery/>
      <CallButton/>
      <Footer/>

    </>
  );
}

export default HomePage;
