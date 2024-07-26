import React, { useState, useReducer, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  const { all_products, cart, addToCart, removeFromCart } = useContext(ProductContext);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const selectedProduct = (id) => {
    return all_products.find((product) => product.id === id);
  }

  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(false); // State for disabling checkout button

  const handleQuantityChange = (change, id, color, size) => {
    if (change) {
      addToCart({ productId: id, quantity: 1, color, size })
      forceUpdate()
    } else {
      removeFromCart(id)
      forceUpdate()
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = selectedProduct(item.productId);
      return total + product.price * item.quantity;
    }, 0).toFixed(2);
  };

  if (!cart.length) {
    return <div>No product available</div>;
  }

  return (
    <>
      {cart.map((el) => {
        return (
          <div>
            <div className="max-w-8xl mx-auto py-10 px-6">
              <div className="bg-black p-8 rounded-lg shadow-lg relative">
                <button
                  className="absolute top-2 right-2 text-white hover:text-red-500"
                  onClick={() => removeFromCart(el.productId)}
                >
                  <FaTimes />
                </button>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <img src={selectedProduct(el.productId).images[0].src} alt={selectedProduct(el.productId).images[0].alt} className="max-h-80 w-auto rounded-lg" />
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {selectedProduct(el.productId).name}
                    </h2>
                    <p>ID: {selectedProduct(el.productId).id}</p>
                    <p className="text-lg text-gray-300 mb-2">
                      Color: {el.color}
                    </p>
                    <p className="text-lg text-gray-300 mb-6">
                      Size: {el.size}
                    </p>
                    <p className="text-lg text-gray-300 mb-6">
                      ${selectedProduct(el.productId).price} USD
                    </p>
                    <p className="text-gray-300 mb-6">
                      {selectedProduct(el.productId).description}
                    </p>
                    <div className="flex items-center mb-6">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l disabled:bg-gray-500 disabled:cursor-not-allowed" onClick={() => handleQuantityChange(false, el.productId, el.color, el.size)} disabled={el.quantity === 1}>
                        -
                      </button>
                      <span className="text-white font-bold mx-4">
                        {el.quantity}
                      </span>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" onClick={() => handleQuantityChange(true, el.productId, el.color, el.size)}>
                        +
                      </button>
                    </div>
                    <p className="text-white font-bold mb-2">
                      Item Total: ${selectedProduct(el.productId).price * el.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="max-w-8xl mx-auto py-10 px-6">
        <div className="bg-black p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">Total</h2>
            <span className="text-3xl font-bold text-white">${getTotalPrice()}</span>
          </div>

          <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isCheckoutDisabled ? 'disabled:bg-gray-500 disabled:cursor-not-allowed' : ''}`} onClick={() => setIsCheckoutDisabled(true)} disabled={isCheckoutDisabled}>
            Checkout
          </button>
   
        </div>
      </div>
    </>
  );
};

export default Cart;