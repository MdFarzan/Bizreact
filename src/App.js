import HeroSlider from "./components/HeroSlider";
import PrimaryNav from "./components/PrimaryNav";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import TestimonialSlider from "./components/TestimonialSlider";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div className="App">
      <Router>
        <PrimaryNav />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/service/:name" element={<ComingSoon />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
