/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function CardDetails({ data }) {
  const { cardId } = useParams();
  const card = data[cardId];

  return (
    <>
      <Header /> 
    <section>
        <div>
        <img src={card.cover} alt={card.title} />
        </div>
        <div>
        <h2>{card.title}</h2>
        </div>
    </section>
      <Footer /> 
    </>
  );
}

export default CardDetails;