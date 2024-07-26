// ShopContextProvider.jsx
import React, { createContext } from "react";
import all_products from "../data/all_product";

export const ProductContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = {
    all_products,
    cart: [],
    addToCart: function (item) {
      let isExists = false;
      console.log("----->", contextValue.cart);
      contextValue.cart = contextValue?.cart?.map((el) => {
        if (el.productId === item.productId) {
          console.log( el.quantity);
          el.quantity = el.quantity + item.quantity;
          isExists = true;
        }
        return el;
      });
      console.log("----->", isExists);
      if (!contextValue.cart.length) {
        contextValue.cart = [item];
        return;
      }
      if (!isExists) contextValue.cart.push(item);
    },
    removeFromCart: function (productId) {
      console.log(productId, "<<<", contextValue.cart);
      contextValue.cart = contextValue.cart.filter((el) => {
        if (el.productId === productId) {
          if (el.quantity === 1) {
            // If the quantity is 1, remove the product from the cart
            return false;
          } else {
            // If the quantity is greater than 1, decrement the quantity
            el.quantity = el.quantity - 1;
            return true;
          }
        }
        return true; // Keep the product in the cart if it's not the one being removed
      });
    },
  };

  console.log("Context Value:", contextValue); // Log the context value to check if it's correct

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ShopContextProvider;