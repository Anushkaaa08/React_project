import React from "react";
import { useLocation } from "react-router-dom";
import style from "../../assets/styles/PrdtDetails.module.css";
import { BiSolidOffer } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function PrdtDetails() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className={`${style["main-container"]} min-h-screen`}>
      <div className={`${style["img-container"]} ${style["hover14"]} ${style["column"]}`}>
        <figure>
          <img src={product.imgSrc} alt={product.title} />
        </figure>
      </div>
      <div className={`${style["prdt-details-main"]} w-4/6`}>
        <div className={style["prdt-details"]}>
          <div className={style["prdt-title"]}>
            <label>{product.title}</label>
          </div>
          <p className={style["prdt-desp"]}>
            {product.description}
          </p>
          <div className={style["prd-price"]}>
            <span>{product.price}</span>
          </div>
          
        </div>
        <div className={style["offer-container"]}>
          <div className={style["offer-title"]}>
            <p>(2 Offers) Available</p>
          </div>
          <div className={style["offers"]}>
            <div className={style["offers-main-div"]}>
              <BiSolidOffer color="#b0dcd1" className="text-6xl" />
              <div className={style["offer-details"]}>
                <div className={style["offer-info"]}>
                  <label>15% off on first purchase</label><br />
                  <label>use code SIGNUP15</label>
                </div>
                <MdKeyboardArrowRight color="gray" className="text-6xl" />
              </div>
            </div>
            <div className={style["offers-main-div"]}>
              <BiSolidOffer color="#b0dcd1" className="text-6xl" />
              <div className={style["offer-details"]}>
                <div className={style["offer-info"]}>
                  <label>15% off on first purchase</label><br />
                  <label>use code SIGNUP15</label>
                </div>
                <MdKeyboardArrowRight color="gray" className="text-6xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
