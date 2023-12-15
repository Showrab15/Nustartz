

import "./WhyUs.css";
import chart from "../../assets/hi.png";
import light from "../../assets/light.png";
import note from "../../assets/note.png";
import q from "../../assets/q.png";
import wave from '../../assets/Hero Slider.png'

const WhyUs = () => {
  return (

    <>
        <div className="flex-col flex text-white   h-full">
      <div className="flex mx-auto justify-center md:mt-16 mt-4 px-4 relative">
        <h3 className="text-[#275998] text-center font-bold font-serif  text-[60px] md:text-[98px] md:leading-[100px] -ml-[57px] lg:ml-0">
          Why <br /> <span className=" ml-14 md:ml-16 relative md:bottom-0 bottom-5">Us</span>
        </h3>
        <img
          src={q}
          className="absolute left-[66px] md:left-[130px] lg:left-[180px] -top-[35px] md:-top-[75px] lg:-top-20"
          alt=""
        />
      </div>
      <div className=" mx-auto mt-8 md:mt-11 lg:mt-4">
        <div className="mx-auto grid lg:grid-cols-3 gap-10 lg:gap-32 text-center items-center">
          <div className="chart-container">
            <div className="bg-[#3595FC] chart-image w-[290px] p-5 rounded-[35px] cursor-pointer ">
              <img
                className="w-[80px] h-[74px] flex mx-auto"
                src={chart}
                alt=""
              />
              <p className="py-9 text-[14px] font-medium font-serif">
                As you grow, <br />
                we adapt. Our solutions <br />
                scale with your evolving needs.
              </p>
            </div>
            <h4 className="mx-auto text-movedown  text-[10px] md:text-[26px] font-serif font-semibold text-[#275998]">
              Scalability
            </h4>
          </div>
          <div  className="chart-container">
            <div className=" p-5 bg-[#3595FC] mt-11 w-[290px] rounded-[35px] cursor-pointer chart-image ">
              <img
                className="w-[99px] h-[102px] flex mx-auto"
                src={light}
                alt=""
              />
              <p className="mt-5  text-[14px] font-medium font-serif">
                We thrive on innovation,
                <br /> delivering cutting-edge <br /> solutions that keep your
                product <br /> ahead of the curve.
              </p>
            </div>
            <h4 className="mx-auto   text-movedown  text-[10px] md:text-[26px] font-serif font-semibold text-[#275998]">
              Innovation <br/>
             <span className="relative lg:bottom-4"> at Core</span>
            </h4>
          </div>

          <div  className="chart-container">
            <div className=" p-5 w-[290px] mt-8 rounded-[35px] cursor-pointer bg-[#3595FC] chart-image">
              <img
                className="w-[94px] h-[94px] flex mx-auto justify-center mr-[70px]"
                src={note}
                alt=""
              />
              <p className="py-9 text-[14px] font-medium font-serif">
                Your success is our priority, <br /> and we measure it by your
                achievements.
              </p>
            </div>
            <h4 className="mx-auto pb-4 sm:pb-0  text-movedown  text-[10px] md:text-[26px]  font-serif font-semibold text-[#275998]">
              Results-Driven <br /> <span  className="relative lg:bottom-4 md:pb-[10px]  lg:pb-0"> Approach</span>
            </h4>
          </div>
        </div>
      </div>
    </div>

    
    <img className="-mt-2 w-full" src={wave} alt="" />

    </>
  );
};

export default WhyUs;