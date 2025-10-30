import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

function SubNavber() {
  return (
        <div className='bg-linear-to-r from-[#5885FD] to-[#FE5672] py-1.5 text-white'>
            <div className='flex items-center justify-center lg:justify-between container mx-auto'>
                <div className='flex gap-6 cursor-pointer'>
                    <FaFacebookF />
                    <FaYoutube />
                    <FaInstagram />
                    <FaTelegramPlane />
                </div>
                <div className='hidden lg:block'>
                    <div className='flex gap-6'>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Success Story</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SubNavber