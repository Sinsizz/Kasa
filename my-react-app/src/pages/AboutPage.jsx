import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Scrollbar from '../components/Scrollbar.jsx';

// Composant AboutPage qui affiche la page "À propos"
function AboutPage() {
  return (
    <>
      {/* Importation du composant Header */}
      <Header />
      {/* Conteneur pour la bannière */}
      <div className='Banner'>
        {/* Image de bannière */}
        <img className='bannerimg2' src="/src/assets/banner2.png" alt="image de montagne" />
      </div>
      {/* Conteneur pour les Scrollbars */}
      <div>
        <Scrollbar 
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Scrollbar 
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme."
        />
        <Scrollbar 
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme."
        />
        <Scrollbar 
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "
        />
      </div>
      <Footer />
    </>  
  );
}

export default AboutPage;