import Logo from '../../assets/logo.svg'
// import emailjs from '@emailjs/browser';

const Navbar = () => {
  return (
    <div className=" h-[5rem] flex items-center justify-between text-white p-6 px-12">
      <div className="flex items-center justify-center gap-2">
        <a href='/home'><img className='h-[6rem] w-auto' src={Logo}/></a>
      </div>
      <div className="flex items-center justify-between w-[25rem] text-[1.2rem] text-[#d4d4d4] ">
        <span className='hover:text-white cursor-pointer'>Home</span>
        <span className='hover:text-white cursor-pointer'>About</span>
        <span className='hover:text-white cursor-pointer'>Results</span>
        <span className='hover:text-white cursor-pointer'>Contact Us</span>
      </div>
      <button className=" w-[6rem] font-bold h-[2.5rem] flex items-center justify-center bg-[linear-gradient(90deg,_#74D4ED_13.89%,_#A7A8FF_36.94%,_#C994DF_59.2%,_#DAB4FF_88.89%)] transform transition-transform duration-300 hover:scale-105">
        Join Us
      </button>
    </div>
  );
};

export default Navbar;
