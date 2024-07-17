import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import data from "../data.json";

function Home() {
  return (
    <>
      <Header />
      <div className='Banner'>
      <img className='bannerimg' src="/src/assets/banner1.png" alt="image de montagne avec un titre" />
      <h3 className='banner-text'>Chez vous, partout et ailleurs</h3>
      </div>
      <Card data={data} />
      <Footer />
    </>
  );
}

export default Home;