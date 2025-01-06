import React from 'react';

const ClientBanner = () => {
  return (
    <div className="text-white mt-[1rem]  h-[25rem] flex flex-col items-center justify-center ">
      <span className="w-auto text-[3.6rem] font-bold ">
        Partenering your work with{' '}
        <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
          top influencers
        </span>
      </span>
      <span className=" w-auto text-[3.5rem] font-bold ml-[1rem]">
        {' '}
        to ensure{' '}
        <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
          maximum reach
        </span>{' '}
        
      </span>
      <span className="text-sm text-[#7D7D7D] w-[40rem] mt-[2rem]">
      We help artists and creators go viral with engaging social media campaigns.
      </span>
      <span className="text-sm text-[#7D7D7D] w-[40rem] ml-[20rem] mt-[3px]">
      Here's how we make it happen
      </span>
    </div>
  );
};

export default ClientBanner;
