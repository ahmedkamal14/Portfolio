import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";

const Skills = () => {
  return (
    <div
      className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-72 flex justify-center items-center py-16 flex-col"
      id="skills"
    >
      <div className="head flex flex-col justify-center items-center">
        <h1 className="title text-3xl sm:text-4xl font-bold mb-4">Skills</h1>
        <span className="title-span w-24 h-1 bg-green mt-2"></span>
      </div>

      <div className="content grid grid-cols-1 xl:grid-cols-2 mt-12 sm:mt-28 gap-8 sm:gap-12 pb-12">
        <div className="skill bg-black88 p-6 sm:p-8 rounded-md">
          <div className="skill-img text-4xl sm:text-5xl mb-3 flex gap-8 items-center">
            <ImHtmlFive2 />
          </div>
          <h1 className="text-green text-2xl sm:text-3xl mb-2">HTML & CSS</h1>

          <p className="mt-5 text-white/80 text-sm sm:text-base">
            I learned HTML and CSS from{" "}
            <a
              className="text-green/40 hover:text-green cursor-pointer"
              href="https://elzero.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elzero Web School
            </a>{" "}
            and have applied these skills to create numerous projects.
            Proficient in crafting responsive and visually appealing web pages,
            I have developed various websites, including the Bondi template. My
            expertise ensures well-structured, clean code and effective design,
            showcasing my ability to build user-friendly, engaging web
            interfaces.
          </p>
        </div>
        <div className="skill bg-black88 p-6 sm:p-8 rounded-md">
          <div className="skill-img text-4xl sm:text-5xl mb-3">
            <IoLogoJavascript />
          </div>
          <h1 className="text-green text-2xl sm:text-3xl mb-2">JavaScript</h1>

          <p className="mt-5 text-white/80 text-sm sm:text-base">
            I learned JavaScript from{" "}
            <a
              className="text-green/40 hover:text-green cursor-pointer"
              href="https://elzero.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elzero Web School
            </a>{" "}
            and have applied these skills to create interactive and functional
            web applications. Proficient in adding interactivity and enhancing
            user experience, I have developed various projects, including a
            Typing Speed Game. My expertise ensures efficient and dynamic
            coding, showcasing my ability to build engaging, user-friendly web
            interfaces.
          </p>
        </div>
        <div className="skill bg-black88 p-6 sm:p-8 rounded-md">
          <div className="skill-img text-4xl sm:text-5xl mb-3">
            <FaReact />
          </div>
          <h1 className="text-green text-2xl sm:text-3xl mb-2">React Js</h1>

          <p className="mt-5 text-white/80 text-sm sm:text-base">
            I have extensive experience with React.js, including knowledge of
            libraries like react-icons and react-router. I developed the Coral
            and Shopify websites using React, showcasing my ability to create
            dynamic and responsive user interfaces. My expertise in React
            ensures efficient component-based development, enabling the creation
            of scalable and maintainable web applications.
          </p>
        </div>
        <div className="skill bg-black88 p-6 sm:p-8 rounded-md">
          <div className="skill-img text-4xl sm:text-5xl mb-3">
            <PiGithubLogoBold />
          </div>
          <h1 className="text-green text-2xl sm:text-3xl mb-2">Git & GitHub</h1>

          <p className="mt-5 text-white/80 text-sm sm:text-base">
            I am proficient in using Git and GitHub for version control,
            ensuring efficient and collaborative development. All my projects
            are available and uploaded on GitHub, demonstrating my ability to
            manage code repositories and track changes effectively. My expertise
            with GitHub showcases my commitment to maintaining organized and
            accessible project documentation and source code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
