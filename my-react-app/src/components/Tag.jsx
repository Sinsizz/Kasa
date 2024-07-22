/* eslint-disable react/prop-types */

// Composant Tag qui affiche une liste de tags
function Tag({ tags }) {
  return (
    // Conteneur pour les tags
    <div className="tag-container">
      {/* Itération sur le tableau de tags */}
      {tags.map((tag, index) => (
        // Affichage de chaque tag dans un élément span
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

// Export du composant Tag pour utilisation dans d'autres parties de l'application
export default Tag;