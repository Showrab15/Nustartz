
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const SocialFooterIcons = () => {
    return (
        <div>
            <ul className='flex gap-5 mt-3'>
                <li className='cursor-pointer'>
                    {/* <a target='_blank' to="https://www.facebook.com" className=''>
                        <FaFacebookF className='text-2xl' />
                    </a> */}
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">   <FaFacebookF className='text-2xl  text-blue-400' /></a>
                </li>
                <li className='cursor-pointer'>
                    {/* <a target='_blank' to="https://www.instagram.com" className=''>
                        <AiFillInstagram className='text-2xl' />
                    </a> */}
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <AiFillInstagram className='text-2xl text-blue-400' /></a>
                </li>
                <li className='cursor-pointer'>
                    {/* <a target='_blank' to="https://www.linkedin.com" className=''>
                        <BsLinkedin className='text-2xl' />
                    </a> */}
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin className='text-2xl text-blue-400' /></a>
                </li>
                <li className='cursor-pointer'>
                    {/* <a target='_blank' to="https://www.youtube.com" className=''>
                        <BsYoutube className='text-2xl' />
                    </a> */}
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> <BsYoutube className='text-2xl text-blue-400' /></a>
                </li>
            </ul>
        </div>
    );
};

export default SocialFooterIcons;