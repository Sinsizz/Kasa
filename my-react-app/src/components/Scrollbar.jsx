/* eslint-disable react/prop-types */
import { useState } from 'react';

function Scrollbar({ content, title }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="scrollbar">
            <div className="scrollbar-header">
                <h3 className="scrollbar-title">{title}</h3>
                <img
                    onClick={toggleContent} 
                    src="/src/assets/Vector.png" 
                    alt="Toggle icon" 
                    className={isOpen ? 'rotate' : ''}
                />
            </div>
            <div className={`scrollbar-content ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </section>
    );
}

export default Scrollbar;