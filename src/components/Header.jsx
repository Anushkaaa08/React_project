import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "../assets/styles/header.css";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "./Logo";
import { IoPersonCircleOutline } from "react-icons/io5";
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
const navigate = useNavigate();
  const handleCategoryClick = (e) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        e.preventDefault();
        navigate('/login');
    }
};

  return (
    <header className="my-header">
      <nav className="px-12 py-4">
        <div className="inner-header text-xl font-semibold text-white">
          <div className="title">
            <Logo />
          </div>
          <div className="hidden items-center gap-5 text-lg md:flex font-sans">
            <div className=" transition-all border border-[#e37383] rounded-2xl px-2 py-1 hover:border-white ease-in-out">
              <Link to="/" className="font-sans">Home</Link>
            </div>
            <div className=" transition-all border border-[#e37383] rounded-2xl px-2 py-1 hover:border-white  ease-in-out">
              <Link to="/category" className="font-sans" onClick={handleCategoryClick}>Category</Link>
            </div>
            <div className=" transition-all border border-[#e37383] rounded-2xl px-2 py-1 hover:border-white  ease-in-out">
              <Link to="/contact" className="font-sans">Contact</Link>
            </div>
            <div className=" transition-all border border-[#e37383] rounded-2xl px-2 py-1 hover:border-white  ease-in-out">
              <Link to="/about" className="font-sans">About</Link>
            </div>
 
            
          </div>
          <div className=" transition-all  rounded-2xl px-2 py-1 ease-in-out hidden md:block">
              <Link to="/login" onClick={handleCategoryClick}>
                <IoPersonCircleOutline size={32} color="white" />
              </Link>
            </div>
          <div className="block md:hidden">
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
