import React from 'react';

const Banner = () => {
  return (
    <div className="text-white  mt-[1rem]  h-[25rem] flex flex-col items-center justify-center ">
      <span className="w-[44rem] text-[3.6rem] font-bold">
        Make your beats{' '}
        <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
          go viral
        </span>
      </span>
      <span className=" w-[42rem] text-[3.5rem] font-bold ml-[1rem]">
        {' '}
        with{' '}
        <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
          influencer
        </span>{' '}
        support
      </span>
      <span className="text-sm text-[#7D7D7D] w-[40rem] mt-[2rem]">
        We connect your music with trending influencers to create engaging reels
        that reach millions.
      </span>
      <span className="text-sm text-[#7D7D7D] w-[40rem] ml-[7rem] mt-[3px]">
        Watch your tracks go viral and capture the attention of a global
        audience.
      </span>
    </div>
  );
};

export default Banner;
