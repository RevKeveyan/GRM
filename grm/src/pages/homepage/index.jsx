// App.js

import React from 'react';
import Header from '../../components/header';
import Promo from '../../components/promo';
import Slider from '../../components/slider';



function HomePage() {
  return (
    <>
      <Promo/>
      <Header/>
      <Slider/>
    </>
  );
}

export default HomePage;
