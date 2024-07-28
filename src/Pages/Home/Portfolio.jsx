const Portfolio = () => {
  return (
    <div
      className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-72 flex justify-center items-center py-16 flex-col"
      id="portfolio"
    >
      <div className="head flex flex-col justify-center items-center">
        <h1 className="title text-3xl sm:text-4xl font-bold mb-4">Portfolio</h1>
        <span className="title-span w-24 h-1 bg-green mt-2"></span>
      </div>

      <div className="content grid grid-cols-1 xl:grid-cols-2 mt-12 sm:mt-28 gap-8 sm:gap-12 pb-12">
        <div className="skill bg-black88 p-6 sm:p-8 rounded-md">
          <div className="skill-img text-5xl mb-3 w-full">
            <a
              href="https://ahmedkamal14.github.io/E-Commerce-Website-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./des1.png"
                alt="Design 1"
                className="w-full object-cover h-64 rounded-lg hover:scale-105 hover:rotate-2 transition-all duration-300"
              />
            </a>
          </div>
          <h1 className="text-green text-2xl sm:text-3xl mb-2">Shpoify</h1>
          <p className="mt-5 text-white/80 text-sm sm:text-base">
            I created a modern, user-friendly e-commerce site for selling
            various products. It boasts easy navigation and a detailed product
            catalog. Fully responsive, it ensures a smooth experience on all
            devices. Well-placed call-to-action buttons and strong security
            features provide a safe shopping environment. A dedicated contact
            section improves communication. This project highlights my skills in
            developing professional, functional online stores.
          </p>
          <div className="tech mt-3">
            <ul className="flex gap-6 items-center ">
              <li className="border p-1 rounded-md text-sm sm:text-base">
                Vite
              </li>
              <li className="border p-1 rounded-md text-sm sm:text-base">
                React Js
              </li>
              <li className="border p-1 rounded-md text-sm sm:text-base">
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="skill bg-black88 p-6 sm:p-8 rounded-md">
          <div className="skill-img text-5xl mb-3 w-full">
            <a
              href="https://ahmedkamal14.github.io/E-Commerce-Website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./des2.png"
                alt="Design 2"
                className="w-full object-cover h-64 rounded-lg hover:scale-105 hover:-rotate-2 transition-all duration-300"
              />
            </a>
          </div>
          <h1 className="text-green text-2xl sm:text-3xl mb-2">Coral</h1>
          <p className="mt-5 text-white/80 text-sm sm:text-base">
            I developed a sleek, user-friendly e-commerce platform specifically
            for a clothing shop. The site includes intuitive navigation and a
            thorough product catalog. Designed to be fully responsive, it offers
            a seamless experience on any device. Prominent call-to-action
            buttons and enhanced security measures improve the shopping process.
            A contact section boosts customer interaction. This project
            showcases my expertise in creating stylish, effective online stores.
          </p>
          <div className="tech mt-3">
            <ul className="flex gap-6 items-center ">
              <li className="border p-1 rounded-md text-sm sm:text-base">
                Vite
              </li>
              <li className="border p-1 rounded-md text-sm sm:text-base">
                React Js
              </li>
              <li className="border p-1 rounded-md text-sm sm:text-base">
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="skill bg-black88 p-6 sm:p-8 rounded-md">
          <div className="skill-img text-5xl mb-3 w-full">
            <a
              href="https://ahmedkamal14.github.io/Bondi_Website_Template_HTML_CSS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./des3.png"
                alt="Design 3"
                className="w-full object-cover h-64 rounded-lg hover:scale-105 hover:-rotate-2 transition-all duration-300"
              />
            </a>
          </div>
          <h1 className="text-green text-2xl sm:text-3xl mb-2">
            Bondi Design Template
          </h1>
          <p className="mt-5 text-white/80 text-sm sm:text-base">
            I created a static website using the Bondi template to enhance my
            HTML and CSS skills. The site demonstrates clean design and
            effective layout techniques. Fully responsive, it looks great on all
            devices. This project, intended for learning purposes, showcases my
            ability to utilize templates and build visually appealing static
            websites.
          </p>
          <div className="tech mt-3">
            <ul className="flex gap-6 items-center ">
              <li className="border p-1 rounded-md text-sm sm:text-base">
                HTML
              </li>
              <li className="border p-1 rounded-md text-sm sm:text-base">
                CSS
              </li>
              <li className="border p-1 rounded-md text-sm sm:text-base">
                Bootstrap
              </li>
            </ul>
          </div>
        </div>
        <div className="skill bg-black88 p-6 sm:p-8 rounded-md">
          <div className="skill-img text-5xl mb-3 w-full">
            <a
              href="https://ahmedkamal14.github.io/Typing-Speed-Game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./des4.png"
                alt="Design 4"
                className="w-full object-cover h-64 rounded-lg hover:scale-105 hover:rotate-2 transition-all duration-300"
              />
            </a>
          </div>
          <h1 className="text-green text-2xl sm:text-3xl mb-2">
            Typing Speed Game
          </h1>
          <p className="mt-5 text-white/80 text-sm sm:text-base">
            I designed an engaging typing speed game website aimed at testing
            and improving typing speed and accuracy. Featuring a
            straightforward, user-friendly interface, it allows users to easily
            start the game and monitor their progress. The site is fully
            responsive, ensuring a consistent experience across all devices.
            This project demonstrates my ability to develop interactive and
            functional web applications.
          </p>
          <div className="tech mt-3">
            <ul className="flex gap-6 items-center ">
              <li className="border p-1 rounded-md text-sm sm:text-base">
                HTML
              </li>
              <li className="border p-1 rounded-md text-sm sm:text-base">
                CSS
              </li>
              <li className="border p-1 rounded-md text-sm sm:text-base">
                JavaScript
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
