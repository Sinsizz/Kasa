/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function NotFound() {
  return (
    <>
    <Header/>
    <div className='Error'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='lien'>Retourner sur la page d’accueil</Link>
    </div>
    <Footer/>
    </>
    
  );
}

export default NotFound;