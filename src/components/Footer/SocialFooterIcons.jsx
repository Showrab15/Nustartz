
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SocialFooterIcons = () => {
    return (
        <div>
            <ul className='flex gap-5 mt-3'>
                <li className='cursor-pointer'>
                
                    <Link to="https://www.facebook.com/people/NuStartz/61554431259746/?_rdc=1&_rdr">   <FaFacebookF className='text-2xl  text-blue-400' /></Link>
                </li>
                <li className='cursor-pointer'>
              
                    <Link to="https://www.instagram.com"> <AiFillInstagram className='text-2xl text-blue-400' /></Link>
                </li>
                <li className='cursor-pointer'>
                  
                    <Link to="https://www.linkedin.com/company/nustartz/"><BsLinkedin className='text-2xl text-blue-400' /></Link>
                </li>
                <li className='cursor-pointer'>
                   
                    <Link to="https://www.youtube.com/@NuStartz" > <BsYoutube className='text-2xl text-blue-400' /></Link>
                </li>
            </ul>
        </div>
    );
};

export default SocialFooterIcons;