import React from 'react'
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

function ContactFooter() {
  return (
    <div className='bg-gray-100 w-full py-8 mt-8'>
      <div className='lg:ml-52 lg:mr-52 md:ml-20 md:mr-20 ms:ml-14 ms:mr-14 ml-14 mr-14' >
        <div className='flex justify-between'>
          <ul className="flex h-10 justify-between w-32 flex-nowrap">
              <li>
                <a href="a" className='hover:text-blue-700'>
                  <FaTwitter size={16} />
                </a>
              </li>
              <li>
                <a href="b" className='hover:text-blue-700'>
                  <FaFacebookF size={16} />
                </a>
              </li>
              <li>
                <a href="c" className='hover:text-blue-700'>
                  <FaLinkedinIn size={16} />
                </a>
              </li>
              <li>
                <a href="d" className='hover:text-blue-700'>
                  <FaInstagram size={16} />
                </a>
              </li>
            </ul>
          <div className='justify-end text-sm w-24 md:mr-10'>
            <div className='hover:text-blue-600 mb-2'><a href="#">Front Status</a></div>
            <div className='hover:text-blue-600 mb-2'><a href="#">Privacy Notice</a></div>
            <div className='hover:text-blue-600 '><a href="#">SaaS Services Agreement</a></div>
          </div>
        </div>
        <div className='flex flex-col mx-auto items-center mt-20'>
          <a href="#">
            <img
              src="https://seeklogo.com/images/F/front-logo-5E94F18365-seeklogo.com.png"
              className="w-4 mr-4 h-6 mb-2">
            </img>
          </a>
          
          <div className='text-sm'><a href="#">Powered by Front</a></div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter