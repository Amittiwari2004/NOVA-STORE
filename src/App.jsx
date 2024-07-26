import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDisplay";
import Footer from "./components/Footer/Footer";
import LoginSignUpPage from "./pages/LoginSignUpPage";
import Loading from "./components/Loading/Loading";

import ShopContextProvider from "./context/ProductContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

function App() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
       <ShopContextProvider>
       {loading ? (
        <Loading /> // Display loading indicator while loading
      ) : (
        <div>
          <Navbar
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Category activeCategory={activeCategory} />} />
            <Route path="/search/:category" element={<Category activeCategory={activeCategory} />} />
            <Route path="/product" element={<ProductDetails/>}>
               <Route path=":id" element={<ProductDetails/>}></Route>
            </Route>
             <Route path="/cart" element={<Cart />}>
               <Route path=":productid" element={<Cart/>}></Route>
             </Route>
            <Route path="/login" element={<LoginSignUpPage />} />
          
            <Route path="*" element={<NotFound />} /> {/* Add a fallback route for unknown paths */}
          </Routes>
          <Footer />
          <ToastContainer /> {/* Add ToastContainer here */}
        </div>
      )}
       </ShopContextProvider>
     
    </Router>
  );
}

// Component to handle 404 page not found
function NotFound() {
  return <div>Page Not Found</div>;
}

export default App;
