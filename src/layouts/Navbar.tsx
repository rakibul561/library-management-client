import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import img1 from "../../public/logo-1.jpg";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src={img1}
              alt="Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
            <div className="text-2xl font-bold text-blue-600">MyLibrary</div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
          <Link className="font-semibold" to='/add-books'> Add Books</Link>
          <Link  className="font-semibold" to='/all-books'> All Books</Link>
          <Link  className="font-semibold" to='/borrow-summary'> Borrow Summary</Link>
            
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Books
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
