
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

  // dependency array to trigger the effect only once when the component mounts


  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(100.72deg, #F9F9F9 -12.83%, #2370C8 104.22%)",
        }}
        className="w-full  pb-10 "
      >
        <Navbar1 />
        {!isAboutUsPage && <Header />} {/* Conditionally render Header */}
      </div>

      <Outlet />

      <Footer />
      <Analytics />

    </div>
  );
}

export default App;