/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Card({ data }) {
  return (
    <section className="background">
      <div className="content">
        {data.map((item) => (
          <Link to={`/card/${item.id}`} key={item.id}>
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
  