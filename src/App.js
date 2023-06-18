import HeroSlider from "./components/HeroSlider";
import PrimaryNav from "./components/PrimaryNav";
import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <PrimaryNav />
      <HeroSlider />
      <AboutUs />
    </div>
  );
}

export default App;
