import HeroSlider from "./components/HeroSlider";
import PrimaryNav from "./components/PrimaryNav";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Services from './components/Services';
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <PrimaryNav />
      <HeroSlider />
      <AboutUs />
      <Services />
      <WhyUs />
    </div>
  );
}

export default App;
