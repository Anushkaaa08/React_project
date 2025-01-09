import React, { useEffect } from "react";
import "../../assets/styles/hero.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Testimony from "./Testimony";
import FeaturedProducts from "./FeaturedProducts";
import ImageHover from "./ImageHover";
import ImageZoom from "./ImageZoom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);

  const maskContainerRef = useRef(null);

  let xPercent = 0;

  function animate() {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent -= 0.1;
  }

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <main className="overflow-hidden relative min-h-screen">
        <video
          src="./bg-video-hd .mp4"
          className="object-cover h-full w-full absolute top-0 -z-10 video-tag"
          autoPlay
          muted
          loop
        ></video>

        <div className="slider-container absolute">
          <div className="slider relative whitespace-nowrap text-9xl">
            <p ref={firstText}>We Bake Happiness &#9672;</p>
            <p ref={secondText}>We Bake Happiness &#9672;</p>
          </div>
          <div className="mt-5 w-full">
            <hr className="w-4/5 mx-auto" />
          </div>
        </div>
      </main>
      {/* <FeaturedPrdts /> */}
      <div className="h-screen relative">
        <FeaturedProducts />
      </div>
      <Testimony />
      <ImageHover />
      <ImageZoom />
    </>
  );
};

export default Hero;
