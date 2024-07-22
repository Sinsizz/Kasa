/* eslint-disable react/prop-types */
import { useState } from 'react';

// Composant Scrollbar qui affiche un contenu déroulant
function Scrollbar({ content, title }) {
    // État pour suivre si le contenu est ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état d'ouverture du contenu
    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="scrollbar">
            {/* En-tête du Scrollbar */}
            <div className="scrollbar-header">
                {/* Titre du Scrollbar */}
                <h3 className="scrollbar-title">{title}</h3>
                {/* Icône pour ouvrir/fermer le contenu */}
                <img
                    onClick={toggleContent} 
                    src="/src/assets/Vector.png" 
                    alt="Toggle icon" 
                    // Ajoute la classe 'rotate' à l'icône lorsque le contenu est ouvert
                    className={isOpen ? 'rotate' : ''}
                />
            </div>
            {/* Contenu du Scrollbar */}
            <div className={`scrollbar-content ${isOpen ? 'open' : ''}`}>
                {/* Affiche le contenu fourni */}
                {content}
            </div>
        </section>
    );
}

// Export du composant Scrollbar pour utilisation dans d'autres parties de l'application
export default Scrollbar;