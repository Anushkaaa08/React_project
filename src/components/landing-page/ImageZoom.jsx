import React, { useEffect } from "react";
import "../../assets/styles/image-zoom.css";
import gsap from "gsap";

const ImageZoom = () => {
  useEffect(() => {
    gsap.to(".el:nth-of-type(1)", {
      scrollTrigger: {
        trigger: ".image-zoom-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      scale: 4,
    });
    gsap.to(".el:nth-of-type(2)", {
      scrollTrigger: {
        trigger: ".image-zoom-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      scale: 8,
    });
    gsap.to(".el:nth-of-type(3)", {
      scrollTrigger: {
        trigger: ".image-zoom-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      scale: 6,
    });
    gsap.to(".el:nth-of-type(4)", {
      scrollTrigger: {
        trigger: ".image-zoom-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      scale: 9,
    });
    gsap.to(".el:nth-of-type(5)", {
      scrollTrigger: {
        trigger: ".image-zoom-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      scale: 8,
    });
    gsap.to(".el:nth-of-type(6)", {
      scrollTrigger: {
        trigger: ".image-zoom-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      scale: 5,
    });
    gsap.to(".el:nth-of-type(7)", {
      scrollTrigger: {
        trigger: ".image-zoom-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      scale: 7,
    });
  });
  return (
    <div className="image-zoom-wrapper bg-orange-100">
      <div className="image-zoom-sticky">
        <div className="el">
          <div className="img-container">
            <img src="./images/sticky1.jpg" alt="" className="img-item" />
          </div>
        </div>
        <div className="el">
          <div className="img-container">
            <img src="./images/sticky2.jpg" alt="" className="img-item" />
          </div>
        </div>
        <div className="el">
          <div className="img-container">
            <img src="./images/sticky3.jpg" alt="" className="img-item" />
          </div>
        </div>
        <div className="el">
          <div className="img-container">
            <img src="./images/sticky4.jpg" alt="" className="img-item" />
          </div>
        </div>
        <div className="el">
          <div className="img-container">
            <img src="./images/sticky5.jpg" alt="" className="img-item" />
          </div>
        </div>
        <div className="el">
          <div className="img-container">
            <img src="./images/sticky6.jpg" alt="" className="img-item" />
          </div>
        </div>
        <div className="el">
          <div className="img-container">
            <img src="./images/sticky7.jpg" alt="" className="img-item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageZoom;
