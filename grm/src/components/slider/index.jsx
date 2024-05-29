import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from '../../assets/img/slide1.JPG';
import Slide2 from '../../assets/img/slide2.JPG';
import Slide3 from '../../assets/img/slide3.JPG';
import Slide4 from '../../assets/img/slide4.JPG';
import Slide5 from '../../assets/img/slide5.JPG';
import Slide6 from '../../assets/img/slide6.JPG';
import Slide7 from '../../assets/img/slide7.JPG';
import Slide8 from '../../assets/img/slide8.JPG';
import Slide9 from '../../assets/img/slide9.JPG';
import Slide10 from '../../assets/img/slide10.JPG';
import Slide11 from '../../assets/img/slide11.JPG';
import Slide12 from '../../assets/img/slide12.JPG';
import Slide13 from '../../assets/img/slide13.JPG';
import Slide14 from '../../assets/img/slide14.JPG';
import Slide15 from '../../assets/img/slide15.JPG';

function Slider() {
  const slides = [
    Slide1, Slide2, Slide3, Slide4,
    Slide5, Slide6, Slide7, Slide8,
    Slide9, Slide10, Slide11, Slide12,
    Slide13,Slide14,Slide15
  ];

  const renderSlideItems = () => {
    return slides.map((slide, index) => (
      <img
        key={index}
        className="w-25"
        src={slide}
        alt={`Slide ${index + 1}`}
         style={{ maxHeight: '400px', objectFit: 'cover', marginRight: '10px' }}
      />
    ));
  };

  return (
    <Carousel interval={null} style={{ maxHeight: '400px', overflow: 'hidden', marginTop:"10px" }}>
      <Carousel.Item>
        <div className="d-flex">{renderSlideItems().slice(0, 4)}</div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex">{renderSlideItems().slice(4, 8)}</div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex">{renderSlideItems().slice(8, 12)}</div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
