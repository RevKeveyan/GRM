// src/components/ImageCarousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
import "./style.scss";


const images = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8,
  Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15
];

const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const ImageCarousel = () => {
  const validImages = images.length - (images.length % 4);
  const displayedImages = images.slice(0, validImages);
  const imageGroups = chunkArray(displayedImages, 4);

  return (
    <Carousel>
      {imageGroups.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            {group.map((image, idx) => (
              <div key={idx} className="p-2">
                <img src={image} className="d-block" alt={`Slide ${index * 4 + idx + 1}`} />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
