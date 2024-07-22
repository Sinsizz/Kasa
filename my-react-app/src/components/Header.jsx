import { NavLink } from 'react-router-dom';

// Composant Header qui affiche le logo et la navigation
function Header() {
  return (
    <header>
      {/* Logo de l'application */}
      <img src="/src/assets/kasa-header.png" alt="image kasa" />
      {/* Navigation avec les liens vers les pages principales */}
      <nav>
        {/* Lien vers la page d'accueil */}
        <NavLink 
          to="/" 
          // Ajoute la classe 'active' au lien si nous sommes sur la page d'accueil
          className={({ isActive }) => isActive ? 'active' : ''}
          // Correspond exactement au chemin '/'
          end
        >
          Accueil
        </NavLink>
        {/* Lien vers la page 'A Propos' */}
        <NavLink 
          to="/about" 
          // Ajoute la classe 'active' au lien si nous sommes sur la page 'A Propos'
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

// Export du composant Header pour utilisation dans d'autres parties de l'application
export default Header;