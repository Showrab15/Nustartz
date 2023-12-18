import  { useState, useEffect } from "react";
import "./BackToTopButton.css"; // Import your custom styles
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 
  return (
    <div>
      {isVisible && (
        <button className="backToTopButton-animation font-serif cursor-pointer fixed right-[40px] bottom-[50px] md:bottom-[40px] md:right-[40px] rounded-md flex gap-3 justify-center items-center text-[15px] p-2 bg-[#3595FC] text-[#fff]" onClick={scrollToTop}>
          Back to <span className="text-[#275998] font-semibold"> <FaArrowUp /></span>

        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
