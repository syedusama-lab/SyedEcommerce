import React from "react";

const Categories = () => {
  return (
    <div className="md:px-10 px-2 md:mb-[-100px] mb-[-120px]">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 border-b-2 pb-8 md:px-5 px-2">
      <div className="relative h-56 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img
          src="/assets/product_images/bev.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute top-20 left-12">
          <p className="text-xl font-bold text-white uppercase">Beverages</p>
          <p className="text-gray-100">View All</p>
        </div>
      </div>
      <div className="relative h-56 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img
          src="/assets/product_images/food.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute top-20 left-12">
          <p className="text-xl font-bold text-white uppercase">Food</p>
          <p className="text-gray-100">View All</p>
        </div>
      </div>
      <div className="relative h-56 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img
          src="/assets/product_images/snacks.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute top-20 left-12">
          <p className="text-xl font-bold text-white uppercase">Snacks</p>
          <p className="text-gray-100">View All</p>
        </div>
      </div>
    </div></div>
  );
};

export default Categories;
