import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router';
import styles from '../assets/styles/Category.module.css';

export default function Category() {
    const [categories, setCategories] = useState([]);
    const [hoverIndex, setHoveredIndex] = useState(null);
    const [expandedCard, setExpandedCard] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching the categories:', error));
    }, []);

    const handleCardClick = (categoryName) => {
        setExpandedCard(categoryName);
        setTimeout(() => {
            navigate(`/products/${categoryName}`);
        }, 1000); // Adjust the timeout to match the duration of the animation
    };

    return (
        <div className={styles.App}>
            <main className={styles.mainContent}>
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <div
                            className={`${styles.cardContainer} ${expandedCard === category.name ? styles.centered : ''}`}
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleCardClick(category.name)}
                        >
                            <div className={`${styles.card} ${expandedCard === category.name ? styles.expanded : ''}`}>
                                <img src={category.image} alt={category.name} />
                            </div>
                            <svg viewBox="0 0 360 360" className={`${styles.svgText} ${expandedCard === category.name ? styles.hidden : ''}`}>
                                <defs>
                                    <path id={`circlePath${index}`} d="M 180, 180 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0" />
                                </defs>
                                <text>
                                    <textPath href={`#circlePath${index}`} startOffset="18%">
                                        {hoverIndex === index && (
                                            <animate attributeName='startOffset' from="18%" to="118%" dur="5s" repeatCount="indefinite" />
                                        )}
                                        {category.name}
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
            </main>
        </div>
    );
}