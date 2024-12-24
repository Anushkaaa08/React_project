import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import style from '../assets/styles/Products.module.css';

export default function Products() {
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);
    const { categoryId } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched categories:', data);
                setCategories(data);

               
                fetch(`http://localhost:3000/products?categoryId=${categoryId}`)
                    .then(response => response.json())
                    .then(products => {
                        console.log('Fetched products:', products);
                        setCards(products);
                    })
                    .catch(error => console.error('Error fetching products:', error));
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, [categoryId]);

    const handleCardClick = (categoryId) => {
        setExpandedCard(categoryId);
        setTimeout(() => {
            navigate(`/category/${categoryId}`);
        }, 1000); 
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <div className={style.sidebar}>
                <div style={{ marginTop: "23px" }}>
                    <h1>Categories</h1>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <img src={category.image} alt={category.name} />
                                <button onClick={() => handleCardClick(category.id)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={style['main-content']}>
                <h3 style={{ marginBottom: '5%' }}>{categories.find(cat => cat.id === parseInt(categoryId))?.name}</h3>
                <div className={style['cards-container']}>
                    {cards.map((card, index) => (
                        <div key={index} className={style.card}>
                            <div>
                                <h2 style={{ fontSize: '1.2rem', fontWeight: 'semibold', marginBottom: '8px', float: "left", textAlign: "left" }}>
                                    {card.title}
                                </h2><br></br>
                                <p style={{ color: 'gray', marginBottom: '8px', float: "left", textAlign: "left" }}>{card.description}</p><br></br>
                                <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '12px', float: "left" }}>
                                    {card.price}
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img
                                    src={card.imgSrc}
                                    alt={card.title}
                                    className={style.cardImg}
                                />
                                <Link to={`/products/${categoryId}/${card.title}`}>
                                    <button className={style.addbutton}>
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
