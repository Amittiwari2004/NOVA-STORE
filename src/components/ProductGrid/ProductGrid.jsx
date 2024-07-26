import React from 'react';
import { motion } from 'framer-motion';
import products from '../../data/product';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="bg-black p-4 overflow-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="flex flex-col items-center bg-zinc-900 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div 
              className="flex flex-col items-center mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-bold">{product.name}</h3>
              <p className="text-gray-400 text-sm">{product.description}</p>
              <div className="flex justify-around gap-5 text-center">
                <motion.p 
                  className="text-white mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ${product.price.toFixed(2)} USD
                </motion.p>
                <Link to={`/product/${product.id}`}>
                  <motion.button 
                    className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    BUY NOW
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGrid;