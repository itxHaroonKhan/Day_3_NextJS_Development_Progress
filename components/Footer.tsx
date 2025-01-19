import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <hr />
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            
            {/* Logo and Description */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-4">
              <div className="flex items-center mb-4">
                <Image
                  src="/Logo Icon.png"
                  alt="Logo"
                  width={40} 
                  height={40} 
                  className="ml-4 sm:ml-14"
                />
                <h2 className="title-font text-gray-900 tracking-widest font-bold text-sm ml-2 text-[20px]">
                  Comforty
                </h2>
              </div>
              <nav className="list-none mb-6">
                <ul>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Vivamus tristique odio sit amet velit semper...</a>
                  </li>
                </ul>
                <div className="flex gap-4 mt-4 justify-center sm:justify-start">
                  <FaFacebook className="text-xl" />
                  <FaTwitter className="text-xl" />
                  <IoLogoInstagram className="text-xl" />
                  <FaPinterest className="text-xl" />
                  <IoLogoYoutube className="text-xl" />
                </div>
              </nav>
            </div>
            
            {/* Categories Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-6">
                <ul>
                  <li><a className="text-gray-600 hover:text-gray-800">Category</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Sofa</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Armchair</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Wing Chair</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Desk Chair</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Wooden Chair</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Park Bench</a></li>
                </ul>
              </nav>
            </div>
            
            {/* Support Section */}
            <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Support
              </h2>
              <nav className="list-none mb-6">
                <ul>
                  <li><a className="text-gray-600 hover:text-gray-800">Help & Support</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Help</a></li>
                </ul>
              </nav>
            </div>
            
           {/* Newsletter Section */}
<div className="lg:w-1/5 md:w-1/2 w-full">
  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    Newsletter
  </h2>
  <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2">
    <div className="relative flex mb-2 sm:mb-0 max-w-full sm:max-w-[240px]">
      <input
        type="text"
        id="footer-field"
        placeholder="Your email"
        name="footer-field"
        className="flex-1 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
      Subscribe
    </button>
  </div>
  <p className="text-gray-500 text-sm mt-2 md:text-left text-[15px] w-[424px]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
  </p>
</div>

          </div>
        </div>
        <hr />
        
        {/* Footer Bottom */}
        <div className="bg-white h-[75px]">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              @ 2021 - Comforty - Designed & Developed by <span className="text-black font-semibold">Zakirsoft</span>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Image
                src="/Frame 69(1)(1).png" 
                alt="Logo or Image"
                width={227}
                height={27}
              />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
