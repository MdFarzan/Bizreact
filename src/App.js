import HeroSlider from "./components/HeroSlider";
import PrimaryNav from "./components/PrimaryNav";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Services from './components/Services';
import WhyUs from "./components/WhyUs";
import TestimonialSlider from "./components/TestimonialSlider";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <PrimaryNav />
      <HeroSlider />
      <AboutUs />
      <Services />
      <WhyUs />
      <TestimonialSlider />
      <CTA />
      <Footer />
      
    </div>
  );
}

export default App;
