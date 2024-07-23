/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Vérifier si le tableau pictures ne contient qu'une seule image
  const hasSingleImage = pictures.length === 1;

  return (
    <div className="carrousel">
      {/* Afficher les flèches de navigation uniquement s'il y a plus d'une image */}
      {!hasSingleImage && (
        <>
          <img
            src={arrowLeft}
            alt="Précédent"
            className="arrow left-arrow"
            onClick={goToPrevious}
          />
          <img
            src={arrowRight}
            alt="Suivant"
            className="arrow right-arrow"
            onClick={goToNext}
          />
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carrousel-image"
      />
      {/* Afficher le numéro de l'image uniquement s'il y a plus d'une image */}
      {!hasSingleImage && (
        <div className="slide-number">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carrousel;