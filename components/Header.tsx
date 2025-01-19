"use client"
import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { CgArrowBottomLeft } from "react-icons/cg";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  // Cart count state
  const [cartCount, setCartCount] = useState(0);

  // Function to increase cart count
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      {/* Top bar */}
      <section className="flex items-center justify-between w-full bg-[#272343] px-4 py-2">
        <div className="flex items-center">
          <CgArrowBottomLeft className="text-slate-500 text-xl" />
          <p className="text-gray-500 ml-2">Free shipping on all orders over $50</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <select
            id="language-selector"
            className="bg-[#272343] text-white border-none py-1 px-2 rounded"
          >
            <option value="english">Eng</option>
            <option value="urdu">Urdu</option>
          </select>

          <div className="flex items-center space-x-2">
            <p className="text-white">Faqs</p>
            <BiErrorCircle className="text-white text-2xl" />
            <p className="text-white">Need Help</p>
          </div>
        </div>
      </section>

      {/* Middle bar with logo */}
      <section className="flex items-center justify-between w-full px-4 py-2 h-[84px] bg-[#F0F2F3]">
        <div className="flex items-center">
          <Image
            src="/Logo Icon.png"
            alt="Logo"
            className="ml-4 sm:ml-14"
            width={40}
            height={40}
          />
          <h2 className="text-[20px] sm:text-[26px] font-medium ml-2">Comforty</h2>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="px-4 sm:px-6 py-3 flex items-center bg-white gap-3 hover:bg-gray-200 rounded-lg shadow"
            onClick={addToCart} // Add product to cart
          >
            <PiShoppingCartSimpleBold className="text-2xl sm:text-xl text-gray-700" />
            <Link
              href="/shop"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              Cart
              <span className="bg-[#007580] text-white rounded-full w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center text-sm font-semibold">
                {cartCount} {/* Display current cart count */}
              </span>
            </Link>
          </button>
        </div>
      </section>

      {/* Navigation Bar */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link href="/shop" className="mr-5 hover:text-gray-900">Shop</Link>
            <Link href="/project" className="mr-5 hover:text-gray-900">Products</Link>
            <Link href="/page6" className="mr-5 hover:text-gray-900">Pages</Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
          </nav>
          <p className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
            Contact: <span className="ml-3 text-black">(808) 555-0111</span>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
