import React, { useEffect, useState } from 'react';
import styles from "../assets/styles/FeaturedProducts.module.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";

// Import images
import img1 from '../assets/FeaturedPrdtsImgs/img1.jpg';
import img2 from '../assets/FeaturedPrdtsImgs/img2.jpg';
import img3 from '../assets/FeaturedPrdtsImgs/img3.jpg';
import img4 from '../assets/FeaturedPrdtsImgs/img4.jpg';
import img5 from '../assets/FeaturedPrdtsImgs/img5.jpg';

export default function FeaturedProducts() {
    const [images, setImages] = useState([
        {
            url: img1,
            name: "Pineapple Cake",
            rating: "4.5",
        },
        {
            url: img2,
            name: "Stawberry Cake",
            rating: "4.8",
        },
        {
            url: img3,
            name: "Pastry",
            rating: "4.2",
        },
        {
            url: img4,
            name: "Red Velvet Cake",
            rating: "5",
        },
        {
            url: img5,
            name: "Chocolate Cake",
            rating: "4.9",
        },
    ]);

    useEffect(() => {

        const next = document.querySelector('.next');
 
        const prev = document.querySelector('.prev');
 
        const handleNextClick = () => {
 
            const items = document.querySelectorAll('.item');
 
            document.querySelector('.slide').appendChild(items[0]);
 
        };
 
        const handlePrevClick = () => {
 
            const items = document.querySelectorAll('.item');
 
            document.querySelector('.slide').prepend(items[items.length - 1]);
 
        };
 
        next.addEventListener('click', handleNextClick);
 
        prev.addEventListener('click', handlePrevClick);
 
        // Cleanup event listeners on component unmount
 
        return () => {
 
            next.removeEventListener('click', handleNextClick);
 
            prev.removeEventListener('click', handlePrevClick);
 
        };
 
    }, []);

    return (
        <div className={styles.containerr}>
            <div className={`${styles.slide} slide`}>
                <h3 className={`${styles.prdtsTitle} absolute z-50 text-white text-5xl bold top-8 left-10`}>Featured Products</h3>
                {images.map((image, index) => (
                    <div key={index} className={`${styles.item} item`} style={{ backgroundImage: `url(${image.url})` }}>
                        <div className={styles.content}>
                            <div className={`${styles.name} text-2xl md:text-5xl relative -left-12`}>{image.name}</div>
                            <div className={`${styles.description} relative -left-12`}>{image.rating}<FaStar color='orange' className='ml-2 mt-1 text-3xl' /></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`${styles.button} button`}>
                <button className={`${styles.prev} prev`}><MdKeyboardArrowLeft color='white' className='text-4xl' /></button>
                <button className={`${styles.next} next`}><MdKeyboardArrowRight color='white' className='text-4xl' /></button>
            </div>
        </div>
    );
}
