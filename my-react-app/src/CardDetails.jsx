/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Tag from './Tag';
import Scrollbar from './Scrollbar.jsx';
import Profile from './Profile';

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
        <img src={card.cover} alt={card.title} />
        <div>
          <h2>{card.title}</h2>
          <p>{card.location}</p>
          <Tag tags={card.tags} />
          <Profile picture={card.host.picture} name={card.host.name} />
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