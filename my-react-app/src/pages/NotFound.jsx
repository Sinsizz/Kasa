/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Composant NotFound qui affiche la page d'erreur 404
function NotFound() {
  return (
    <>
      <Header/>
      {/* Conteneur pour l'erreur 404 */}
      <div className='Error'>
        {/* Code d'erreur 404 */}
        <h1>404</h1>
        {/* Message d'erreur */}
        <p>Oups! La page que vous demandez n'existe pas.</p>
        {/* Lien pour retourner à la page d'accueil */}
        <Link to="/" className='lien'>Retourner sur la page d'accueil</Link>
      </div>
      <Footer/>
    </>
  );
}

export default NotFound;