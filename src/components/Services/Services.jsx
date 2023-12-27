import offeringBanner from '../../assets/Offerings/OfferingsBanner.png'
import "./Services.css"
import wave from '../../assets/Hero Slider.png'

const Services = () => {
  return (
    <>

      <div
        style={{
          backgroundImage: `url(${offeringBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full font-serif  md:h-[350px] h-[400px] lg:h-[534px] 2xl:h-[510px]  mx-auto flex justify-center items-center"
      >
        <h3 className="text-[#275998] text-lg lg:text-[35px] md:leading-[28px] lg:leading-normal font-bold text-center px-2 md:px-0">
          From strategic guidance to cutting-edge tech solutions, <br className="hidden md:block xl:block" />
          we empower startups to not just thrive but conquer their industry
        </h3>
      </div>
      <img className="-mt-2 w-full md:block hidden" src={wave} alt="" />

      <div className='font-serif max-w-6xl mx-auto '>




        {/* first category */}
        <div className=''>
          <h4 className='md:text-[30px]  text-[15px] my-12 mt-20 py-8  font-semibold text-black gap-4 items-center text-center mx-auto  flex justify-center '>Tech Fusion  <span className="text-[#3595FC]">Hub</span></h4>

          <section className="cards  px-20 lg:px-10 xl:px-0 mx-auto gap-12 md:gap-16 lg:gap-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/* sixth box */}
            <article className="cart w-full  cursor-pointer  card--6">
              <div className="card__img card__img--6"></div>
              <div className="card__img--hover card__img--hover-6"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold">Transparent Pricing Structure</h2>
                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px]">Enjoy the convenience of a fixed monthly cost per engineer,
                  providing predictability and control over your budget.</h6>
              </div>
            </article>

            {/* seventh box */}
            <article className="cart w-full  cursor-pointer  card--7">
              <div className="card__img card__img--7"></div>
              <div className="card__img--hover card__img--hover-7"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold">Versatile Skillsets</h2>
                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px]"> Our talented pool of resources covers a spectrum of
                  expertise, including UI, UX, Big Data, API, Tech Operations,
                  and IT support.</h6>
              </div>
            </article>

            {/* eight box */}
            <article className="cart w-full  cursor-pointer  card--8">
              <div className="card__img card__img--8"></div>
              <div className="card__img--hover card__img--hover-8"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold"> Complimentary Program and
                  Executive Management Support</h2>
                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px]"> Benefit from additional support in program and executive
                  management without incurring extra charges.</h6>
              </div>
            </article>

            {/* ninth box */}
            <article className="cart w-full  cursor-pointer  card--9 ">
              <div className="card__img card__img--9"></div>
              <div className="card__img--hover card__img--hover-9"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold">Customized Collaboration</h2>
                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px]">  Our teams seamlessly integrate with your existing processes
                  from interviews and onboarding to utilizing your preferred
                  tools and navigating delivery, deployment, support, promotions,
                  and feedback mechanisms.</h6>
              </div>
            </article>

            {/* ten box */}
            <article className="cart w-full  cursor-pointer  card--10 ">
              <div className="card__img card__img--10"></div>
              <div className="card__img--hover card__img--hover-10"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold">Efficient Back Office Support</h2>
                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px]">  We handle all back-office support and logistics, allowing you to
                  dedicate your time and energy to the core task of building your
                  product.</h6>
              </div>
            </article>
            {/* ten box */}
            <article className="cart w-full  cursor-pointer  card--10 ">
              <div className="card__img card__img--10"></div>
              <div className="card__img--hover card__img--hover-10"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold">Resource Ownership:
                </h2>
                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px]">You have the flexibility to showcase these resources as your own,
                  whether highlighting talent, your bench, or investments, wherever
                  it suits your preferences.</h6>
              </div>
            </article>

          </section>


        </div>

        {/* second category */}
        <div>
          <h4 className='md:text-[30px]  text-[15px] my-12 mt-10 py-8 font-semibold text-black items-center  text-center mx-auto gap-4 flex justify-center '>Entrepreneurial  <span className="text-[#3595FC]">Hub</span></h4>

          <section className="cards px-20 lg:px-10 xl:px-0 mx-auto gap-12 md:gap-16 lg:gap-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/* first box */}
            <article className="cart card--1 w-full  cursor-pointer ">
              <div className="card__img card__img--1"></div>
              <div className="card__img--hover card__img--hover-1"></div>
              <div className="card__info">
                <h3 className="text-[#275998]  hover-white uppercase text-[10px] md:text-[18px] font-semibold"> Strategic Guidance</h3>
                <h5>Strategic expertise for startups:</h5>

                <h6 className="font-normal text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px] hover-white"> Business planning, financial advice, and product development to fuel your growth.</h6>
                {/* <p className="card__text">Read More</p> */}
              </div>
            </article>

            {/* second box */}
            <article className="cart w-full  cursor-pointer  card--2">
              <div className="card__img card__img--2"></div>
              <div className="card__img--hover card__img--hover-2"></div>
              <div className="card__info">
                <h3 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold">Brand Building and Marketing</h3>
                <h5>Unleash you {`brand's `} potential:</h5>

                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px] "> Marketing, Digital Strategy, and Networking to propel your startup forward.</h6>
              </div>
            </article>

            {/* third box */}
            <article className="cart w-full  cursor-pointer  card--3">
              <div className="card__img card__img--3"></div>
              <div className="card__img--hover card__img--hover-3"></div>
              <div className="card__info">
                <h3 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold"> Startup
                  Acceleration</h3>
                <h5>Fast-track growth:</h5>

                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px] ">
                  Accelerator Programs, Market Access,  and Data-Driven Insights for startups.</h6>
              </div>
            </article>

            {/* fourth box */}
            <article className="cart w-full  cursor-pointer  card--4 ">
              <div className="card__img card__img--4"></div>
              <div className="card__img--hover card__img--hover-4"></div>
              <div className="card__info">
                <h3 className="text-[#275998] hover-white  uppercase text-[10px] md:text-[18px] font-semibold"> Ecosystem Integration</h3>
                <h5>Integrate, thrive, and expand:</h5>
                <h6 className="font-normal text-[#275998] hover-white text-[8px] md:text-[14px] mt-[5px] mb-[10px] ">
                  Legal compliance,  Talent Acquisition, and Ecosystem Access for startup success.</h6>
              </div>
            </article>

            {/* fifth box */}
            <article className="cart w-full  cursor-pointer  card--5 ">
              <div className="card__img card__img--5"></div>
              <div className="card__img--hover card__img--hover-5"></div>
              <div className="card__info">
                <h3 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold"> Investor Support
                  and Growth</h3>
                <h5>Elevate your investment journey: </h5>

                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px] ">
                  Pitch Deck, M&A Advisory, and  Custom Solutions for startup growth and success.</h6>
              </div>
            </article>
            {/* sixth box */}
            <article className="cart w-full  cursor-pointer  card--5 ">
              <div className="card__img card__img--5"></div>
              <div className="card__img--hover card__img--hover-5"></div>
              <div className="card__info">
                <h3 className="text-[#275998] hover-white uppercase text-[10px] md:text-[18px] font-semibold">Efficient Engineering and Operations</h3>
                <h5>Maximize engineering potential: </h5>
                <h6 className="font-normal hover-white text-[#275998] text-[8px] md:text-[14px] mt-[5px] mb-[10px] "> Accelerated onboarding, 24/7 IT
                  support, and streamlined logistics for startups.</h6>
              </div>
            </article>

          </section>
        </div>


      </div>
    </>

  );
};

export default Services;