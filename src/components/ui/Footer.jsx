import React from 'react';
import profile from '../../assets/profile.jpg';

const Footer = () => {
  return (
    <div className="bg-black text-white py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto text-left px-4">
        <div className="flex justify-center md:justify-start">
          <img src={profile} alt="Profile" className="w-24 rounded-full" />
        </div>
        <div className="flex justify-center md:justify-start">
          <h3 className="text-lg font-semibold">About Us</h3>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Terms and Conditions</h3>
          <h3 className="text-lg font-semibold">Contact</h3>
          <h3 className="text-lg font-semibold">Privacy Policy</h3>
        </div>
        <div className="flex justify-center md:justify-start">
          <h3 className="text-lg font-semibold">
            <a href="#" className="no-underline text-white hover:underline">@lkaymedia</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;