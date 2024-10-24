import React from "react";
import Categories from "./Categories";
import Shop from "./Shop";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import Toast from "../common/Toast";

const Home = ({ selectedCategory }) => {
  const handleToast = () => {
    return <Toast />;
  };
  return (
    <>
      <div className="absolute md:mt-[85px] mt-[135px]">
        <div>
          <div className=" flex border-b-2 flex-col md:flex-row items-center justify-between pl-2 py-6 md:py-12 mx-4 md:mx-10 mb-8">
            <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
              <p className="text-gray-600">
                Discover the best products for your needs. We offer a wide range
                of high-quality items that meet your expectations. Shop with us
                today and experience the difference.
              </p>
            </div>
            {/* <button onClick={handleToast}>TOASSTTT</button> */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/assets/product_images/home.jpg"
                alt="Store Image"
                className="w-full md:w-3/4 rounded-lg shadow-md"
              />
            </div>
          </div>
          <Categories />
          <Shop selectedCategory={selectedCategory} />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
