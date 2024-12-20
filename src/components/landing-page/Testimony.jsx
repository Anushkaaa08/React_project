import React, { useEffect, useState } from "react";
import "../../styles/Testymo.css";
export default function Testimony() {
  const [revs, setRevs] = useState([]);

  useEffect(() => {
    fetch("./Testimony.json")
      .then((response) => response.json())
      .then((data) => setRevs(data))
      .catch((error) => console.error("Error while fetching review", error));
  }, []);

  return (
    <>
      {/* <div class="space space--small"></div> */}
      <div className="cards">
        {revs.map((rev, index) => (
          <div key={index} className="card" data-index={index}>
            <div className="card__inner">
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
      {/* <div class="space"></div> */}
    </>
  );
}
