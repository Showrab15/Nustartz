

import './Footer.css'
import SocialFooterIcons from './SocialFooterIcons';
const Footer = () => {
    return (
        <footer className=''>
            <div className="bgColor  text-black font-serif">
                <div className="container mx-auto pt-4 md:pt-32 px-3">
                    <div className='grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-11'>
                        <div>
                            <img className="w-52 mb-5" src='https://i.ibb.co/1XYk81B/Steve-logo-copy-2-1.png' alt="" />
                            <p className='mb-1'>Website : www.nustartz.com</p>
                            <p className='mb-1'>Email : Steve@nustartz.com</p>
                            <p className=''>Mobile : +1 732 983 1325</p>

                            {/* social icon */}
                            <SocialFooterIcons></SocialFooterIcons>
                        </div>

                        {/* useful links */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Our Links</h1>
                            <ul className=''>
                                <li className='mb-2'>
                                    {/* <Link target='blank' to="/">Home</Link> */}
                                    <a href="/" target="_blank" rel="noopener noreferrer">Home</a>
                                </li>
                                <li className='mb-2'>
                                    {/* <Link target='blank' to="/about-details">About Us</Link> */}
                                    <a href="/" target="_blank" rel="noopener noreferrer">About Us</a>
                                </li>
                                <li className='mb-2'>
                                    {/* <Link target='blank' to="/nexus-accounts">Services</Link> */}
                                    <a href="/" target="_blank" rel="noopener noreferrer">Services</a>
                                </li>
                                <li>
                                    {/* <Link target='blank' to="/contact">Contact</Link> */}
                                </li>
                            </ul>
                        </div>

                        {/* company */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Our Company</h1>
                            {/* <ul className=''>
                                <li className='mb-2'>
                                    <Link target='blank' to="/careers">About Company</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link target='blank' to="/">Our Testimonial</Link>
                                </li>
                            </ul> */}
                            <ul>
                                <li className='mb-2'>
                                    <a href="/" target="_blank" rel="noopener noreferrer">About Company</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="/" target="_blank" rel="noopener noreferrer">Our Testimonial</a>
                                </li>
                            </ul>
                        </div>

                        {/* support */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Our Support</h1>
                            {/* <ul className=''>
                                <li className='mb-2'>
                                    <Link target='blank' to="/nexus-customer-service-portal">Customer Support Portal</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link target='blank' to="/">FAQ</Link>
                                </li>
                            </ul> */}
                            <ul>
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
                    <div className='mt-11 py-5 border-y-0 text-center'>
                        <hr className='mb-11 border-blue-200' />
                        <p className=''>&copy; Copyright 2023 <span className='text-blue-500'>Nustartsz </span> - All rights reserved</p>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>

    );
};

export default Footer;