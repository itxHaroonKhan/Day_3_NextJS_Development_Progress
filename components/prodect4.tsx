"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { client } from "@/sanity/lib/client";

// Product type
type Product = {
  _id: string;
  title: string;
  price: string;
  priceWithoutDiscount: string;
  category: { _id: string; title: string } | null;
  tags: string[];
  badge: string | null;
  imageUrl: string;
  description: string;
  inventory: number;
};

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]); // Shopping cart
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const query = `*[_type == "products"][0...4] {
          _id,
          title,
          price,
          priceWithoutDiscount,
          category -> { _id, title },
          tags,
          badge,
          "imageUrl": image.asset->url,
          description,
          inventory
        }`;
        const result = await client.fetch(query);
        setProducts(result);
        setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
      } catch (error) {
        setError("Error fetching products");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    alert(`${product.title} added to cart!`);
  };

  return (
    <div  >
      {/* Product Listing Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {loading ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : products.length === 0 ? (
            <p className="text-center text-gray-500">No products available at the moment.</p>
          ) : (
            <div className="flex flex-wrap -m-4">
              {products.map((product) => (
                <div
                  key={`${product._id}-${product.category?._id ?? 'no-category'}-${product.title}`}
                  className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="relative block h-[337px] rounded overflow-hidden group cursor-pointer">
                    {product.imageUrl && (
                      <Image
                        alt={product.title}
                        className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                        src={product.imageUrl}
                        width={312}
                        height={312}
                      />
                    )}
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
                        {product.title}
                      </h2>
                      <p className="mt-1">${Number(product.price).toFixed(2)}</p>
                    </div>
                    <div
                      className="p-2 rounded-md shadow-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.title} to cart`}
                    >
                      <GrCart className="text-2xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Optionally display cart content */}
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
