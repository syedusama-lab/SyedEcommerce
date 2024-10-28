import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login";
import Modal from "../modal/Modal";
import { loginData } from "../data/LoginCredentials";
import { setLoginData, showCartBtn } from "../slices/LoginSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ user, setUser, setSelectedCategory, selectedCategory }) => {
  const countProductInCArt = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const response = await fetch(
          "https://6702b757bd7c8c1ccd3fa6f3.mockapi.io/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        dispatch(setLoginData(jsonData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getDataFromApi();
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isLogin) {
      dispatch(showCartBtn(true));
    } else {
      dispatch(showCartBtn(false));
    }
  }, [isLogin, dispatch]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser).name);
      setIsLogin(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLogin(false);
    setUser("");
    setSelectedCategory("All");
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="fixed z-[99] shadow-md bg-[#f1eded] flex flex-col w-full px-2 pb-1 pt-2">
        <nav className="w-full py-1 md:pl-8 md:pr-8 pt-2 flex items-center justify-between ">
          {/* Logo + Website Name */}
          <div className="flex items-center">
            <img
              src="/assets/product_images/logo.avif"
              alt="Logo"
              className="w-11 h-11 rounded-lg mr-1"
            />
            <span className="font-bold md:text-lg">TastyRush</span>
          </div>

          {/* Center Links (Hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            <Link to={"/"} className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to={"/shop"} className="text-gray-700 hover:text-blue-500">
              Shop
            </Link>
            <Link to={"/contact"} className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
            <Link to={"/about"} className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </div>

          {/* Search Field + Cart & Login (Hidden on small screens) */}
          <div className="flex items-center space-x-4">
            {/* Search Field */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-2 top-3 text-gray-400">
                <FaSearch />
              </span>
            </div>

            {/* Cart & Login */}
            {isLogin ? (
              <div className="relative">
                <Link
                  to={"/cart"}
                  className="text-gray-700 hover:text-blue-500"
                >
                  <FaShoppingCart />
                </Link>
                {countProductInCArt.length > 0 ? (
                  <div className="absolute top-[-15px] left-3 w-auto p-1 flex items-center justify-center h-6 rounded-full bg-red-500">
                    <p>{countProductInCArt.length}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <></>
            )}

            {isLogin ? (
              <></>
            ) : (
              <FaUser
                className="hover:cursor-pointer hover:text-blue-500"
                onClick={() => setIsModalOpen(true)}
              />
            )}

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to={"/shop"}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500"
              >
                Shop
              </Link>
              <Link
                to={"/contact"}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500"
              >
                Contact
              </Link>
              <Link
                to={"/contact"}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-500"
              >
                About
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-3 pr-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-2 top-2 text-gray-400">
                  <FaSearch />
                </span>
              </div>
            </div>
          )}
        </nav>
        {isLogin ? (
          <div className="w-full flex  justify-between px-2 md:px-10 pb-1">
            <p>
              User Name:{" "}
              <span className="font-semibold text-blue-600">{user}</span>
            </p>
            <p
              className="hover:cursor-pointer hover:underline hover:text-blue-500 uppercase"
              onClick={handleLogout}
            >
              logout
            </p>
          </div>
        ) : (
          <>
            <div className="w-full h-7 overflow-hidden relative">
              <div
                className="flex absolute whitespace-nowrap"
                style={{
                  animation: "marquee 60s linear infinite",
                }}
              >
                <span className="mr-10">
                  You can buy products only when you are logged in. Please go to
                  the login form, and if you don't have an account, you can use
                  the dummy credentials available by clicking on the "Don't have
                  an account?" button.
                </span>
                <span>
                  You can buy products only when you are logged in. Please go to
                  the login form, and if you don't have an account, you can use
                  the dummy credentials available by clicking on the "Don't have
                  an account?" button.
                </span>
              </div>
            </div>

            <style jsx>
              {`
                @keyframes marquee {
                  0% {
                    transform: translateX(10%);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
              `}
            </style>
          </>
        )}

        <div className="w-full flex justify-center md:space-x-10 space-x-5">
          <h3
            className={`text-gray-700 hover:text-blue-500 hover:cursor-pointer ${
              // Highlight active category
              selectedCategory === "All" ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </h3>
          <h3
            className={`text-gray-700 hover:text-blue-500 hover:cursor-pointer ${
              selectedCategory === "Beverages"
                ? "text-blue-500 font-semibold"
                : ""
            }`}
            onClick={() => handleCategoryClick("Beverages")}
          >
            Beverages
          </h3>
          <h3
            className={`text-gray-700 hover:text-blue-500 hover:cursor-pointer ${
              selectedCategory === "Food" ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => handleCategoryClick("Food")}
          >
            Food
          </h3>
          <h3
            className={`text-gray-700 hover:text-blue-500 hover:cursor-pointer ${
              selectedCategory === "Snacks" ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => handleCategoryClick("Snacks")}
          >
            Snacks
          </h3>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Login
          setIsLogin={setIsLogin}
          setUser={setUser}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};

export default Navbar;
