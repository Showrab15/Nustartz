import { Link } from 'react-router-dom';
import './Footer.css'
import SocialFooterIcons from './SocialFooterIcons';
const Footer = () => {



    return (
        <footer className="mt-10 font-serif">
            <div className="bgColor  text-black font-serif">
                <div className=" mx-auto pt-2">
                    <div className='grid mx-auto ml-[40px] mdLml-0 grid-cols-2 gap-[65px] md:grid-cols-4 md:gap-2 mt-4 '>
                        <div className="md:ml-8 text-sm">
                            <img className="md:w-40 w-32 md:-ml-4 -ml-[15px] mb-5" src='https://i.ibb.co/1XYk81B/Steve-logo-copy-2-1.png' alt="" />
                            <p className='mb-1 '>Website : www.nustartz.com</p>
                            <p className='mb-1 '>Email : <span className="text-[14px]">contact@NuStartz.com</span> </p>
                            <p className=''>Mobile : +1 732 983 1325</p>

                            {/* social icon */}
                            <SocialFooterIcons></SocialFooterIcons>
                        </div>

                        {/* useful links */}
                        <div className="mt-4 lg:ml-20">
                            <h1 className=" text-base md:text-lg font-semibold mb-5">Our Links</h1>
                            <ul className='text-sm'>
                                <li className='mb-2'>
                                    <Link to="/" target="_blank" rel="noopener noreferrer">Home</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to="/about-Us" target="_blank" rel="noopener noreferrer">About Us</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/offerings' >Offerings</Link>
                                </li>
                                <li>
                                    <Link to='/'>Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* company */}
                        <div className="md:mt-4 lg:ml-10">
                            <h1 className="text-base md:text-lg font-semibold mb-5">Our Company</h1>

                            <ul className='text-sm'>
                                <li className='mb-2'>
                                    <a href="/" target="_blank" rel="noopener noreferrer">About Company</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="/" target="_blank" rel="noopener noreferrer">Our Testimonial</a>
                                </li>
                            </ul>
                        </div>

                        {/* support */}
                        <div className="md:mt-4 lg:ml-20">
                            <h1 className="text-base md:text-lg font-semibold mb-5">Our Support</h1>

                            <ul className='text-sm'>
                                <li className='mb-2'>
                                    <a href="/" target="_blank" rel="noopener noreferrer">Customer Support</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="/" target="_blank" rel="noopener noreferrer">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className='mt- py-5 border-y-0 text-center'>
                        <hr className='mb-2 border-blue-200' />
                        <p className=''>&copy; Copyright 2024 <span className='text-blue-500'>Nustartsz </span> - All rights reserved</p>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>

    );
};

export default Footer;