import React, { useEffect, useState, useRef } from "react";
import "../../styles/Testymo.css";

export default function Testimony() {
  const [revs, setRevs] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    fetch("./Testimony.json")
      .then((response) => response.json())
      .then((data) => setRevs(data))
      .catch((error) => console.error("Error while fetching review", error));
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.5 // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('blur');
        } else {
          entry.target.classList.add('blur');
        }
      });
    }, options);

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [revs]);

  return (
    <>
      <div className="cards">
        {revs.map((rev, index) => (
          <div key={index} className="card" data-index={index}>
            <div className="card__inner" ref={(el) => (cardRefs.current[index] = el)}>
              <div className="card__image-container">
                <img className="card__image" src={rev.img} alt="" />
              </div>
              <div className="card__content">
                <h1 className="card__title">{rev.title}</h1>
                <p className="card__description">{rev.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
