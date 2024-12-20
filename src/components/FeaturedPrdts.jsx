import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import '../assets/styles/FeaturedPrdts.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Autoplay } from 'swiper/modules';

import { FaStar, FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function FeaturedPrdts() {
  const [revs, setRevs] = useState([]);

  useEffect(() => {
    fetch('/featuredPrdtsDb.json')
      .then(response => response.json())
      .then(data => setRevs(data))
      .catch(error => console.log("error while fetching", error));
  }, []);

  return (
    <div className="container min-h-screen">
      <h1  className="heading">Featured Products</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {revs.map( (rev, index) => (
          <SwiperSlide key={index}>
            <div data-index={index} className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={rev.img} alt="Tranding"></img>
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price"><div className='ml-2 mr-2'>{rev.price}</div></h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">
                    <div className='ml-5 mr-5 py-3'>{rev.title}</div>
                  </h2>
                  <h3 className="food-rating">
                    <span className='rating-num ml-5 mt-2'>{rev.rating}</span>
                    <FaStar color='orange' />
                    <div className="rating"></div>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <br /><br /><br />
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaAngleLeft color='gray' />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaAngleRight color='gray' />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
