import { Helmet } from "react-helmet";
import useMediaQuery from "./useMediaQuery";
import Navbar from "./Navbar"
import Home from "./Home";
import Services from "./Services"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Projectsmobile from "./Projectsmobile";
import About2 from "./About2";

function App() {
  const matches = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <Helmet>
        <title>Ekoda Productions</title>
        <meta name="description" content="EKODA is a Guwahati-Based Production House. We are the creators who love to tell stories through visual medium. Our services include video production like music videos, short films, documentaries, event videos, TV commercials, wedding films, photoshoots, logo designs, poster designs and artworks." />
        <meta name="keywords" content="ekoda, ekoda productions, production house, film making, documentaries, music video shoots, ad shoots, cinematography, script writing" />
      </Helmet>
      <Navbar />
      <Home />
      <Services />
      {(matches)?
      <Projects/> :
      <Projectsmobile />
      }
      <About />
      <About2 />
      <Contact />
    </>
  );
}

export default App;
