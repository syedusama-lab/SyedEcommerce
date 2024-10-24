import React, { useEffect, useState } from "react";
import { loginData } from "../data/LoginCredentials";
import { useDispatch, useSelector } from "react-redux";
import { setLoginData } from "../slices/LoginSlice";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Login = ({ setIsLogin, setUser, setIsModalOpen }) => {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");

  const getLoginCradentials = useSelector(
    (state) => state.login.loginCredentials
  );

  const handleLogin = (e) => {
    e.preventDefault();

    const user = getLoginCradentials.find(
      (user) =>
        (user.email === email && user.password === zip) ||
        (email === "test@mail.com" && zip === "test")
    );
    if (user) {
      if (email === "test@mail.com") {
        console.log("i am in");
        setUser("Test User");
      } else setUser(user.name);

      setIsLogin(true);
      localStorage.setItem("user", JSON.stringify(user));
      setEmail("");
      setZip("");
      setIsModalOpen(false);
    } else {
      setError("Invalid email or password");
    }
  };
  const [userAcc, setUserAcc] = useState(false);
  return (
    <>
      {userAcc ? (
        <div className="relative flex flex-col md:gap-6 gap-4 text-center font-semibold">
          <FaRegArrowAltCircleLeft
            onClick={() => {
              setUserAcc(false);
            }}
            className="absolute top-2 left-4 hover:cursor-pointer text-[20px] hover:text-blue-500"
          />
          <h1 className="underline font-bold text-[20px]">NOTE</h1>
          <h1>
            Only registered users can log in and place orders. If you don't have
            an account, please contact the company to register. After completing
            the registration, the company will provide you with the necessary
            credentials to log in and order products.
          </h1>
          <div>
            <h2>For Testing Purpose</h2>
            <p>
              Email:{" "}
              <span className="font-medium text-red-500">test@mail.com</span>{" "}
              Password: <span className="font-medium text-red-500">test</span>
            </p>
          </div>
          <h2>Thanks.</h2>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="" className="block text-gray-700">
                Email:{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full px-3 py-2 border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block text-gray-700">
                Password:{" "}
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-3 py-2 border"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label htmlFor="" className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remeber Me</span>
              </label>
              <a href="" className="text-red-800">
                Forget Password
              </a>
            </div>
            <div className="mb-4">
              <button className="w-full bg-red-600 text-white py-2">
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <span className="text-gray-700">Dont Have an Account? </span>
            <span
              onClick={() => {
                setUserAcc(true);
              }}
              className="text-red-500 hover:cursor-pointer hover:text-red-800"
            >
              Click Here
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
