import React, { useEffect, useRef, useState } from "react";
import "../../assets/styles/image-hover.css";
import gsap from "gsap";

const ImageHover = () => {
  const [zIndex, setZIndex] = useState(1);

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  let highestRef = useRef(null);

  const handleMouseEnter = (imgNumber) => {
    switch (imgNumber) {
      case "first":
        if (highestRef.current == firstRef.current) break;
        firstRef.current.style.zIndex = zIndex;
        setZIndex((prev) => prev + 1);
        revealEffect(firstRef.current);
        highestRef.current = firstRef.current;
        break;
      case "second":
        if (highestRef.current == secondRef.current) break;
        secondRef.current.style.zIndex = zIndex;
        setZIndex((prev) => prev + 1);
        revealEffect(secondRef.current);
        highestRef.current = secondRef.current;
        break;
      case "third":
        if (highestRef.current == thirdRef.current) break;
        thirdRef.current.style.zIndex = zIndex;
        setZIndex((prev) => prev + 1);
        revealEffect(thirdRef.current);
        highestRef.current = thirdRef.current;
        break;
      case "fourth":
        if (highestRef.current == fourthRef.current) break;
        fourthRef.current.style.zIndex = zIndex;
        setZIndex((prev) => prev + 1);
        revealEffect(fourthRef.current);
        highestRef.current = fourthRef.current;
        break;

      default:
        break;
    }
  };

  const revealEffect = (node1) => {
    gsap.from(node1, {
      ease: "sine.inOut",
      clipPath: "polygon(0 94%, 100% 94%, 100% 100%, 0 100%)",
    });
    const img = node1.children[0];
    if (img) {
      gsap.from(img, {
        transform: "scale(1.2)",
        duration: 1,
      });
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-orange-100 flex justify-between relative">
        <div className="images">
          <div className="image" ref={firstRef}>
            <img src="./images/1.jpg" alt="" />
          </div>
          <div className="image" ref={secondRef}>
            <img src="./images/2.jpg" alt="" />
          </div>
          <div className="image" ref={thirdRef}>
            <img src="./images/3.jpg" alt="" />
          </div>
          <div className="image" ref={fourthRef}>
            <img src="./images/4.jpg" alt="" />
          </div>
        </div>
        <div className="content flex-1 flex justify-center items-center text-lg uppercase">
          {/* Paste */}
          <div class="address-container w-1/2 flex flex-col">
            <div
              class="office hover:bg-orange-400"
              onMouseEnter={() => handleMouseEnter("first")}
            >
              <div class="office-name">Office 1</div>
              <div class="office-address">123 Main St, City, Country</div>
            </div>
            <div class="office" onMouseEnter={() => handleMouseEnter("second")}>
              <div class="office-name">Office 2</div>
              <div class="office-address">456 Elm St, City, Country</div>
            </div>
            <div class="office" onMouseEnter={() => handleMouseEnter("third")}>
              <div class="office-name">Office 3</div>
              <div class="office-address">789 Oak St, City, Country</div>
            </div>
            <div class="office" onMouseEnter={() => handleMouseEnter("fourth")}>
              <div class="office-name">Office 4</div>
              <div class="office-address">101 Pine St, City, Country</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageHover;

{
  /* <ul>
<li onMouseEnter={() => handleMouseEnter("first")}>
  <a href="/">First Image</a>
</li>
<li onMouseEnter={() => handleMouseEnter("second")}>
  <a href="/">Second Image</a>
</li>
<li onMouseEnter={() => handleMouseEnter("third")}>
  <a href="/">Third Image</a>
</li>
<li onMouseEnter={() => handleMouseEnter("fourth")}>
  <a href="/">Fourth Image</a>
</li>
</ul> */
}
