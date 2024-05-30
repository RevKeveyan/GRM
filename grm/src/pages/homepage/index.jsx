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



function HomePage() {
  return (
    <>
      <Promo/>
      <Header/>
      <Slider/>
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
