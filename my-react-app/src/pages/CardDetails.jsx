/* eslint-disable react/prop-types */
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Tag from '../components/Tag.jsx';
import Scrollbar from '../components/Scrollbar.jsx';
import Rating from '../components/Rating.jsx';
import Profile from '../components/Profile.jsx';
import Carrousel from '../components/Carrousel.jsx';

// Composant CardDetails qui affiche les détails d'une carte
function CardDetails({ data }) {
  // Récupération de l'ID de la carte depuis l'URL
  const { cardId } = useParams();
  // Recherche de la carte correspondante dans les données
  const card = data.find(item => item.id === cardId);

  // Si la carte n'est pas trouvée, redirigez vers NotFound
  if (!card) {
    return <Navigate to="/not-found" replace />;
  }

  // Fonction pour formater les équipements en une chaîne de caractères
  const formatEquipments = (equipments) => {
    return equipments.join('\n');
  };

  return (
    <>
      <Header /> 
      {/* Section principale pour les détails de la carte */}
      <section className='carddetails'>
        {/* Carrousel d'images pour la carte */}
        <Carrousel pictures={card.pictures} />
        {/* Informations principales de la carte */}
        <div className="card-info">
          <div className="card-main-info">
            {/* Titre de la carte */}
            <h2>{card.title}</h2>
            {/* Localisation de la carte */}
            <p>{card.location}</p>
            {/* Tags de la carte */}
            <Tag tags={card.tags} />
          </div>
          {/* Informations de l'hôte et notation */}
          <div className="host-info">
            {/* Profil de l'hôte */}
            <Profile picture={card.host.picture} name={card.host.name} />
            {/* Notation de la carte */}
            <Rating rating={card.rating} />
          </div>
        </div>
        {/* Conteneurs pour la description et les équipements */}
        <div className="scrollbar-container">
          {/* Scrollbar pour la description */}
          <Scrollbar 
            title="Description"
            content={card.description}
          />
          {/* Scrollbar pour les équipements */}
          <Scrollbar 
            title="Équipements"
            content={formatEquipments(card.equipments)}
          />
        </div>
      </section>
      <Footer /> 
    </>
  );
}
export default CardDetails;