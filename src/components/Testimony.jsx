import React, { useEffect, useState } from 'react'
// import './Testymo.css'
export default function Testimony(){
  const [revs, setRevs] = useState([]);

  useEffect(() => {
    fetch('/Testimony.json')
      .then(response => response.json())
      .then(data => setRevs(data))
      .catch(error => console.error('Error while fetching review', error));
  }, []);
  
  return (
    <>
    
    {/* <div class="space space--small"></div> */}
    <div class="cards shine">
    {revs.map((rev, index) => (
          <div key={index} className="card" data-index={index}>
            <div className="card__inner">
              <div className="card__image-container">
                <img
                  className="card__image"
                  src={rev.img}
                  alt=""
                />
              </div>
              <div className="card__content">
                <h1 className="card__title">{rev.title}</h1>
                <p className="card__description">{rev.content}</p>
              </div>
            </div>
          </div>
        ))}


      <div class="card" data-index="0">
        <div class="card__inner">
          <div class="card__image-container">
            <img
              class="card__image"
              src="https://wallpaperaccess.com/full/767054.jpg"
              alt=""
            />
          </div>
          <div class="card__content">
            <h1 class="card__title">Card Title</h1>
            <p class="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
              error nam eaque. Eum fuga laborum quos expedita iste saepe
              similique, unde possimus quia at magnam sed cupiditate?
              Reprehenderit, harum!
            </p>
          </div>
        </div>
      </div>
      <div class="card" data-index="0">
        <div class="card__inner">
          <div class="card__image-container">
            <img
              class="card__image"
              src="https://www.mashed.com/img/gallery/30-best-ice-cream-flavors-ranked-from-worst-to-best/l-intro-1654092923.jpg"
              alt=""
            />
          </div>
          <div class="card__content">
            <h1 class="card__title">Card Title</h1>
            <p class="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
              error nam eaque. Eum fuga laborum quos expedita iste saepe
              similique, unde possimus quia at magnam sed cupiditate?
              Reprehenderit, harum!
            </p>
          </div>
        </div>
      </div>
      <div class="card" data-index="0">
        <div class="card__inner">
          <div class="card__image-container">
            <img
              class="card__image"
              src="https://tse4.mm.bing.net/th/id/OIP.VJWS7ye_1d6y2Wtx0jfqqQHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div class="card__content">
            <h1 class="card__title">Card Title</h1>
            <p class="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta
              error nam eaque. Eum fuga laborum quos expedita iste saepe
              similique, unde possimus quia at magnam sed cupiditate?
              Reprehenderit, harum!
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="space"></div> */}
    </>
  )
};



