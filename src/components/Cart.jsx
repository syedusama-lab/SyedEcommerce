import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import Modal from "./Modal";

// import Address from "./Address";
import { useNavigate } from "react-router-dom";
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeFromCart,
// } from "../../public/store/CartSlice";
import Modal from "../modal/Modal";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../slices/CartSlice";
import Footer from "./Footer";

const Cart = ({user}) => {
  const [address, setAddress] = useState("Main Store of E-Shop");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const userAddress = useSelector((state) => state.login.loginCredentials);
  console.log("add ",userAddress)
  
  console.log(cart);
  return (
    <div className="w-full bg-[#dad5d5] h-auto absolute md:mt-[102px] mt-[115px]">
      <div className="py-8 m-0 min-h-96 pl-1 pr-2 md:px-6 lg:px-6">
        {cart.products.length > 0 ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
            <div className="flex flex-col md:flex-row justify-between md:space-x-3 mt-8">
              <div className="md:w-2/3 pl-1 pr-1 md:px-0">
                {cart.products.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-[#eeeaea] rounded-lg shadow-md p-4 mb-4 flex flex-col md:flex-row items-start md:items-center md:justify-between"
                  >
                    <div className="flex items-center space-x-4 md:w-2/5">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold">
                          {prod.title}
                        </h3>
                        <p className="text-sm text-gray-500">{prod.category}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-3/5">
                      <div className="flex items-center justify-between md:justify-start md:space-x-8 text-sm md:text-base w-full md:w-auto">
                        <p className="text-gray-700">Packs: {prod.packs}</p>
                        <p className="text-gray-700">
                          Price: ${prod.price.toFixed(0)}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center space-x-4 md:space-x-6 w-full md:w-auto">
                        <div className="flex items-center border border-slate-400 rounded">
                          <button
                            className="text-xl font-bold px-3 border-r border-slate-400"
                            onClick={() => dispatch(decreaseQuantity(prod.id))}
                          >
                            -
                          </button>
                          <p className="px-3">{prod.quantity}</p>
                          <button
                            className="text-xl font-bold px-3 border-l border-slate-400"
                            onClick={() => dispatch(increaseQuantity(prod.id))}
                          >
                            +
                          </button>
                        </div>
                        <p className="font-medium text-gray-800">
                          Total: ${(prod.price * prod.quantity).toFixed(0)}
                        </p>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => dispatch(removeFromCart(prod.id))}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:w-1/3 bg-[#eeeaea] mt-4 md:mt-0 p-6 rounded-lg shadow-md border">
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                <div className="flex justify-between mb-5 border-b border-slate-400 pb-1">
                  <span className="text-sm">
                    Total Item{cart.totalQuntity > 1 ? "'s" : ""}
                  </span>
                  <span>{cart.totalQuntity}</span>
                </div>
                <div className="mb-4 border-b border-slate-400 pb-2">
                  <p>Shipping:</p>
                  <p className="ml-2">Shipping to: {userAddress.map((item,index)=>{
                   return item.name === user ? <span className="text-blue-500 font-semibold" key={index}>{item.email}</span> : null 
                  })} </p>
                  {/* <span className="text-xs font-bold">{address}</span> */}
                  {/* <button
                    className="text-blue-500 hover:underline mt-1 ml-2"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Change Address
                  </button> */}
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total Price</span>
                  <span>${cart.totalPrice.toFixed(2)}</span>
                </div>
                <button
                  className="w-full bg-red-600 text-white py-2 hover:bg-red-800 rounded-lg"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
            {/* <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <Address setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
            </Modal> */}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="uppercase md:text-[19px] font-semibold text-center">
              Your Cart is Empty kindly go to Shop Section and place an order
              First
            </h1>
            <img
              src="/assets/images/cartempty.jpg"
              className="m-5 rounded-lg h-96 w-full"
              alt=""
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
