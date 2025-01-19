import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <hr />
      <section className=" w-full lg:w-screen  flex justify-center  ">
      
        <div className="max-w-[1321px] mx-auto px-4 lg:px-12 bg-[#F0F2F3] ">
        
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:py-16">
            <div className="mr-auto place-self-center lg:col-span-7">
              <p className='text-[14px]'>Welcome to chairy</p>
              <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none sm:text-4xl md:text-5xl lg:text-6xl dark:text-white mt-7">
                Best Furniture  <br />Collection for your <br /> interior.
              </h1>

              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-[#029FAE] text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-12"
              >
                Shop Now →
              </a>
            </div>

            <div className="hidden lg:block lg:col-span-5 mt-6 lg:mt-0">
              <Image
                src="/Product Image.png"
                alt="mockup"
                width={434}
                height={584}
                className="w-full h-auto"
              />
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden mt-6">
              <Image
                src="/Product Image.png"
                alt="mockup"
                width={300}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
