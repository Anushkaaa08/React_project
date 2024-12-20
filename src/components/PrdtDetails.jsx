import React from "react";
import style from "../assets/styles/PrdtDetails.module.css";
import { BiSolidOffer } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function PrdtDetails() {
  return (
    <div className={`${style["main-container"]} min-h-screen`}>
      <div className={`${style["img-container"]} ${style["hover14"]} ${style["column"]}`}>
        <figure>
          <img src="https://cdn.uengage.io/uploads/7175/image-VSF1Q8-1687877411.jpg" alt="" />
        </figure>
      </div>
      <div className={`${style["prdt-details-main"]} w-4/6`}>
        <div className={style["prdt-details"]}>
          <div className={style["prdt-title"]}>
            <label htmlFor="">Christmas Cake (350gm)</label>
          </div>
          <p className={style["prdt-desp"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit? Repellendus ut perferendis tenetur sit dignissimos ipsam velit voluptatem nemo sapiente! Enim aliquid natus ex voluptate beatae.
          </p>
          <div className={style["prd-price"]}>
            <span>$ 950</span>
          </div>
          <button>Add</button>
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
                  <label htmlFor="">15% off on first purchase</label><br />
                  <label htmlFor="">use code SIGNUP15</label>
                </div>
                <MdKeyboardArrowRight color="gray" className="text-6xl" />
              </div>
            </div>
            <div className={style["offers-main-div"]}>
              <BiSolidOffer color="#b0dcd1" className="text-6xl" />
              <div className={style["offer-details"]}>
                <div className={style["offer-info"]}>
                  <label htmlFor="">15% off on first purchase</label><br />
                  <label htmlFor="">use code SIGNUP15</label>
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
