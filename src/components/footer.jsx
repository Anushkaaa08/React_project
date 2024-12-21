import React from "react";
import style from '../assets/styles/footer.module.css';
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaYoutube, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
// import magnoliaLogo from "./images/magnolia_logo.png";

export default function Footer() {
  return (
    <div className={style.box}>
      <img
        className={style.image}
        src="./images/magnolia_logo.png"
        alt="Magnolia logo"
      />
      <div className={style.foot_container}>
        <div className={style.row}>
          <div className={style.column}>
            <a className={style.footer_link} href="#">OUR STORY</a>
            <a className={style.footer_link} href="#">OUR PRODUCTS</a>
            <a className={style.footer_link} href="#">SPECIALTY CAKES</a>
            <a className={style.footer_link} href="#">BLOGS</a>
            <a className={style.footer_link} href="#">CSR</a>
            <a className={style.footer_link} href="#">HTML SITEMAP</a>
          </div>
          <div className={style.column}>
            <a className={style.footer_link} href="#">PRIVACY POLICY</a>
            <a className={style.footer_link} href="#">COOKIE POLICY</a>
            <a className={style.footer_link} href="#">REFUND POLICY</a>
            <a className={style.footer_link} href="#">FAQs</a>
            <a className={style.footer_link} href="#">NUTRITIONAL INFORMATION</a>
          </div>
          <div className={style.column}>
            <div className={style.footer_contact}>
              <MdLocalPhone /> +91 8182-881881
            </div>
            <div className={style.footer_contact}>
              <IoIosMail /> contact@theobroma.in
            </div>
            <div className={style.footer_logos}>
              <a className={style.footer_logo} href="#"><FaYoutube /></a> 
              <a className={style.footer_logo} href="#"><FaSquareFacebook /></a>  
              <a className={style.footer_logo} href="#"><FaSquareInstagram /></a> 
            </div>
          </div>
          <div className={style.column}>
            <div className={style.footer_text}>
              Sign up for details
              <input className={style.footer_input} type="email" placeholder="Enter your email"/>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
