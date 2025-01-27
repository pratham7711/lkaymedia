import React from "react";

const Contact = React.forwardRef((props , ref) => {


const submithandler = (e) =>{
  e.preventDefault();
}

  return (
    <div ref={ref} className="my-[5rem] h-auto flex items-center justify-center">
      <div className=" w-[60%] p-[3rem] flex flex-col gap-2 items-center justify-center  text-white bg-[#2B2B2B]">
        <span className="text-[2.5rem] font-bold">
          Drop us a{' '}
          <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
            message
          </span>
          , and we&apos;ll turn
          <br />
        </span>
        <span className=" text-[2.5rem] font-bold ">
          your talent into a
          <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
            {' '}
            social media sensation.
          </span>
        </span>
        <p className="text-lg text-[#cfcfcf] mt-[1rem]">
          Let us amplify your creativity and transform it into a social media
          sensation.
        </p>
        <p className="text-lg text-[#cbcbcb]">
          Our team ensures your work gets the attention it deserves.
        </p>
        <form className='w-[80%] mt-[1rem] flex flex-col items-center'>
            <input type="email" className='mb-8 bg-[#3A393A] w-[80%] p-3 text-[#e9e9e9]' placeholder='Email' />
            <input type="text" className='mb-10 bg-[#3A393A] w-[80%] p-3 text-[#eaeaea]' placeholder="Message"/>
            <button type="submit" onClick={submithandler} className='w-[40%] h-[3.5rem] bg-gradient-to-r from-[#74D4ED] via-[#A7A8FF] to-[#DAB4FF] font-bold transform transition-transform duration-300 hover:scale-105'>Submit</button>
        </form>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
