/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

// Composant Card qui affiche une liste de cartes cliquables
function Card({ data }) {
  return (
    // Section principale contenant toutes les cartes
    <section className="background">
      {/* Conteneur pour les cartes */}
      <div className="content">
        {/* Itération sur chaque élément du tableau data */}
        {data.map((item) => (
          // Lien vers la page de détails de la carte, utilisant l'ID de l'item
          // La clé unique est également définie sur l'ID de l'item
          <Link to={`/card/${item.id}`} key={item.id}>
            {/* Conteneur individuel pour chaque carte */}
            <div className="card">
              {/* Image de couverture de la carte */}
              <img src={item.cover} alt={item.title} className="cover-image" />
              {/* Titre de la carte */}
              <p className="title-card">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Export du composant Card pour utilisation dans d'autres parties de l'application
export default Card;
  