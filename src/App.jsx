import "./App.css";
import Loader from "./components/Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import About from "./components/About";
import Hero from "./components/Hero";
import { useEffect } from "react";
import Lenis from "lenis";

import PrdtDetails from "./components/PrdtDetails";

gsap.registerPlugin(useGSAP);
function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <div>
        <Header />
        
      </div>
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/prdDetails" element={<PrdtDetails />} />
      </Routes>

      
      
      
    </>
  );
}

export default App;
