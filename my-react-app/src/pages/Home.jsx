import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';
import data from "../data.json";

// Composant Home qui représente la page d'accueil
function Home() {
  return (
    <>
      <Header />
      {/* Conteneur pour la bannière */}
      <div className='Banner'>
        {/* Image de bannière */}
        <img className='bannerimg' src="/src/assets/banner1.png" alt="image de montagne avec un titre" />
        {/* Texte de la bannière */}
        <h3 className='banner-text'>Chez vous, partout et ailleurs</h3>
      </div>
      {/* Affichage des cartes de logements */}
      <Card data={data} />
      <Footer />
    </>
  );
}
export default Home;