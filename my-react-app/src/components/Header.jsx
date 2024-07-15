
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="/src/assets/kasa-header.png" alt="image kasa" />
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active' : ''}
          end
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;