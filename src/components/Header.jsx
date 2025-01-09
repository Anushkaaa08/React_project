import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "../assets/styles/header.css";
import { useLocation, useNavigate } from "react-router";
import Logo from "./Logo";
const Header = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setState({ clicked: false, menuName: "Menu" });
    // console.log(location);
  }, [location]);
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // trial
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    // console.log(currentScroll);

    if (currentScroll <= 160) {
      body.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  });

  return (
    <header className="my-header">
      <nav className="px-12 py-4">
        <div className="inner-header text-xl font-semibold text-white">
          <div className="title">
            <Logo />
          </div>
          <div>
            <button
              disabled={disabled}
              onClick={handleMenu}
              className="w-8 flex flex-col gap-2"
            >
              {/* {state.menuName} */}
              <div
                className={` bg-white menu-btn-default ${
                  state.clicked === true ? "menu-btn-1" : ""
                }`}
                style={{
                  width: "50%",
                }}
              ></div>
              <div
                className={` bg-white menu-btn-default ${
                  state.clicked === true ? "menu-btn-2" : ""
                }`}
                style={{ width: "100%" }}
              ></div>
              <div
                className={` bg-white menu-btn-default ${
                  state.clicked === true ? "menu-btn-3" : ""
                }`}
                style={{ width: "75%" }}
              ></div>
            </button>
          </div>
        </div>
      </nav>

      <Menu state={state} />
    </header>
  );
};

export default Header;
