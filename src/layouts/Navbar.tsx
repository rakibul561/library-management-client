import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import img1 from "../../public/logo-1.jpg";
import { Link, NavLink } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 


    const navLinkStyle =
        "transition font-medium capitalize px-2 py-1 ";
    const activeStyle =
        " border-b-2 border-[#155DFC]";


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky  top-0 z-50">
      <div className=" px-4 sm:px-6  lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={img1}
              alt="Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              BookNest
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 text-black dark:text-white">
               <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                    }
                >
                    Home
                </NavLink>
               <NavLink
                    to="/add-books"
                    className={({ isActive }) =>
                        isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                    }
                >
                    Add Books
                </NavLink>       
               <NavLink
                    to="/borrow-summary"
                    className={({ isActive }) =>
                        isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                    }
                >
                    Borrow Summary
                </NavLink>       
            {/* Mode Toggle with padding & bg */}
            <div className="ml-4">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6 text-black dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2 text-black dark:text-white">
         
          <div className="pt-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
