import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import product from "../data/all_product";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="bg-zinc-900 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto p-4 bg-zinc-900">
        {/* Main Content */}
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-zinc-900" variants={containerVariants}>
          {/* Large Container */}
          <motion.div className="md:col-span-3 p-4 bg-black rounded-lg" variants={itemVariants}>
            <div className="flex flex-col md:flex-row items-center">
              {/* Product Image */}
              <motion.div 
                className="md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={product[18].images[0].src}
                  alt="Product Image"
                  className="mx-auto max-w-full"
                />
              </motion.div>
              {/* Product Details */}
              <motion.div className="md:w-1/2 md:ml-8" variants={itemVariants}>
                <h2 className="text-white text-2xl font-bold mb-4">
                  {product[17].name}
                </h2>
                <p className="text-gray-400 mb-6">{product[18].description}</p>
                <div className="flex items-center">
                  <Link to={`/product/${product[18].id}`}>
                    <motion.button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Buy Now
                    </motion.button>
                  </Link>
                  <motion.span 
                    className="text-white ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >{`$ ${product[18].price} USD`}</motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Small Container */}
          <motion.div className="md:col-span-1 p-4 bg-black rounded-lg" variants={itemVariants}>
            {/* Product Image */}
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={product[3].images[0].src}
                alt="Product Image"
                className="mx-auto max-w-full"
              />
            </motion.div>
            {/* Product Details */}
            <motion.div className="md:w-full flex flex-col items-center" variants={itemVariants}>
              <h3 className="text-white text-2xl font-bold mb-2 text-center ml-9">
                {product[3].name}
              </h3>
              <p className="text-gray-400 mb-4 text-center mr-10">
                {product[3].description}
              </p>
              <div className="flex items-center justify-center mb-4">
                <Link to={`/product/${product[3].id}`}>
                  <motion.button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Buy Now
                  </motion.button>
                </Link>
                <motion.span 
                  className="text-white ml-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >{`$ ${product[3].price} USD`}</motion.span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Our Products Section */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-white text-3xl font-bold mb-4">Our Products</h2>
          <ProductGrid />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;