"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { client } from "@/sanity/lib/client";

// Product type for better TypeScript integration
type Product = {
  _id: string;
  title: string;
  price: string;
  priceWithoutDiscount: string;
  category: { _id: string; title: string };
  tags: string[];
  badge: string | null;
  imageUrl: string;
  description: string;
  inventory: number;
  coloredIcon: boolean;
  newLabel: boolean;
  salesLabel: boolean;
};

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]); // Shopping cart state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "products"] {
          _id,
          title,
          price,
          priceWithoutDiscount,
          category -> {
            _id,
            title
          },
          tags,
          badge,
          "imageUrl": image.asset->url,
          description,
          inventory,
          coloredIcon,
          newLabel,
          salesLabel
        }`;

        // Fetch products from Sanity
        const result = await client.fetch(query);
        setProducts(result);
        setLoading(false); // Turn off loading once data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
        setLoading(false); // Turn off loading in case of error
      }
    };

    fetchData();
  }, []);

  // Function to add a product to the shopping cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item._id === product._id)) {
        alert(`${product.title} is already in the cart!`);
        return prevCart;
      }
      alert(`${product.title} added to cart!`);
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart to localStorage
      return updatedCart;
    });
  };

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  return (
    <div>
      {/* Product Listing Section */}
      <section className="text-gray-600 body-font">
        <h1 className="text-[32px] font-bold text-black mb-10 text-center">
          Our Products
        </h1>
        <div className="container px-5 py-24 mx-auto">
          {loading ? (
            <div className="text-center text-gray-500">
              <div className="loader">Loading...</div>
              {/* You can replace 'loader' with a spinner or animated component */}
            </div>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="flex flex-wrap -m-4">
              {products.length === 0 ? (
                <p className="text-center text-gray-500">
                  No products available at the moment.
                </p>
              ) : (
                products.map((product) => (
                  <div
                    key={product._id}
                    className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                  >
                    <div className="relative block h-[337px] rounded overflow-hidden group cursor-pointer">
                      {/* Product Image */}
                      {product.imageUrl ? (
                        <Image
                          alt={product.title || "Product Image"}
                          className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                          src={product.imageUrl}
                          width={312}
                          height={312}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300" />
                      )}

                      {/* Badge (Sale, New, etc.) */}
                      {product.badge && (
                        <div
                          className={`absolute top-2 right-2 px-2 py-1 rounded text-white text-xs font-semibold ${
                            product.badge === "Sale"
                              ? "bg-red-500"
                              : product.badge === "New"
                              ? "bg-blue-500"
                              : "bg-green-500"
                          }`}
                        >
                          {product.badge}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {product.title || "Untitled Product"}
                        </h2>
                        <p className="mt-1">
                          ${Number(product.price).toFixed(2) || "N/A"}
                        </p>
                      </div>

                      {/* Add to Cart Button */}
                      <div
                        className={`p-2 rounded-md shadow-md cursor-pointer transition ${
                          product.coloredIcon
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-slate-300 hover:bg-blue-100"
                        }`}
                        onClick={() => addToCart(product)} // Add to cart
                      >
                        <GrCart className="text-2xl" />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Cart Display Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4">
        <h3 className="text-lg font-semibold">Shopping Cart</h3>
        <ul>
          {cart.length > 0 ? (
            cart.map((item) => (
              <li key={item._id} className="flex justify-between py-2">
                <span>{item.title}</span>
                <span>${Number(item.price).toFixed(2)}</span>
              </li>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
