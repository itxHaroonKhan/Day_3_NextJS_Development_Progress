import React from "react";
import Image from "next/image";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Link from "next/link";

const ITA = () => {
  const products = [
    {
      id: 1,
      image: "/img 4/1.png",
      title: "Library Stool Chair",
      price: "$99",
    },
    {
      id: 2,
      image: "/img 4/2.png",
      title: "Library Stool Chair",
      price: "$99",
    },
    {
      id: 3,
      image: "/img 4/3.png",
      title: "Library Stool Chair",
      price: "$99",
    },
    {
      id: 4,
      image: "/img 4/4.png",
      title: "Library Stool Chair",
      price: "$99",
    },
    {
      id: 5,
      image: "/img 4/5.png",
      title: "Library Stool Chair",
      price: "$99",
    },
  ];

  return (
    <div>
      {/* Top Section */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center">
            {/* Image */}
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <Image
                alt="ecommerce"
                className="w-full h-[350px] lg:h-auto object-cover object-center rounded"
                src="/Itam/Image (1).png"
                width={675}
                height={607}
              />
            </div>
            {/* Text/Details Section */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:pb-28">
              <h2 className="text-[60px] font-bold text-black">
                Library Stool <br /> Chair
              </h2>
              <div className="flex items-center mb-8 mt-5">
                <button className="text-2xl font-medium rounded-full bg-[#029FAE] py-3 px-6 text-white">
                  $20.00 USD
                </button>
              </div>
              <div className="w-[521px] h-2 ">
                <hr />
              </div>
              <p className="leading-relaxed text-gray-700 text-[22px] font-normal mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Nullam tincidunt erat enim. Lorem ipsum dolor <br /> sit amet,
                consectetur adipiscing
              </p>
              <button className="px-4 sm:w-52 h-16 flex items-center bg-[#029FAE] gap-3 hover:bg-gray-200 rounded-lg shadow text-white mt-9">
                <Link href="/1" className="flex items-center gap-2 hover:text-gray-900">
                  <PiShoppingCartSimpleBold className="text-2xl sm:text-xl size-8" />
                  <span className="font-semibold"> Add To Cart</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <h2 className="text-[28px] font-bold flex justify-between items-center text-black">
            Featured Products
            <span className="underline">View all</span>
          </h2>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/5"
              >
                <div className="relative block h-[337px] rounded overflow-hidden group">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full"
                    src={product.image}
                    width={312}
                    height={312}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1 font-bold text-black">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default ITA;
