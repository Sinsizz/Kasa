/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Card({ data }) {
  return (
    <section className="background">
      <div className="content">
        {data.map((item, index) => (
          <Link to={`/card/${index}`} key={index}>
            <div className="card">
              <img src={item.cover} alt={item.title} className="cover-image" />
              <p className="title-card">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Card;
  