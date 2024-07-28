import { useState } from "react";
import { IoLogoNodejs } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-black88 text-white">
      <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center py-5">
        <div className="logo">
          <a href="/Portfolio/">
            <IoLogoNodejs className="text-5xl text-green" />
          </a>
        </div>

        <div className="hidden lg:flex as">
          <nav className="flex gap-8 items-center">
            <ul className="flex gap-8 capitalize">
              <a
                href="#about"
                className="hover:text-green transition-all duration-500"
              >
                <li>about</li>
              </a>
              <a
                href="#exp"
                className="hover:text-green transition-all duration-500 hidden"
              >
                <li>experience</li>
              </a>
              <a
                href="#skills"
                className="hover:text-green transition-all duration-500"
              >
                <li>skills</li>
              </a>
              <a
                href="#portfolio"
                className="hover:text-green transition-all duration-500"
              >
                <li>portfolio</li>
              </a>
              <a
                href="#contact"
                className="hover:text-green transition-all duration-500"
              >
                <li>contact</li>
              </a>
            </ul>
            <button className="bg-green px-4 py-2 rounded-md hover:bg-green/50 transition-all duration-500">
              Resume
            </button>
          </nav>
        </div>

        <div className="lg:hidden">
          <FaBars className="text-3xl cursor-pointer" onClick={toggleSidebar} />
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[75%] h-full bg-black88 text-white p-10 transition-transform duration-500 z-50 ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <FaTimes
            className="text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col gap-8 capitalize">
            <a
              href="#about"
              className="hover:text-green transition-all duration-500"
              onClick={toggleSidebar}
            >
              <li>about</li>
            </a>
            <a
              href="#exp"
              className="hover:text-green transition-all duration-500 hidden"
              onClick={toggleSidebar}
            >
              <li>experience</li>
            </a>
            <a
              href="#skills"
              className="hover:text-green transition-all duration-500"
              onClick={toggleSidebar}
            >
              <li>skills</li>
            </a>
            <a
              href="#portfolio"
              className="hover:text-green transition-all duration-500"
              onClick={toggleSidebar}
            >
              <li>portfolio</li>
            </a>
            <a
              href="#contact"
              className="hover:text-green transition-all duration-500"
              onClick={toggleSidebar}
            >
              <li>contact</li>
            </a>
          </ul>
          <button
            className="bg-green px-4 py-2 rounded-md mt-8 hover:bg-green/50 transition-all duration-500"
            onClick={toggleSidebar}
          >
            Resume
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
