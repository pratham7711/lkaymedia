import Logo from '../../assets/logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[5rem] flex items-center justify-between text-white px-6 sm:p-6 sm:px-12">
      {/* Logo Section */}
      <a href="/home" className="flex items-center">
        <img className="h-[4rem] w-auto" src={Logo} alt="Logo" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-[#d4d4d4] text-[1.2rem]">
        {['Home', 'About', 'Results', 'Contact Us'].map((item) => (
          <span key={item} className="hover:text-white cursor-pointer">
            {item}
          </span>
        ))}
      </div>

      {/* Join Us Button */}
      <button className="hidden md:flex w-[6rem] h-[2.5rem] font-bold bg-gradient-to-r from-[#74D4ED] via-[#A7A8FF] to-[#DAB4FF] flex items-center justify-center text-center transform transition-transform duration-300 hover:scale-105">
        Join Us
      </button>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 w-[16rem] h-full bg-black text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50 p-5`}>
        <button className="text-xl mb-6" onClick={() => setIsOpen(false)}>
          ✕
        </button>
        <div className="flex flex-col gap-4 text-lg">
          {['Home', 'About', 'Results', 'Contact Us'].map((item) => (
            <span key={item} className="cursor-pointer hover:text-gray-400">
              {item}
            </span>
          ))}
          <button className="mt-4 w-full h-[2.5rem] font-bold flex items-center justify-center text-center bg-gradient-to-r from-[#74D4ED] via-[#A7A8FF] to-[#DAB4FF] transform transition-transform duration-300 hover:scale-105">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
