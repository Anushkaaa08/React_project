import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import style from '../assets/styles/Products.module.css';

export default function Products() {
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);
    const { categoryName } = useParams();
    const [isItemAdded, setIsItemAdded] = useState(false);
    const [addedToCart, setAddedToCart] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the products JSON file based on the selected category name
        fetch(`/${categoryName}.json`)
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error(`Error fetching the products for ${categoryName}:`, error));

        fetch('/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching the categories:', error));
    }, [categoryName]);

    const handleAddToCart = (card) => {
        // Get the existing cart items from local storage
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new card to the cart
        const updatedCart = [...existingCart, { title: card.title, price: card.price }];

        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Temporarily set the added card to show "Added" text
        setAddedToCart(card.title);

        // Set the flag to show the "Go to Cart" button
        setIsItemAdded(true);

        // Reset the added card text back to "Add" after 1 second
        setTimeout(() => {
            setAddedToCart(null);
        }, 1000);
    };

    const handleGoToCart = () => {
        navigate('/cart');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <div className={style.sidebar}>
                <div style={{ marginTop: "23px" }}>
                    <div style={{position:'relative', top:"20px"}}>
                    <h1>Categories</h1>
                    </div>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <img src={category.image} alt={category.name} />
                                <Link to={`/category/${category.name}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={style['main-content']}>
                <h3 style={{ marginBottom: '5%' }}>{categoryName}</h3>
                <div className={style['cards-container']}>
                    {cards.map((card, index) => (
                        <div key={index} className={style.card}>
                            <div>
                                <h2 style={{ fontSize: '1.2rem', fontWeight: 'semibold', marginBottom: '8px', float: "left", textAlign: "left" }}>
                                    {card.title}
                                </h2><br></br>
                                <p style={{ color: 'gray', marginBottom: '8px', float: "left", textAlign: "left" }}>{card.description}</p><br></br>
                                <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '12px', float: "left" }}>
                                ₹ {card.price}
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img
                                    src={card.imgSrc}
                                    alt={card.title}
                                    className={style.cardImg}
                                />
                                <Link to={`/products/${categoryName}/${card.title}`}>
                                    <button className={style.addbutton}>
                                        Details
                                    </button>
                                </Link>
                                <button
                                    className={style.addbutton}
                                    onClick={() => handleAddToCart(card)}
                                >
                                    {addedToCart === card.title ? 'Added' : 'Add'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {isItemAdded && (
                    <button
                        className={style.goToCartButton}
                        onClick={handleGoToCart}
                    >
                        Go to Cart
                    </button>
                )}
            </div>
        </div>
    );
}
