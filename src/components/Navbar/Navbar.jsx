import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import storeLogo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { logout } from "../../firebase";
import { toast } from "react-toastify";

const Navbar = ({ setActiveCategory, activeCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleLogout=()=>{
    logout();
    toast.success('Logged out successfully!');
  }

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center space-x-6">
                <img src={storeLogo} alt="Store Logo" className="h-8 w-auto mr-2" />
                <span className="text-white font-bold text-xl">N.O.V.A</span>
              </div>
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/search"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeCategory === "all" ? "bg-gray-700 text-white" : ""}`}
                  onClick={() => handleCategoryClick("all")}
                >
                  All
                </Link>
                <Link
                  to="/search/shirt"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeCategory === "shirt" ? "bg-gray-700 text-white" : ""}`}
                  onClick={() => handleCategoryClick("shirt")}
                >
                  Shirts
                </Link>
                <Link
                  to="/search/stickers"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeCategory === "stickers" ? "bg-gray-700 text-white" : ""}`}
                  onClick={() => handleCategoryClick("stickers")}
                >
                  Stickers
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:ml-6 items-center">
            <div className="relative items-center md:block hidden">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </span>
              <input
                type="text"
                className="bg-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 p-2.5"
                placeholder="Search for products..."
              />
            </div>
            <Link to="/cart">
              <button
                className="ml-4 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-white"
                aria-label="Cart"
              >
                <FaShoppingCart className="h-6 w-6" />
              </button>
            </Link>
            <div className="relative">
             <Link to="/login">
             
             <button
                onClick={toggleProfileDropdown}
                className="ml-4 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-white"
                aria-label="Account"
              >
                <VscAccount className="h-6 w-6" />
              </button>

             </Link>
             {profileDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  style={{ top: '100%' }}
                >
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
           
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/search">
            <a
              href="#"
              className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeCategory === "all" ? "bg-gray-700 text-white" : ""}`}
              onClick={() => handleCategoryClick("all")}
            >
              All
            </a>
          </Link>
          <Link to="/search/shirt">
            <a
              href="#"
              className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeCategory === "shirt" ? "bg-gray-700 text-white" : ""}`}
              onClick={() => handleCategoryClick("shirt")}
            >
              Shirts
            </a>
          </Link>
          <Link to="/search/stickers">
            <a
              href="#"
              className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${activeCategory === "stickers" ? "bg-gray-700 text-white" : ""}`}
              onClick={() => handleCategoryClick("stickers")}
            >
              Stickers
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
