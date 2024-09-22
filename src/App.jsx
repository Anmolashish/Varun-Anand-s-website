import "./App.css";
import Homepage1 from "./components/Homepage1";
import Homepage2 from "./components/Homepage2";
import Homepage3 from "./components/Homepage3";
import Homepage4 from "./components/Homepage4";
import Homepage5 from "./components/Homepage5";
import Navbar from "./components/Navbar";
import Slideshow from "./components/slideshow";
import TextTape from "./components/TextTape";

function App() {
  return (
    <>
      <Navbar />
      <Homepage1 />
      <Homepage2 />
      <Homepage3 />
      <TextTape />
      <Slideshow />
      <Homepage4 />
      <Homepage5 />
    </>
  );
}

export default App;
