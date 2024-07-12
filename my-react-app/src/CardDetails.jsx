/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Tag from './Tag.jsx';
import Scrollbar from './Scrollbar.jsx';
import Rating from './Rating.jsx';
import Profile from './Profile.jsx';


function CardDetails({ data }) {
  const { cardId } = useParams();
  const card = data[cardId];

  const formatEquipments = (equipments) => {
    return equipments.join('\n');
  };

  return (
    <>
      <Header /> 
      <section className='carddetails'>
        <img src={card.cover} alt={card.title} className="card-cover" />
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