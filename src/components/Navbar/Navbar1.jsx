// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import Coderwall from "../../assets/Coderwall.png";

// const Navbar1 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="my-container">
//       <div className="flex items-center justify-center">
//         <div>
//           <img
//             className="relative 2xl:hidden  xl:right-[266px] right-[205px]"
//             src={Coderwall}
//             alt=""
//           />
//         </div>
//         <div className="relative bottom-[200px] md:bottom-[190px] 2xl:bottom-[0px] flex items-center justify-between my-auto">
//           <Link
//             to="/"
//             aria-label="Nustratz"
//             //   title="HeroHub"
//             className="inline-flex items-center -mt-32 lg:mt-0"
//           >
//             <img
//               alt="logo"
//               src={logo}
//               className=" relative lg:w-[280px] right-[190px] md:right-[350px] lg:right-[400px] md:h-[75px]"
//             />
//           </Link>
//           <div className="relative right-[200px] 2xl:bottom-[0px] hidden lg:block">
//             <ul className="items-center text-base text-[#294A85] font-medium space-x-8 lg:flex">
//               <li>
//                 <NavLink
//                   to="/"
//                   aria-label="Home"
//                   title="Home"
//                   className={({ isActive }) =>
//                     isActive ? "active" : "default"
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/services"
//                   aria-label="services"
//                   title="services"
//                   className={({ isActive }) =>
//                     isActive ? "active" : "default"
//                   }
//                 >
//                   Services
//                 </NavLink>
//               </li>
//               <li>
//                 <Link to="about" aria-label="about" title="about">
//                   About
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="relative left-[100px] hidden lg:block">
//             <button className="bg-[#275998] border-none px-6 py-4 rounded-md lg:block text-white text-sm font-bold font-Montserrat">
//               Contact →{" "}
//             </button>
//           </div>

//           {/* //------------------------- for mobile----------------------------------- */}
//           <div className="flex justify-between px-4 lg:hidden -mr-3">
//             <button
//               aria-label="Open Menu"
//               title="Open Menu"
//               className="-mr-1 md:-mr-60 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mt-32"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//                 />
//               </svg>
//             </button>
//             {isMenuOpen && (
//               <div className="absolute z-10 top-0 left-0 w-full">
//                 <div className="p-5 bg-white border rounded shadow-sm">
//                   <div className="flex items-center justify-between mb-4">
//                     <img className="h-30 w-30" src={logo} alt="" />
//                     <div>
//                       <Link
//                         to="/"
//                         aria-label="Nustratz"
//                         title="Nustratz"
//                         className="inline-flex items-center"
//                       >
//                         <div className="flex items-center justify-center ">
//                           <img src="https://ibb.co/JKBmD8g" alt="" />
//                         </div>
//                       </Link>
//                     </div>
//                     <div>
//                       <button
//                         aria-label="Close Menu"
//                         title="Close Menu"
//                         className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
//                           <path
//                             fill="currentColor"
//                             d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                   <nav>
//                     <ul className="space-y-4">
//                       <li>
//                         <Link
//                           to="/"
//                           aria-label="Services"
//                           title="Services"
//                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                         >
//                           Services
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/About"
//                           aria-label="About"
//                           title="About"
//                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                         >
//                           About
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="Contact"
//                           aria-label="Contact"
//                           title="Contact"
//                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                         >
//                           Contact
//                         </Link>
//                       </li>
//                     </ul>
//                     <div>
//                       <button className="bg-[#275998] hidden border-none p-4 rounded-xl lg:block  text-white text-base">
//                         Contact →{" "}
//                       </button>
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar1;








import logo from "../../assets/Nustartz.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row justify-between px-4 lg:px-12 py-5 relative">
      <Link to='/'><img src={logo} className="w-28 h-10 lg:w-[201px] lg:h-[55px]" alt="" /></Link>
      <ul className="font-serif hidden lg:flex items-center justify-center space-x-9 text-base text-[#294A85] font-medium  ">
        <li>
          <NavLink
            to="/"
            aria-label="Home"
            title="Home"
            className=""
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            aria-label="services"
            title="services"
            className=""
          >
            Services
          </NavLink>
        </li>
        <li>
          <Link
            to="about"
            aria-label="about"
            title="about"
            className=""
          >
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
                to="/services"
                aria-label="services"
                title="services"
                className="text-[15px] text-white hover:text-red-500 font-medium font-serif leading-6"
              >
                Services
              </NavLink>
            </li>
            <li>
              <Link
                to="about"
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