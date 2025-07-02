import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaHashtag } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6  flex flex-col sm:flex-row justify-between items-center gap-3">
      <div className="flex items-center gap-2 text-sm">
        <FaHashtag className="text-2xl text-gray-300" />
        <span>Copyright © 2025 - All rights reserved</span>
      </div>

      <div className="flex gap-4 text-xl text-gray-300">
        <a href="#" className="hover:text-white transition-colors duration-200">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-white transition-colors duration-200">
          <FaYoutube />
        </a>
        <a href="#" className="hover:text-white transition-colors duration-200">
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
