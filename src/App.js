import HeroSlider from "./components/HeroSlider";
import PrimaryNav from "./components/PrimaryNav";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <PrimaryNav />
      <HeroSlider />
    </div>
  );
}

export default App;
