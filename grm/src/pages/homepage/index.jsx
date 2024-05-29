// App.js

import React from 'react';
import Header from '../../components/header';
import Promo from '../../components/promo';
import Slider from '../../components/slider';
import ImageGallery from '../../components/galerry/index';
import Footer from '../../components/footer';
import AboutUs from '../../components/about';



function HomePage() {
  return (
    <>
      <Promo/>
      <Header/>
      <Slider/>
      <AboutUs/>
      <ImageGallery/>
      <Footer/>

    </>
  );
}

export default HomePage;
