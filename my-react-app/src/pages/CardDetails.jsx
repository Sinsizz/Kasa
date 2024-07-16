/* eslint-disable react/prop-types */
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Tag from '../components/Tag.jsx';
import Scrollbar from '../components/Scrollbar.jsx';
import Rating from '../components/Rating.jsx';
import Profile from '../components/Profile.jsx';
import Carrousel from '../components/Carrousel.jsx';


function CardDetails({ data }) {
  const { cardId } = useParams();
  const card = data.find(item => item.id === cardId);

  // Si la carte n'est pas trouvée, redirigez vers NotFound
  if (!card) {
    return <Navigate to="/not-found" replace />;
  }

  const formatEquipments = (equipments) => {
    return equipments.join('\n');
  };

  return (
    <>
      <Header /> 
      <section className='carddetails'>
      <Carrousel pictures={card.pictures} />
        <div className="card-info">
          <div className="card-main-info">
            <h2>{card.title}</h2>
            <p>{card.location}</p>
            <Tag tags={card.tags} />
          </div>
          <div className="host-info">
            <Profile picture={card.host.picture} name={card.host.name} />
            <Rating rating={card.rating} />
          </div>
        </div>
        <div className="scrollbar-container">
          <Scrollbar 
            title="Description"
            content={card.description}
          />
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