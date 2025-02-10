"use client";
import React, { useState } from "react";
import Link from "next/link";
import Products from "../Data copy/page";

const ProductsPage = () => {
  const [filteredData, setFilteredData] = useState(Products);

  const handleSearch = (query: string) => {
    const filteredResults = Products.filter((item: { name: string; }) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className="bg-[#CFE8E8] min-h-screen flex flex-col items-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {filteredData.map((item: { id: React.Key | null | undefined; image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-center w-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-64 h-64 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-[#300048] mt-4">
              {item.name}
            </h3>
            <div className="mt-4 text-center">
              <span className="text-lg font-bold text-[#300048]">
                {item.price} KES
              </span>
            </div>
            <div className="flex justify-between mt-6">
              <Link href={`/products/${item.id}`}>
                <button className="text-[#005f69] border border-[#005f69] rounded-full px-4 py-2">
                  Learn More
                </button>
              </Link>
              <Link href="/cart">
                <button className="bg-[#005f69] text-white rounded-full px-4 py-2">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

