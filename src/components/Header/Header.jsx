import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import person from '../../assets/bannerPic1.png'
import './header.css'
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
        <div className="relative bottom-[400px]">





            <Carousel {...carouselSettings}>





                <div className='md:flex justify-evenly items-center'>
                    <div>
                        <h2 className="text-[#000000] lg:ml-[80px] lg:w-[580px] text-[40px] font-bold text-left font-serif">We help you to
                            <p className="text-[30px] font-semibold leading-[50px]">Elevate your teams capabilities <br /> with our proficient software <br /> engineers.</p>
                        </h2>



                        <div className='bg-cover bg-center w-full  h-full'>
                            <button className="bg-[#275998] relative  py-4 px-8 lg:mr-[360px] rounded-3xl text-white font-semibold mt-12 ">Schedule</button>
                        </div>

                    </div>

                    <div>
                        <img src={person} alt="" />
                    </div>

                </div>

            </Carousel>





















            {/* <Carousel {...carouselSettings}>
               <div>


               <div className="flex justify-between gap-10">

<div >

<h1 className="mt-10 ml-[90px] text-left w-[500px] text-[#266AAB] text-4xl font-bold font-serif">WE Help You To</h1>
<h5> Elevate Your Teams Capabilities <br/> with our Proficient Software Developer</h5>
<button className="bg-[#275998] mt-40 mr-[240px] rounded-xl text-white font-semibold  p-4">Get Quote Now</button>

</div>

<img className="w-[798px] h-[510px]" src={person} alt="" />


</div>




  

// {/* <img className="relative bottom-[20px]" src={bannerBottom} alt="" /> */}

            {/* </div> */}

            {/* // </Carousel>  */}

        </div>
    );
};

export default Header;