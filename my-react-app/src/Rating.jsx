/* eslint-disable react/prop-types */
import starFilled from '/src/assets/star-filled.png'; 
import starEmpty from '/src/assets/star-empty.png';  

function Rating({ rating }) {
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