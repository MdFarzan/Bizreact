import HeroSlider from "./components/HeroSlider";
import PrimaryNav from "./components/PrimaryNav";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <PrimaryNav />
      <HeroSlider />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
