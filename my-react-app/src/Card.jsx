/* eslint-disable react/prop-types */

function Card({ data }) {
    return (
      <section className="background">
        <div className="content">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.cover} alt={item.title} className="cover-image" />
            <p className="title-card">{item.title}</p>
          </div>
          
        ))}
        </div>
      </section>
    );
  }
  
  export default Card;
  