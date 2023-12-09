import logo from "../../assets/Nustartz.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row justify-between px-4 lg:px-12 py-5 relative w-full max-w-[1322px] mx-auto">
      <Link to="/">
        <img src={logo} className="w-28 h-10 lg:w-[201px] lg:h-[55px]" alt="" />
      </Link>
      <ul className="font-serif hidden lg:flex items-center justify-center space-x-9 text-base text-[#294A85] font-medium  ">
        <li>
          <NavLink to="/" aria-label="Home" title="Home" className="">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/offerings"
            aria-label="offerings"
            title="offerings"
            className=""
          >
            Offerings
          </NavLink>
        </li>
        <li>
          <Link to="about-Us" aria-label="about" title="about" className="">
            About
          </Link>
        </li>
      </ul>
      <button className="bg-[#275998] hidden border-none p-4 rounded-xl lg:block  text-white text-base">
        Contact →{" "}
      </button>

      {/*----------------------- Mobile Menu -------------------------*/}
      <div className="lg:hidden">
        {/* Mobile Menu Toggle Button */}
        <button id="menuButton" onClick={handleMenuToggle}>
          {menuOpen ? (
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
              />
            </svg>
          ) : (
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          )}
        </button>
        <div
          id="menuList"
          style={{
            left: menuOpen ? "0px" : "-230px",
            top: menuOpen ? "80px" : "80px",
            transitionDuration: "1000ms",
          }}
          className="absolute bg-gray-800 h-[500px] z-50 p-8"
        >
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className="text-[15px] text-white hover:text-red-500 font-medium font-serif leading-6"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offerings"
                aria-label="offerings"
                title="offerings"
                className="text-[15px] text-white hover:text-red-500 font-medium font-serif leading-6"
              >
                Offerings
              </NavLink>
            </li>
            <li>
              <Link
                to="about-Us"
                aria-label="about"
                title="about"
                className="text-[15px] text-white hover:text-red-500 font-medium font-serif leading-6"
              >
                About
              </Link>
            </li>
          </ul>
          <button className="bg-[#275998] border-none p-4 rounded-md text-white text-sm font-bold font-Montserrat leading-[22px] mt-4">
            CONTACT <span className="ml-[15px]">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;