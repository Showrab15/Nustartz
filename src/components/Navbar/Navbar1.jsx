import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import Coderwall from '../../assets/Coderwall.png'


const Navbar1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (

        <div className='my-container '>
            <div className="flex items-center">
                <div>
                    <img className="relative right-[205px]" src={Coderwall} alt="" />

                </div>
                <div>
                    <div className='relative bottom-[200px] flex items-center justify-between'>

                        <Link
                            to='/'
                            aria-label='HeroHub'
                            title='HeroHub'
                            className='inline-flex items-center'
                        >
                            <div className='flex items-center justify-center '>

                                <img alt="logo" src={logo} className="w-[280] relative right-[400px] h-[75]" />

                            </div>
                        </Link>
                        <div className="relative right-[200px]">

                            <ul className='items-center text-base text-[#294A85] font-medium hidden space-x-8 lg:flex'>
                                <li>
                                    <NavLink
                                        to='/'
                                        aria-label='Home'
                                        title='Home'
                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/services'
                                        aria-label='services'
                                        title='services'
                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to='about' aria-label='about' title='about'>
                                        About
                                    </Link>
                                </li>



                            </ul>
                        </div>

                        <div className="relative left-[100px]">
                            <button className='bg-[#275998] hidden border-none p-4 rounded-xl lg:block  text-white text-base'>Contact → </button>
                        </div>


                        {/* //------------------------- for mobile----------------------------------- */}
                        <div className='lg:hidden'>
                            <button
                                aria-label='Open Menu'
                                title='Open Menu'
                                className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                    <path
                                        fill='currentColor'
                                        d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className='absolute z-10 top-0 left-0 w-full'>
                                    <div className='p-5 bg-white border rounded shadow-sm'>
                                        <div className='flex items-center justify-between mb-4'>

                                            <img className="h-30 w-30" src={logo} alt="" />
                                            <div>
                                                <Link
                                                    to='/'
                                                    aria-label='Nustratz'
                                                    title='Nustratz'
                                                    className='inline-flex items-center'
                                                >
                                                    <div className='flex items-center justify-center '>
                                                        <img src="https://ibb.co/JKBmD8g" alt="" />
                                                    </div>

                                                </Link>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label='Close Menu'
                                                    title='Close Menu'
                                                    className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                        <path
                                                            fill='currentColor'
                                                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className='space-y-4'>
                                                <li>
                                                    <Link
                                                        to='/'
                                                        aria-label='Services'
                                                        title='Services'
                                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    >
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to='/About'
                                                        aria-label='About'
                                                        title='About'
                                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    >
                                                        About
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to='Contact'
                                                        aria-label='Contact'
                                                        title='Contact'
                                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    >
                                                        Contact
                                                    </Link>
                                                </li>






                                            </ul>
                                            <div>
                                                <button className='bg-[#275998] hidden border-none p-4 rounded-xl lg:block  text-white text-base'>Contact → </button>
                                            </div>


                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar1;

