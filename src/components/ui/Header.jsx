import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-3xl font-bold text-white">Lkay Media</div>
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white text-lg hover:underline transition duration-300">Home</a>
          <a href="#" className="text-white text-lg hover:underline transition duration-300">About</a>
          <a href="#" className="text-white text-lg hover:underline transition duration-300">Services</a>
          <a href="#" className="text-white text-lg hover:underline transition duration-300" onClick={scrollToContact}>Contact</a>
        </nav>
      </div>
      {/* Sidebar */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed left-0 top-0 w-64 bg-gray-900 text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#" className="text-lg hover:underline transition duration-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline transition duration-300">About</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline transition duration-300">Services</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline transition duration-300" onClick={scrollToContact}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;