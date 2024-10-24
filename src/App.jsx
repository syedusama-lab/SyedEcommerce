import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import Aboutus from "./components/Aboutus";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser).name);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer />
        <Navbar
          user={user}
          setUser={setUser}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <Routes>
          <Route
            path="/"
            element={<Home selectedCategory={selectedCategory} />}
          ></Route>
          <Route
            path="/shop"
            element={<Shop selectedCategory={selectedCategory} />}
          ></Route>
          <Route path="/cart" element={<Cart user={user} />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
