import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from '../../assets/styles/Products.module.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Products() {
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);
    const [showCartButton, setShowCartButton] = useState(false);
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

    const handleButtonClick = (product) => {
        navigate(`/category/${categoryId}/${product.title}`, { state: { product } });
    };

    const handleAddToCart = async (product) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/login');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3000/carts?userId=${user.id}`);
            let cart = response.data[0];

            if (cart) {
                // Cart exists, update it
                const updatedProducts = [...cart.products, product];
                await axios.patch(`http://localhost:3000/carts/${cart.id}`, { products: updatedProducts });
            } else {
                // Cart does not exist, create a new one
                const newCart = {
                    userId: user.id,
                    products: [product]
                };
                await axios.post('http://localhost:3000/carts', newCart);
            }

            console.log('Product added to cart');
            setShowCartButton(true); // Show the "Go to Cart" button
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    const handleGoToCart = () => {
        navigate('/cart');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1 }}>
                <div className={style.sidebar}>
                    <div style={{ marginTop: "30px" }}>
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
                                    <div className='flex gap-3'>
                                        <button className={style.addbutton} onClick={() => handleButtonClick(card)}>
                                            Details
                                        </button>
                                        <button className={style.addbutton} onClick={() => handleAddToCart(card)}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showCartButton && (
                <div style={{ textAlign: 'center', marginTop: '20px',backgroundColor:'green', }}>
                <button className={style.goToCartButton} onClick={handleGoToCart}>
                <FaShoppingCart color='white'/>
                
                </button>
                </div>
            )}
        </div>
    );
}
