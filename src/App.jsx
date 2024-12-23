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
import Products from "./components/products";
import PrdtDetails from "./components/PrdtDetails";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/footer";
import Cartpage from "./components/cart/cart";
import Category from "./components/category";
import { AuthForm } from "./components/Login";
import AboutUs from "./components/aboutus";

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
      <Loader />
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/prdDetails" element={<PrdtDetails />} />
        <Route path="/category" element={<Category />}/>
        <Route path="/products/:categoryName" element={<Products />} />
        <Route path="/products/:categoryName/:productName" element={<PrdtDetails />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/login" element={<AuthForm/>}/>
        
      </Routes>
      {/* <Cartpage/> */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
