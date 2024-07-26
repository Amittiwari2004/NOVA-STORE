import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import product from "../data/all_product.js";
import Breadcrumb from "../components/Breadcum/Breadcum.jsx";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cart } = useContext(ProductContext);

  const productId = parseInt(id);
  const selectedProduct = product.find((p) => p.id === productId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  console.log("cart>>", cart);

  const breadcrumbLinks = [
    { to: "/", label: "Home" },
    { to: "/search", label: "Search" },
    {
      to: `/product/${id}`,
      label: selectedProduct ? selectedProduct.name : "Product",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => prevQuantity + change);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      return;
    }

    addToCart({ productId: selectedProduct.id, quantity, color: selectedColor, size: selectedSize });
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="max-w-8xl mx-auto py-10 px-4"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Breadcrumb links={breadcrumbLinks} />
      <motion.div className="bg-black p-6 rounded-lg shadow-lg md:p-8" variants={slideIn}>
        <div className="flex flex-col md:flex-row">
          <motion.div className="mb-4 md:mb-0 md:w-1/2" variants={fadeIn}>
            <motion.img
              src={selectedProduct.images[selectedImageIndex].src}
              alt={selectedProduct.images[selectedImageIndex].alt}
              className="w-full h-auto rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div className="flex justify-center mt-4">
              {selectedProduct.images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-12 h-12 rounded-full mx-1 cursor-pointer border-2 md:w-16 md:h-16 ${
                    index === selectedImageIndex
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => handleImageClick(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="md:w-1/2 md:pl-8" variants={slideIn}>
            <motion.h2 
              className="text-2xl font-bold text-white mb-4 md:text-3xl"
              variants={fadeIn}
            >
              {selectedProduct.name}
            </motion.h2>
            <motion.p 
              className="text-base text-gray-300 mb-6 md:text-lg"
              variants={fadeIn}
            >
              ${selectedProduct.price} USD
            </motion.p>
            <motion.div className="mb-4" variants={fadeIn}>
              <span className="text-white font-bold mr-2">Color:</span>
              <div className="flex flex-wrap -mx-1">
                {selectedProduct.colors.map((color) => (
                  <motion.span
                    key={color}
                    className={`text-gray-300 mx-1 px-2 py-1 rounded-full cursor-pointer mb-2 ${
                      color === selectedColor
                        ? "bg-blue-500 text-white"
                        : `bg-[${color}]`
                    }`}
                    onClick={() => handleColorChange(color)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {color}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div className="mb-6" variants={fadeIn}>
              <span className="text-white font-bold mr-2">Size:</span>
              <div className="flex flex-wrap -mx-1">
                {selectedProduct.sizes.map((size) => (
                  <motion.span
                    key={size}
                    className={`text-gray-300 mx-1 px-2 py-1 rounded-full cursor-pointer mb-2 ${
                      size === selectedSize ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handleSizeChange(size)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {size}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6"
              variants={fadeIn}
            >
              {selectedProduct.description}
            </motion.p>
            <motion.div 
              className="flex items-center mb-6"
              variants={fadeIn}
            >
              <motion.button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l disabled:bg-gray-500 disabled:cursor-not-allowed"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity === 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                -
              </motion.button>
              <span className="text-white font-bold mx-4">{quantity}</span>
              <motion.button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                onClick={() => handleQuantityChange(1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                +
              </motion.button>
            </motion.div>
            <motion.button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full disabled:bg-gray-500 disabled:cursor-not-allowed"
              onClick={handleAddToCart}
              disabled={!selectedColor || !selectedSize}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeIn}
            >
              Add To Cart ({quantity})
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetails;