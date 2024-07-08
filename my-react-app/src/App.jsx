import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import data from "./data.json";

function App() {
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

export default App;
