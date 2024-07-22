/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';

// Composant Carrousel qui affiche un carrousel d'images
const Carrousel = ({ pictures }) => {
  // État pour suivre l'index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image précédente
  const goToPrevious = () => {
    // Vérifie si nous sommes sur la première image
    const isFirstSlide = currentIndex === 0;
    // Si c'est la première image, passe à la dernière image
    // Sinon, passe à l'image précédente
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Fonction pour passer à l'image suivante
  const goToNext = () => {
    // Vérifie si nous sommes sur la dernière image
    const isLastSlide = currentIndex === pictures.length - 1;
    // Si c'est la dernière image, passe à la première image
    // Sinon, passe à l'image suivante
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Rendu du composant Carrousel
  return (
    <div className="carrousel">
      {/* Bouton pour passer à l'image précédente */}
      <img 
        src={arrowLeft} 
        alt="Précédent" 
        className="arrow left-arrow" 
        onClick={goToPrevious}
      />
      {/* Bouton pour passer à l'image suivante */}
      <img 
        src={arrowRight} 
        alt="Suivant" 
        className="arrow right-arrow" 
        onClick={goToNext}
      />
      {/* Image actuelle du carrousel */}
      <img 
        src={pictures[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="carrousel-image"
      />
      {/* Numéro de l'image actuelle et nombre total d'images */}
      <div className="slide-number">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
};

// Export du composant Carrousel pour utilisation dans d'autres parties de l'application
export default Carrousel;