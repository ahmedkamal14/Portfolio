import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-8 flex justify-center items-center py-16 sm:py-32 flex-col">
      <div className="content flex flex-col sm:flex-row items-center gap-6 sm:gap-10 p-6 sm:p-12 my-12 sm:my-36">
        <div className="img">
          <img
            src="./me.png"
            alt="hero"
            className="rounded-full w-32 sm:w-44"
          />
        </div>
        <div className="text text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-3 sm:mb-5">
            Ahmed <span className="text-green">Kamal</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl">
            I design and build things on the internet.
          </p>
        </div>
      </div>
      <FaAngleDoubleDown className="text-3xl sm:text-5xl animate-bounce-fast mt-3" />
    </div>
  );
};

export default Hero;
