import Image from 'next/image';
import React from 'react';
import { GoCreditCard } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <div>
      <section className="text-gray-600">
        <div className="px-5 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Text Section */}
            <div className="w-full lg:w-[672px] p-20 bg-[#007580] rounded-lg">
              <h1 className="text-white text-3xl mb-4 font-bold">
                About Us - Comforty
              </h1>
              <p className="text-white">
                At Comforty, we believe that the right chair can transform <br />
                your space and elevate your comfort. Specializing in <br />
                ergonomic design, premium materials, and modern aesthetics,
                we craft chairs that seamlessly blend style <br />
                with functionality.
              </p>
              <button className="ml-auto text-white bg-[#F9F9F926] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-6 lg:mt-28">
                View collection
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[672px] h-auto">
              <Image
                alt="ecommerce"
                className="w-full h-auto object-cover object-center rounded-lg"
                src="/Image Block.png"
                width={619}
                height={478}
              />
            </div>
          </div>
        </div>
      </section>










      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <h1 className='text-center font-bold text-2xl text-black pb-5'>What makes our Brand Different</h1>
    <div className="flex flex-wrap justify-between">

      <div className="p-4 w-[310px] h-[244px] text-[#007580]">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative">
         <Image src="/Delivery.png" alt="i can" width={24} height={24} />
          <h1 className="title-font sm:text-xl text-xl font-medium ">
          Next day as standard
          </h1>
          <p>Order before 3pm and get your order the next day as standard</p>
        </div>
      </div>

      <div className="p-4 w-[310px] h-[244px] text-[#007580]">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-12 pb-24 rounded-lg overflow-hidden  relative">
        <FaRegCheckCircle className='size-5 mb-2 '/>
          <h1 className="title-font sm:text-xl text-xl font-medium mb-3 ">
          Made by true artisans
          </h1>
          <p>Handmade crafted goods made with real passion and craftmanship</p>
        </div>
      </div>

      <div className="p-4 w-[310px] h-[244px] text-[#007580]">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-12 pb-24 rounded-lg overflow-hidden  relative">
        <GoCreditCard className='size-5 mb-2'/>
          <h1 className="title-font sm:text-xl text-xl font-medium  mb-3">
          Unbeatable prices

          </h1>
          <p className='text-[16px]'>For our materials and <br /> quality you won’t find better <br />
             prices anywhere</p>
        </div>
      </div>

      <div className="p-4 w-[310px] h-[244px] text-[#007580]">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-12 pb-24 rounded-lg overflow-hidden  relative">
       <SiMongodb className='size-7 mb-2'/>
          <h1 className="title-font sm:text-xl text-xl font-medium mb-3">
          Recycled packaging
          </h1>

             <p>We use 100% recycled to ensure our footprint is more manageable</p>

        </div>
      </div>
    </div>
  </div>
</section>










<section className="text-gray-600 body-font pb-16">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900   ">
      Our Popular Products
      </h1>

    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block transform transition-all duration-300 hover:scale-105"
            src="/Large.png"
          />
          <div className="mt-4">
            <h2 className="text-xl  text-gray-900">The Poplar suede sofa</h2>
            <p className="text-xl  mt-2">$99.00</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block transform transition-all duration-300 hover:scale-105"
            src="/Photo.png"
          />
         <div className="mt-4">
            <h2 className="text-xl  text-gray-900">The Dandy chair</h2>
            <p className="text-xl  mt-2">$99.00</p>
          </div>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block transform transition-all duration-300 hover:scale-105"
            src="/Parent.png"
          />
          <div className="mt-4">
            <h2 className="text-xl  text-gray-900">The Dandy chair</h2>
            <p className="text-xl  mt-2">$99.00</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default About;
