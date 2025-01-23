import React from 'react';
import YouTubeIcon from '../assets/YouTubeIcon';
import FaceBookIcon from '../assets/FaceBookIcon';
import LinkedinIcon from '../assets/LinkedinIcon';
import InstagramIcon from '../assets/InstagramIcon';
import Logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <div className=" h-[18rem] flex flex-col text-white p-3 gap-2">
      <div className="flex items-center gap-2 ">
        <img
         src={Logo}
          alt=""
          className=" h-[4rem] w-[4rem]"
        />
        <span className="font-bold text-xl">LKay Media</span>
      </div>
      <div className="flex items-center gap-2  justify-between p-2">
        <div className="flex flex-col items-start text-[#7D7D7D] text-sm">
          <p>Beats to Buzz,</p>
          <p>Tracks to Trends</p>
        </div>
        <div className="flex flex-col items-start text-[#7D7D7D] text-sm mr-[3rem] gap-2">
          <p className="text-white">Follow us:</p>
          <div className="flex items-center justify-between w-[8rem]">
            <YouTubeIcon />
            <FaceBookIcon />
            <LinkedinIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className='p-2'>
      <hr className="border-t-2 border-[#7D7D7D] w-[100%]" />
      </div>
      
      <div className="flex items-center gap-2  justify-between p-2 text-[#7D7D7D] text-sm">
        <p>Copyright © 2024 Concertly. All Right Reserved</p>
        <div className="flex items-center justify-between w-[11rem]">
          <p>Security</p>
          <hr class="w-3 h-full border-l-2 border-[#7D7D7D] transform rotate-90" />

          <p>Privacy</p>
          <hr class="w-3 h-full border-l-2 border-[#7D7D7D] transform rotate-90" />
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
