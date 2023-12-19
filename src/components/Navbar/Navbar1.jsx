import logo from "../../assets/Nustartz.png";
import { Link, NavLink } from "react-router-dom";
import {  useState } from "react";
import "./Navbar.css"
const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
 
  return (
    <div className="mb-1 z-50 w-full bg-white  shadow-xl rounded-2xl font-serif">

      <div className="flex flex-row justify-between px-4 lg:px-12 py-5 relative w-full max-w-[1322px] mx-auto">
        <Link to="/">
          <img src={logo} className="w-28 h-10 lg:w-[201px] lg:h-[55px]" alt="" />
        </Link>
        <nav>
        <ul className="font-serif   hidden md:flex items-center justify-center space-x-9 text-lg text-[#3595FC] font-medium relative ">
          <li>
          <NavLink
            to="/home"
            aria-label="Home"
            title="Home"
            className="font-semibold navLink"
            
          >
            Home
          </NavLink>
          </li>
          <li>
            <NavLink
              to="/offerings"
              aria-label="offerings"
              title="offerings"
              className="font-semibold navLink "
            >
              Offerings
            </NavLink>
          </li>
          <li>
            <NavLink to="about-Us"
              aria-label="about"
              title="about"
              className="font-semibold navLink"
              >
              About Us
            </NavLink>
          </li>
        </ul>
        
</nav>
        <Link to="/contact-us">
          <button className="btn-hover color-9 hidden border-none p-4 rounded-xl md:block  text-white text-base">
            Contact →{" "}
          </button>
        </Link>


        {/*----------------------- Mobile Menu -------------------------*/}
        <div className="md:hidden">
          {/* Mobile Menu Toggle Button */}
          <button id="menuButton" onClick={handleMenuToggle}>
            {menuOpen ? (
              <svg className="w-5 text-red-500" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            ) : (
              <svg className="w-5 text-[#294A85]" viewBox="0 0 24 24">
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
            className={`absolute  z-50 p-8 ${menuOpen ? "bg-[#0083bb] mb-20 menuOpen" : ""
              }`}        >
            <ul className="flex flex-col gap-4 text-center font-medium font-serif leading-6 text-[15px] text-white">
              <li>
                <NavLink
                  to="/home"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked

                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/offerings"
                  aria-label="offerings"
                  title="offerings"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked

                >
                  Offerings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about-Us"
                  aria-label="about"
                  title="about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  } onClick={closeMenu} // Close menu when clicked

                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <Link to="/contact-us">
              <button className="bg-[#275998] border-none p-4 rounded-md text-white text-sm font-semibold font-Montserrat leading-[22px] mt-4">
                CONTACT <span className="ml-[15px]">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar1;