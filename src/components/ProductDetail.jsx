import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) return <div>Loading...</div>;
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl h-auto md:h-[400px] flex flex-col md:flex-row">
      <div className="flex-shrink-0 md:w-1/2">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md mb-4 md:mb-0"
        />
      </div>
      <div className="md:w-1/2 md:pl-6 flex flex-col justify-center space-y-3">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">{product.title}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Category:</span> {product.category}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Price:</span> ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Manufacture Date:</span> {product.mgfDate}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Expiration Date:</span> {product.expDate}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Stock:</span> {product.stock} units
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Packs:</span> {product.packs} packs
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
