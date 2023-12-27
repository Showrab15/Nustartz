
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./header.css";
import BgVideo from '../../assets/bannerViswo.mp4'
import BgVideo1 from '../../assets/Sequence 01.mp4'
import { Link } from "react-router-dom";

const Header = () => {
 

  return (
    <div className="w-full h-full mb-20">
    
        <div className="relative w-full h-[230px] sm:h-[600px] 2xl:h-[550px] overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover "
  >
    <source className="hidden sm:block" src={BgVideo}  type="video/mp4" />
    <source className="block sm:hidden " src={BgVideo1}  type="video/mp4" />
    {/* Add additional <source> tags for other video formats if needed */}
    Your browser does not support the video tag.
    <track kind="captions" src="your-captions.vtt"  label="English"/>

  </video>
  
  <div className="absolute inset-0 flex justify-end items-center">
    <div className="font-serif flex flex-col items-center mx-auto my-auto text-white">
    
      <Link to="https://calendly.com/nustartz/30min">
        <button className="btn-hover color-9 rounded-[20px] px-4 sm:px-5 py-3 sm:mt-[500px]  mt-[120px] lg:mt-[450px] sm:text-lg text-sm  tracking-[0.081em]">
          Schedule
        </button>
      </Link>
    </div>
  </div>
</div>

        
      
    </div>
  );
};

export default Header;