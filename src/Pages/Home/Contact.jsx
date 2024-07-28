import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-72 flex justify-center items-center py-16 flex-col"
      id="contact"
    >
      <div className="head flex flex-col justify-center items-center">
        <h1 className="title text-3xl sm:text-4xl font-bold mb-4">Contact</h1>
        <span className="title-span w-24 h-1 bg-green mt-2"></span>
      </div>

      <div className="text text-center w-full sm:w-[80%] md:w-[60%] lg:w-[45%] mt-8 sm:mt-16">
        <p className="text-white/80 text-base sm:text-lg md:text-xl">
          I am currently seeking employment, so if you have a job or project
          offer, or if you need more information, please do not hesitate to
          contact me.
        </p>
      </div>

      <Link to="mailto:ahmd675asd@gmail.com">
        <button className="bg-green px-4 py-2 rounded-md hover:bg-green/50 transition-all duration-500 mt-8 sm:mt-16">
          Email Me
        </button>
      </Link>

      <div className="links flex text-2xl gap-6 sm:gap-8 mt-8 sm:mt-16">
        <Link
          to="https://github.com/ahmedkamal14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="hover:text-green hover:scale-125 transition-all duration-500" />
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=100037596547448&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="hover:text-green hover:scale-125 transition-all duration-500" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/ahmed-kamal-a2a6281a8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="hover:text-green hover:scale-125 transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
