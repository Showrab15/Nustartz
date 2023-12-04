import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerBottom from '../../assets/bannerBottom.png'
import person from '../../assets/girl.png'

const Header = () => {

    const carouselSettings = {
        showArrows: false,
        showStatus: false,
        infiniteLoop: true,
        autoPlay: true,
        interval: 3000,
        showThumbs: false,
    };



    return (
      <div className="relative bottom-[500px]">
          <Carousel {...carouselSettings}>
               <div>


               <div className="flex justify-between gap-10">

<div >

<h1 className="mt-36 ml-[90px] text-left text-[#266AAB] text-4xl font-bold font-serif"><span className="font-semibold text-[#275998]">A Part Of Numentica</span> Innovate & Excel With <span className="font-bold text-5xl">Nustratz</span></h1>

<button className="bg-[#275998] mt-40 mr-[240px] rounded-xl text-white font-semibold  p-4">Get Quote Now</button>

</div>

<img className="w-[604px] h-[681px]" src={person} alt="" />


</div>




  

<img className="relative bottom-[20px]" src={bannerBottom} alt="" />

        </div>

        </Carousel>
      </div>
    );
};

export default Header;