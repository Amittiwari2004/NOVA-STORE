import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import product from "../../data/all_product.js";

const ProductList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { category } = useParams();
  const location = useLocation();

  const activeCategory = category || location.state?.activeCategory || "all";

  const filteredProducts =
    activeCategory === "all"
      ? product
      : product.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    if (category === "all") {
      window.history.replaceState(null, "", "/search");
    } else {
      window.history.replaceState(
        { activeCategory: category },
        "",
        `/search/${category}`
      );
    }
  };

  const uniqueCategories = Array.from(new Set(product.map((p) => p.category)));

  return (
    <div className="flex flex-col md:flex-row">
      {/* Side navigation */}
      <div className="w-full md:w-48 bg-gray-200 p-4">
        <h3 className="text-lg font-bold mb-2">Collections</h3>
        {/* Dropdown for mobile */}
        <div className="md:hidden">
          <button
            className="w-full text-left bg-white py-2 px-4 rounded-md shadow-md flex justify-between items-center"
            onClick={toggleDropdown}
          >
            <span>{activeCategory}</span>
            <svg
              className={`h-5 w-5 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="mt-2">
              <Link
                to="/search"
                className={`block py-2 px-4 rounded-md hover:bg-gray-300 ${
                  activeCategory === "all" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleCategoryClick("all")}
              >
                All
              </Link>
              {uniqueCategories.map((category) => (
                <Link
                  key={category}
                  to={`/search/${category.toLowerCase()}`}
                  className={`block py-2 px-4 rounded-md hover:bg-gray-300 ${
                    activeCategory === category.toLowerCase()
                      ? "bg-gray-300"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category.toLowerCase())}
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Regular navigation for desktop */}
        <div className="hidden md:block">
          <ul>
            <li
              className={`cursor-pointer py-1 ${
                activeCategory === "all" ? "font-bold" : ""
              }`}
              onClick={() => handleCategoryClick("all")}
            >
              <Link to="/search">All</Link>
            </li>
            {uniqueCategories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer py-1 ${
                  activeCategory === category.toLowerCase() ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryClick(category.toLowerCase())}
              >
                <Link to={`/search/${category.toLowerCase()}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product list */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-50">
                  <h4 className="text-xl font-semibold mb-1 text-white">
                    {product.name}
                  </h4>
                  <p className="text-lg text-white">
                    ${product.price} USD
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;