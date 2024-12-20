import React, { useEffect } from "react";
import "./hero.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedPrdts from "./FeaturedPrdts"

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

  // useEffect(() => {
  //   gsap.to(maskContainerRef.current, {
  //     scrollTrigger: {
  //       trigger: maskContainerRef.current,
  //       start: "center 200px",
  //       end: "+=150px",
  //       scrub: 1,
  //       // markers: true,
  //     },
  //     maskImage: `linear-gradient(
  //    to bottom,
  //   black 0%,
  //   black 100%,
  //   transparent 0%,
  //   transparent 0%
  //    )`,
  //   });
  // }, []);

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
        {/* <div
          ref={maskContainerRef}
          className="absolute mask-container h-full w-full  "
        ></div> */}
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
      {/* <section className="min-h-screen">second section</section> */}
      <FeaturedPrdts />
    </>
  );
};

export default Hero;
