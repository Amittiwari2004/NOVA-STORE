
import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/arrow.svg"; // Import your arrow icon

const Breadcrumb = ({ links }) => {
  return (
    <nav className="text-lg font-medium" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && (
              <img src={arrowIcon} alt="Arrow" className="h-3 w-auto mx-2" />
            )}
            {link.to ? (
              <Link to={link.to} className=" hover:underline">
                {link.label}
              </Link>
            ) : (
              <span>{link.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

  