import Hero from "./Hero";
import About from "./About";
import Exp from "./Exp";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="bg-black88 text-white">
        <Hero />
      </div>
      <div className="bg-black80 text-white">
        <About />
      </div>
      <div className="bg-black80 text-white hidden">
        <Exp />
      </div>
      <div className="bg-black80 text-white">
        <Skills />
      </div>
      <div className="bg-black80 text-white">
        <Portfolio />
      </div>
      <div className="bg-black80 text-white">
        <Contact />
      </div>
    </>
  );
};

export default Home;
