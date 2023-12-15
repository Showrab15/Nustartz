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
        className="w-full  md:h-[350px] h-[400px] lg:h-[534px] 2xl:h-[700px]  mx-auto flex justify-center items-center"
      >
        <h3 className="text-[#275998] text-[20px] md:text-[35px] md:leading-[50px] lg:leading-normal font-bold text-center px-2 md:px-0">
          Our Offerings
        </h3>
      </div>
      <img className="-mt-2 w-full md:block hidden" src={wave} alt="" />

      <div className='font-serif max-w-6xl mx-auto'>

        {/* first category */}
        <button className='text-xl my-12 mt-10 py-2 rounded-xl px-2  cursor-pointer font-semibold text-white border-2  text-center mx-auto bg-[#275998] flex justify-center '>Entrepreneurial Hub</button>

        <section className="cards px-20 lg:px-10 xl:px-0 mx-auto gap-12 md:gap-16 lg:gap-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* first box */}
          <article className="cart card--1 w-full  cursor-pointer ">
            <div className="card__img card__img--1"></div>
            <div className="card__img--hover card__img--hover-1"></div>
            <div className="card__info">
              <h3 className="text-[#275998]  hover-white uppercase text-[15px] md:text-[25px] font-semibold"> Strategic Guidance</h3>
              <h6 className="font-normal text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px] hover-white">Strategic expertise for startups Business planning, financial advice, and product development to fuel your growth.</h6>
              {/* <p className="card__text">Read More</p> */}
            </div>
          </article>

          {/* second box */}
          <article className="cart w-full  cursor-pointer  card--2">
            <div className="card__img card__img--2"></div>
            <div className="card__img--hover card__img--hover-2"></div>
            <div className="card__info">
              <h3 className="text-[#275998] hover-white uppercase text-[15px] md:text-[25px] font-semibold">Brand Building and Marketing</h3>
              <h6 className="font-normal hover-white text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px] ">Unleash you {`brand's `}potential Marketing, Digital Strategy, and Networking to propel your startup forward.</h6>
            </div>
          </article>

          {/* third box */}
          <article className="cart w-full  cursor-pointer  card--3">
            <div className="card__img card__img--3"></div>
            <div className="card__img--hover card__img--hover-3"></div>
            <div className="card__info">
              <h3 className="text-[#275998] hover-white uppercase text-[15px] md:text-[25px] font-semibold"> Startup
                Acceleration</h3>
              <h6 className="font-normal hover-white text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px] ">Fast-track growth
                Accelerator Programs, Market Access,  and Data-Driven Insights for startups.</h6>
            </div>
          </article>

          {/* fourth box */}
          <article className="cart w-full  cursor-pointer  card--4">
            <div className="card__img card__img--4"></div>
            <div className="card__img--hover card__img--hover-4"></div>
            <div className="card__info">
              <h3 className="text-[#275998] hover-white  uppercase text-[15px] md:text-[25px] font-semibold"> Ecosystem Integration</h3>
              <h6 className="font-normal text-[#275998] hover-white text-[10px] md:text-[15px] mt-[5px] mb-[10px] ">Integrate, thrive, and expand:
                Legal compliance,  Talent Acquisition, and Ecosystem Access for startup success.</h6>
            </div>
          </article>

          {/* fifth box */}
          <article className="cart w-full  cursor-pointer  card--5">
            <div className="card__img card__img--5"></div>
            <div className="card__img--hover card__img--hover-5"></div>
            <div className="card__info">
              <h3 className="text-[#275998] hover-white uppercase text-[15px] md:text-[25px] font-semibold"> Investor Support
                and Growth</h3>
              <h6 className="font-normal hover-white text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px] ">Elevate your investment journey:
                Pitch Deck, M&A Advisory, and  Custom Solutions for startup growth and success.</h6>
            </div>
          </article>

        </section>



        {/* second category */}
        <div className=''>
          <button className='text-xl my-12 mt-20 py-2 rounded-xl px-2  cursor-pointer font-semibold text-white border-2  text-center mx-auto bg-[#275998] flex justify-center '>Tech Nexus Hub</button>

          <section className="cards  px-20 lg:px-10 xl:px-0 mx-auto gap-12 md:gap-16 lg:gap-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/* sixth box */}
            <article className="cart w-full  cursor-pointer  card--6">
              <div className="card__img card__img--6"></div>
              <div className="card__img--hover card__img--hover-6"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[15px] md:text-[25px] font-semibold"> Data Management and Strategy</h2>
                <h5>Maximize your data potential:</h5>
                <h6 className="font-normal hover-white text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px]">Governance, Quality, Master Data, Cloud Strategy, and Engineering  for business excellence.</h6>
              </div>
            </article>

            {/* seventh box */}
            <article className="cart w-full  cursor-pointer  card--7">
              <div className="card__img card__img--7"></div>
              <div className="card__img--hover card__img--hover-7"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[15px] md:text-[25px] font-semibold">Business Intelligence and Insights</h2>
                <h5>Drive informed decisions:</h5>
                <h6 className="font-normal hover-white text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px]"> Business Intelligence,  Data Analytics, and Managed Data Services for actionable insights.</h6>
              </div>
            </article>

            {/* eight box */}
            <article className="cart w-full  cursor-pointer  card--8">
              <div className="card__img card__img--8"></div>
              <div className="card__img--hover card__img--hover-8"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[15px] md:text-[25px] font-semibold"> Application Development and Modernization</h2>
                <h5>Empower your digital presence:</h5>
                <h6 className="font-normal hover-white text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px]"> Application Development and Modernization for enhanced user experiences.</h6>
              </div>
            </article>

            {/* ninth box */}
            <article className="cart w-full  cursor-pointer  card--9">
              <div className="card__img card__img--9"></div>
              <div className="card__img--hover card__img--hover-9"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[15px] md:text-[25px] font-semibold"> Advanced AI and Security</h2>
                <h5>Stay ahead securely:</h5>
                <h6 className="font-normal hover-white text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px]">  Generative AI and Security &  Compliance for cutting-edge protection and innovation.</h6>
              </div>
            </article>

            {/* ten box */}
            <article className="cart w-full  cursor-pointer  card--10">
              <div className="card__img card__img--10"></div>
              <div className="card__img--hover card__img--hover-10"></div>
              <div className="card__info">
                <h2 className="text-[#275998] hover-white uppercase text-[15px] md:text-[25px] font-semibold">Microsoft Solutions</h2>
                <h5>Discover the power of Microsoft:</h5>
                <h6 className="font-normal hover-white text-[#275998] text-[10px] md:text-[15px] mt-[5px] mb-[10px]">  Explore a suite of  solutions including Microsoft Fabric, Microsoft Dynamics CRM, and Data Engineering &Visualization.</h6>
              </div>
            </article>
          </section>


        </div>

      </div>
    </>

  );
};

export default Services;