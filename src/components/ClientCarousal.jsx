import React from 'react';
import Image1 from '../../assets/client1.png'
import Image2 from '../../assets/client2.png'
import Image4 from '../../assets/client4.png'
import Image5 from '../../assets/client5.png'

const ClientCarousal = () => {
  return (
    <div className=" mt-[10rem] h-[3rem]  flex items-center justify-between pl-[3rem] pr-[3rem] ">
      <img
        src={Image1}
        alt=""
        className='h-[4rem] w-[15rem]'
      />
      <img
       src={Image2}
        alt=""
         className='h-[4rem] w-[15rem]'
      />
      <img
        src={Image4}
        alt=""
         className='h-[4rem] w-[15rem]'
      />
      <img
        src={Image5}
        alt=""
         className='h-[4rem] w-[15rem]'
      />
    </div>
  );
};

export default ClientCarousal;
