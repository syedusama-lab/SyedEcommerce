import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../slices/ProductSlice";
import { addToCart } from "../slices/CartSlice";
import ProductDetail from "./ProductDetail";
import Modal from "../modal/Modal";

const Shop = ({ selectedCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Sample product data
  const products1 = [
    {
      id: 1,
      img: "/assets/product_images/prod1.jpg",
      title: "Barebells Chocolate",
      mgfDate: "2023-01-10",
      expDate: "2025-01-10",
      category: "Beverages",
      stock: 0,
      packs: 20,
      price: 10.99, // Added price
    },
    {
      id: 2,
      img: "/assets/product_images/prod2.jpg",
      title: "Monster Energy",
      mgfDate: "2023-03-15",
      expDate: "2024-09-15",
      category: "Beverages",
      stock: 80,
      packs: 12,
      price: 3.49, // Added price
    },
    {
      id: 3,
      img: "/assets/product_images/prod3.png",
      title: "Burger",
      mgfDate: "2023-05-01",
      expDate: "2023-11-01",
      category: "Food",
      stock: 0,
      packs: 30,
      price: 2.99, // Added price
    },
    {
      id: 4,
      img: "/assets/product_images/prod4.jpg",
      title: "Burts Smoked",
      mgfDate: "2023-02-20",
      expDate: "2025-02-20",
      category: "Snacks",
      stock: 50,
      packs: 10,
      price: 1.99, // Added price
    },
    {
      id: 5,
      img: "/assets/product_images/prod5.jpg",
      title: "Doritos Tangy",
      mgfDate: "2023-03-10",
      expDate: "2025-03-10",
      category: "Snacks",
      stock: 60,
      packs: 25,
      price: 4.49, // Added price
    },
    {
      id: 6,
      img: "/assets/product_images/prod6.jpg",
      title: "Pizza",
      mgfDate: "2023-01-01",
      expDate: "2025-01-01",
      category: "Food",
      stock: 150,
      packs: 15,
      price: 8.99, // Added price
    },
    {
      id: 7,
      img: "/assets/product_images/prod7.jpg",
      title: "Biryani",
      mgfDate: "2023-02-28",
      expDate: "2024-08-28",
      category: "Food",
      stock: 90,
      packs: 12,
      price: 3.99, // Added price
    },
    {
      id: 8,
      img: "/assets/product_images/prod8.jpg",
      title: "Lasagna",
      mgfDate: "2023-01-20",
      expDate: "2025-01-20",
      category: "Food",
      stock: 70,
      packs: 10,
      price: 6.99, // Added price
    },
    {
      id: 9,
      img: "/assets/product_images/prod9.jpg",
      title: "Dr Pepper",
      mgfDate: "2023-04-10",
      expDate: "2025-04-10",
      category: "Beverages",
      stock: 100,
      packs: 20,
      price: 9.99, // Added price
    },
    {
      id: 10,
      img: "/assets/product_images/prod10.jpg",
      title: "Forest Feast ",
      mgfDate: "2023-02-15",
      expDate: "2024-08-15",
      category: "Snacks",
      stock: 40,
      packs: 5,
      price: 5.49, // Added price
    },
    {
      id: 11,
      img: "/assets/product_images/prod11.jpg",
      title: "french fries",
      mgfDate: "2023-03-22",
      expDate: "2025-03-22",
      category: "Food",
      stock: 110,
      packs: 25,
      price: 7.99, // Added price
    },
    {
      id: 12,
      img: "/assets/product_images/prod12.jpeg",
      title: "Soup",
      mgfDate: "2023-02-10",
      expDate: "2025-02-10",
      category: "Food",
      stock: 80,
      packs: 15,
      price: 4.49, // Added price
    },
    {
      id: 13,
      img: "/assets/product_images/product13.jpg",
      title: "Coca-Cola Original",
      mgfDate: "2023-05-05",
      expDate: "2025-05-05",
      category: "Beverages",
      stock: 130,
      packs: 20,
      price: 2.99, // Added price
    },
    {
      id: 14,
      img: "/assets/product_images/prod14.jpg",
      title: "Cranberry Yoghurt",
      mgfDate: "2023-04-20",
      expDate: "2025-04-20",
      category: "Snacks",
      stock: 95,
      packs: 12,
      price: 3.49, // Added price
    },
    {
      id: 15,
      img: "/assets/product_images/product15.jpg",
      title: "Ballygowan Water",
      mgfDate: "2023-01-30",
      expDate: "2025-01-30",
      category: "Beverages",
      stock: 150,
      packs: 10,
      price: 1.89, // Added price
    },
  ];

  // UseEffect to dispatch products to Redux
  useEffect(() => {
    dispatch(addProducts(products1));
  }, [dispatch]);

  // Retrieve products from Redux store
  const products = useSelector((state) => state.product.products);
  const btn = useSelector((state) => state.login.cartBtn);

  // Handle adding products to the cart
  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    dispatch(addToCart(product));
    alert("Added successfully");
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null; // Only render if there's more than one page

    return (
      <div className="flex items-center justify-center mt-6">
        <button
          className="mx-2 px-4 py-2 border rounded bg-white text-blue-500"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        <p className="mx-4 text-lg">
          Page {currentPage} of {totalPages}
        </p>

        <button
          className="mx-2 px-4 py-2 border rounded bg-white text-blue-500"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="absolute mt-[110px]">
        <div className="relative p-6 w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Shop Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {currentItems.length > 0 ? (
              currentItems.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg overflow-hidden relative shadow-md p-4 flex flex-col items-center  transition transform hover:scale-105 duration-300 hover:cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-gray-500">{product.category}</p>
                  <p className={`text-lg font-bold mt-2 ${product.stock == 0 && "mb-12"}`}>
                    ${product.price.toFixed(2)}
                    <span className="font-semibold text-[16px] "> /pack</span>
                  </p>
                  {btn ? (
                    product.stock > 0 ? (
                      <button
                        onClick={(event) => handleAddToCart(event, product)}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="w-full h-16 absolute bottom-0 mt-4 bg-gray-300 text-black py-2 px-4 rounded font-bold text-[18px] flex items-center justify-center">
                        Out Of Stock
                      </div>
                    )
                  ) : null}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No products found in this category.
              </p>
            )}
          </div>

          {/* Pagination */}
          {renderPagination()}
        </div>
        <Footer />
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ProductDetail product={selectedProduct}/>
      </Modal>
    </>
  );
};

export default Shop;
