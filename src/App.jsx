
// import Header from "./components/Header/Header";
// import Navbar1 from "./components/Navbar/Navbar1";
// // import { analyze } from '@vercel/speed-insights';

// import Footer from "./components/Footer/Footer";
// import { Analytics } from '@vercel/analytics/react'

// import { Outlet, useLocation } from "react-router-dom";

// function App() {

//   const location = useLocation();

//   // Check if the current path is '/about-Us'
//   const isAboutUsPage = location.pathname === '/about-Us';
//   const isOfferingsPage = location.pathname === '/offerings';
//   const isContactUsPage = location.pathname === "/contact-us";

//   // dependency array to trigger the effect only once when the component mounts


//   return (
//     <div>
//       <div
        
//         className="w-full   "
//       >
//         <Navbar1 />
//         {!isAboutUsPage && !isOfferingsPage  && !isContactUsPage && <Header />} {/* Conditionally render Header */}
//       </div>

//       <Outlet />

//       <Footer />
//       <Analytics />

//     </div>
//   );
// }

// export default App;

 import Header from "./components/Header/Header";
import { Outlet, useLocation } from 'react-router-dom';
import Navbar1 from './components/Navbar/Navbar1';
import Footer from './components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import CookieConsent from "./components/CookieConsent/CookieConsent";
import { useState } from "react";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

function App() {
  const location = useLocation();

  const isAboutUsPage = location.pathname === '/about-Us';
  const isOfferingsPage = location.pathname === '/offerings';
  const isContactUsPage = location.pathname === '/contact-us';
  const [showConsent, setShowConsent] = useState(true);

  const handleAccept = () => {
    // Handle accept action (e.g., set cookies)
    setShowConsent(false);
  };

  const handleCancel = () => {
    // Handle cancel action (e.g., exit from the website)
    window.location.href = "https://www.nustartz.com/"; // Replace with your exit URL
  };



  return (
    <div>
      <div className="w-full">
        <Navbar1 />
        {/* Conditionally render Header */}
        {!isAboutUsPage && !isOfferingsPage && !isContactUsPage && <Header />}

         {showConsent && (
        <CookieConsent onAccept={handleAccept} onCancel={handleCancel} />
      )}
       
      </div>
      <BackToTopButton />

      <Outlet />

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
