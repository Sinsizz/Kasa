/* eslint-disable react/prop-types */
import starFilled from '../assets/star-filled.png'; // Assurez-vous d'avoir cette image
import starEmpty from '../assets/star-empty.png';  // Assurez-vous d'avoir cette image

function Rating ({ rating }) {
  const totalStars = 5;
  const filledStars = parseInt(rating);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < filledStars ? starFilled : starEmpty}
          alt={index < filledStars ? "Étoile remplie" : "Étoile vide"}
          className="star"
        />
      ))}
    </div>
  );
}

export default Rating;