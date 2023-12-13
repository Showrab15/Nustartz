
import Header from "./components/Header/Header";
import Navbar1 from "./components/Navbar/Navbar1";
// import { analyze } from '@vercel/speed-insights';

import Footer from "./components/Footer/Footer";
import { Analytics } from '@vercel/analytics/react'

import { Outlet, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  // Check if the current path is '/about-Us'
  const isAboutUsPage = location.pathname === '/about-Us';
  const isOfferingsPage = location.pathname === '/offerings';

  // dependency array to trigger the effect only once when the component mounts


  return (
    <div>
      <div
        
        className="w-full   "
      >
        <Navbar1 />
        {!isAboutUsPage && !isOfferingsPage && <Header />} {/* Conditionally render Header */}
      </div>

      <Outlet />

      <Footer />
      <Analytics />

    </div>
  );
}

export default App;