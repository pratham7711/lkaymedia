import React from 'react';

const Contact = () => {
  return (
    <div className=" mt-[5rem] h-auto flex items-center justify-center">
      <div className=" w-[60%] h-[25rem] flex flex-col gap-2 items-center justify-center  text-white bg-[#2B2B2B]">
        <span className="text-[2.5rem] font-bold">
          Drop us a{' '}
          <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
            message
          </span>
          , and we'll turn
          <br />
        </span>
        <span className=" text-[2.5rem] font-bold ">
          your talent into a
          <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
            {' '}
            social media sensation.
          </span>
        </span>
        <p className="text-sm text-[#7D7D7D] mt-[1rem]">
          Let us amplify your creativity and transform it into a social media
          sensation.
        </p>
        <p className="text-sm text-[#7D7D7D]">
          Our team ensures your work gets the attention it deserves.
        </p>
        <div className=' h-[4rem] w-[50%] mt-[1rem] flex '>
            <input type="text" className='bg-[#3A393A] w-[70%] p-3 text-[#7D7D7D]' placeholder='your email address' />
            <button className='w-[30%] bg-[linear-gradient(90deg,_#74D4ED_13.89%,_#A7A8FF_36.94%,_#C994DF_59.2%,_#DAB4FF_88.89%)] font-bold'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
