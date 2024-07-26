import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"
const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:ml-10 space-x-6">
            {/* Logo */}
            <a href="#" className="flex items-center mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-8 mr-2 "
              />
              <span className="text-white font-bold text-xl">N.O.V.A</span>
            </a>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Links</h3>
            <ul className="text-gray-400">
             <Link to="/">
             <li className="mb-2 hover:text-gray-300 transition-colors duration-300">
                <a href="#">Home</a>
              </li>
             </Link>
              <li className="mb-2 hover:text-gray-300 transition-colors duration-300">
                <a href="#">About</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition-colors duration-300">
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition-colors duration-300">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition-colors duration-300">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <p className="text-gray-400 mb-2">© 2023-2024 N.O.V.A, Inc. All rights reserved.</p>
            <p className="text-gray-400 mb-2">Designed in India</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/codewithamittiwari"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;