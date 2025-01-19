import React from 'react';

const Banner = () => {
  return (
    <div className="text-white  mt-[1rem]  h-[25rem] flex flex-col items-center justify-center ">
      <span className="w-[44rem] text-[3.6rem] font-bold">
        {/* Make your beats{' '} */}
        <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
        Beats to Buzz,
        </span>
      </span>
      <span className=" w-[42rem] text-[3.5rem] font-bold ml-[1rem]">
        {' '}
        {/* with{' '} */}
        <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
        Tracks to Trends
        </span>{' '}
        {/* support */}
      </span>
      <span className="text-sm text-[#7D7D7D] w-[40rem] mt-[2rem]">
      We specialize in elevating your music and connecting it with the right audience
      </span>
      <span className="text-sm text-[#7D7D7D] w-[40rem] ml-[7rem] mt-[3px]">
      through our extensive network of influencers
      </span>
    </div>
  );
};

export default Banner;
