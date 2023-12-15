import { FaCookieBite } from "react-icons/fa";
import "./CookieConsent.css"; // Import your custom styles
import { Link } from "react-router-dom";

const CookieConsent = ({ onAccept, onCancel }) => {
  const handleAccept = () => {
    // Handle accepting cookies
    onAccept();
  };

  const handleCancel = () => {
    // Handle canceling cookies (exit from website)
    onCancel();
  };

  return (
    <div className="cookie-consent pt-2 font-serif bg-white rounded-md w-[200px] md:w-[280px] absolute top-[370px] md:top-[450px] lg:top-[350px]">
      <div className="mb-2 text-center">
        <span className="text-[#275998] text-center  text-[20px] md:text-[45px] flex justify-center "><FaCookieBite />
</span>
        <p className="md:text-[15px] text-[10px] text-[#275998] font-medium text-center">This website uses <Link className="text-[#3595FC]">Cookies</Link> to enhance the user experience.</p>
        <div className="flex justify-center gap-2 pt-2">
          <button className="text-white rounded-md cursor-pointer p-2 text-[8px] md:text-[14px] bg-green-500" onClick={handleAccept}>
            Accept 
          </button>
          <button className="text-white rounded-md cursor-pointer p-2 text-[8px] md:text-[14px] bg-red-600" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
