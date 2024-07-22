/* eslint-disable react/prop-types */
import starFilled from '/src/assets/star-filled.png'; 
import starEmpty from '/src/assets/star-empty.png';  

// Composant Rating qui affiche un système de notation par étoiles
function Rating({ rating }) {
  // Nombre total d'étoiles à afficher
  const totalStars = 5;
  // Nombre d'étoiles remplies basé sur la note
  const filledStars = parseInt(rating);

  return (
    <div className="rating">
      {/* Création d'un tableau de longueur totalStars */}
      {[...Array(totalStars)].map((_, index) => (
        // Affichage d'une étoile remplie ou vide en fonction de l'index
        <img
          key={index}
          // Utilise l'image d'étoile remplie si l'index est inférieur à filledStars, sinon utilise l'image d'étoile vide
          src={index < filledStars ? starFilled : starEmpty}
          // Texte alternatif pour l'accessibilité
          alt={index < filledStars ? "Étoile remplie" : "Étoile vide"}
          className="star"
        />
      ))}
    </div>
  );
}

// Export du composant Rating pour utilisation dans d'autres parties de l'application
export default Rating;