import React, { useEffect, useState, useRef } from "react";
import TestimonyModal from "./TestimonyModal";
import "../../assets/styles/Testymo.css";
const def_img="https://thumbs.dreamstime.com/b/feedback-concept-image-arrows-blue-chalkboard-background-40378284.jpg";
export default function Testimony() {
  const [revs, setRevs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    fetch("http://localhost:3000/testimonies")
      .then((response) => response.json())
      .then((data) => setRevs(data))
      .catch((error) => console.error("Error while fetching review", error));
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.9, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("blur");
        } else {
          entry.target.classList.add("blur");
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

  const handleAddTestimony = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitTestimony = (newTestimony) => {
    fetch("http://localhost:3000/testimonies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTestimony),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Received your experience");
        setIsModalOpen(false);
        // Optionally, you can update the state to include the new testimony
        setRevs((prevRevs) => [...prevRevs, data]);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="cards">
        <button className="sticky-button" onClick={handleAddTestimony}>
          Add Testimony
        </button>
        {revs.map((rev, index) => (
          <div key={index} className="card"  data-index={index}>
            <div className="card__inner" ref={(el) => (cardRefs.current[index] = el)} >
              <div className="card__image-container">
                <img className="card__image" src={rev.img || def_img} alt="" />
              </div>
              <div className="card__content">
                <h1 className="card__title">{rev.title}</h1>
                <p className="card__description">{rev.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TestimonyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitTestimony}
      />
    </>
  );
}
