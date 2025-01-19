"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

// Define the type for a cart item
interface CartItem {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data", error);
        setCart([]); // Reset if parsing fails
      }
    }
  }, []);

  // Remove product from cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price
  const totalPrice = cart.reduce((acc, item) => acc + Number(item.price), 0).toFixed(2);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Bag</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Products Section */}
          <div className="flex-1">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((product) => (
                <div
                  key={product._id} // Unique key based on product _id
                  className="border-b border-gray-300 py-6 flex flex-col lg:flex-row items-center gap-6"
                >
                  {/* Product Image */}
                  <div className="w-32 h-32">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={128}
                      height={128}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-xl text-black">{product.title}</h2>
                    <p className="text-gray-500">{product.description}</p>
                    <div className="text-gray-500 mt-2 flex gap-6">
                      <p><strong>Price:</strong> ${product.price}</p>
                      <div className="flex gap-4 mt-5">
                        <FaRegHeart className="text-gray-500" />
                        <RiDeleteBin6Line
                          onClick={() => removeFromCart(product._id)}
                          className="text-gray-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-black font-bold mb-6">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
            <button className="w-full bg-[#029FAE] text-white py-3 rounded-full font-semibold">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
