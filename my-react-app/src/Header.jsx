
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="./src/assets/kasa-header.png" alt="image kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;