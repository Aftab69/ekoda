import useMediaQuery from "./useMediaQuery";
import Navbar from "./Navbar"
import Home from "./Home";
import Services from "./Services"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Projectsmobile from "./Projectsmobile";

function App() {
  const matches = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      {(matches)?
      <Projects /> :
      <Projectsmobile />
      }
      <About />
      <Contact />
    </>
  );
}

export default App;
