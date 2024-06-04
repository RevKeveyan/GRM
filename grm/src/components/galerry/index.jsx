// src/components/ImageGallery.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Slide16 from '../../assets/img/slide15.JPG';
import Slide17 from '../../assets/img/slide15.JPG';
import Slide18 from '../../assets/img/slide15.JPG';
import "./style.scss";
import { useTranslation } from 'react-i18next';

const allImages = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, 
  Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18
];

const ImageGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(allImages.length / imagesPerPage);

  const currentImages = allImages.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage);
  
  const { t, i18n } = useTranslation();
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container text-center">
      <h1 className="my-4">{t('galery.title')}</h1>
      <div className="row justify-content-center">
        {currentImages.map((image, index) => (
          <div key={index} className="col-md-4 mb-4">
            <img src={image} className="img-fluid" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(totalPages).keys()].map(page => (
            <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(page + 1)}>
                {page + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ImageGallery;
