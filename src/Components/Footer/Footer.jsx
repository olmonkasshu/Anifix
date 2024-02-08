import React from 'react'
import { FaTwitter, FaTelegram, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='text-center bg-red-700'>
        <br />
        <h1 className='text-white font-extrabold text-[30px]'> Ani<span>/Fix</span></h1>

        <div className='flex justify-center mt-4 md:mx-8'>
            <p className='p-3 text-white hover:text-red-500'>Blog</p>
            <p className='p-3 text-white hover:text-red-500'>Blog</p>
            <p className='p-3 text-white hover:text-red-500'>Blog</p>
            <p className='p-3 text-white hover:text-red-500'>Blog</p>
            <p className='p-3 text-white hover:text-red-500'>Blog</p>
            
            
        </div>

        <div className='flex justify-center mt-4 md:mx-8'>
             {/* Email Icon with Link */}
          <a
            href="mailto:Candy@msgreen.org"
            className="text-white hover:text-red-500 mx-8"
          >
            <FaFacebook size={30} />
          </a>

          {/* Twitter Icon with Link */}
          <a
            href="https://twitter.com/msgreencoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 mx-8"
          >
            <FaTwitter size={30} />
          </a>

          {/* Telegram Icon with Link */}
          <a
            href="https://t.me/msgreencoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 mx-8"
          >
            <FaTelegram size={30} />
          </a>

          <a
            href="https://t.me/msgreencoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 mx-8"
          >
            <FaInstagram size={30} />
          </a>

          <a
            href="https://t.me/msgreencoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 mx-8"
          >
            <FaTiktok size={30} />
          </a>
        </div>
        <br />
        <p className='text-white font-bold'>@ Devies 2024</p>
    </div>
  )
}

export default Footer