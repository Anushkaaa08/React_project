import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router";

const Menu = ({ state }) => {
  
  let menu = useRef(null);
  let revealMenuBackground = useRef(null);
  let revealMenu = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close our menu

      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open our menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([ revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal( revealMenu);
      imgFadeDown(".menu-img");
      staggerText(line1, line2, line3, line4);
      // fadeInUp(info);
    }
  }, [state]);

  const staggerReveal = (node1) => {
    gsap.from([node1], {
      duration: 0.8,
      height: 0,
      top:'100%',
      tranformOrigin: "right top",
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };
  const imgFadeDown = (node) => {
    gsap.from(node, {
      //   height: 0,
      yPercent: 100,
      duration: 0.8,
      y: 100,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      {/* <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div> */}

      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="menu-container ">
          <div className="menu-wrapper">
            <div className="menu-inner-container text-white ">
              {/* <div>
                <img
                  src="https://images.unsplash.com/photo-1503652785-12bcf738d477?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="menu-img"
                />
              </div> */}
              <nav className="">
                <ul className="text-3xl flex flex-col gap-10">
                  <li ref={(el) => (line1 = el)}>
                    <Link to="/">Home</Link>
                  </li>
                  <li ref={(el) => (line2 = el)}>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li ref={(el) => (line3 = el)}>
                    <Link to="/about">About</Link>
                  </li>
                  <li ref={(el) => (line4 = el)}>
                    <Link to="/category">Category</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
