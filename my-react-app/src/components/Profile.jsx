/* eslint-disable react/prop-types */

// Composant Profile qui affiche le nom et la photo de profil d'un hôte
function Profile({ picture, name }) {

  // Sépare le nom complet en prénom et nom de famille
  const [firstName, ...lastNameParts] = name.split(' ');
  // Recompose le nom de famille à partir des parties restantes
  const lastName = lastNameParts.join(' ');

  return (
    <div className="profile">
      {/* Conteneur pour le nom */}
      <div className="profile-name">
        {/* Affiche le prénom */}
        <p>{firstName}</p>
        {/* Affiche le nom de famille */}
        <p>{lastName}</p>
      </div>
      {/* Image de profil */}
      <img src={picture} alt={name} className="profile-picture" />
    </div>
  );
}

// Export du composant Profile pour utilisation dans d'autres parties de l'application
export default Profile;