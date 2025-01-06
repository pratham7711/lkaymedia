import React from 'react';

const Navbar = () => {
  return (
    <div className=" h-[5rem] flex items-center justify-between text-white p-3">
      <div className="flex items-center justify-center gap-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/89bc/1e48/475abff219495d27da6ff4a3261906f7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oiUhZv4SVE8qIFDbLN9g7zT62IsQAggBeLWjZbQDhCjCtlX32XSgXQ~UGQq91xWDRQjB0o6UHmdaOdaVt46NvvBrBK~89f0sghM1bGMCK25wZiZ6ojYKfmiMesTrWho9hePKeMuJa1tVEmcCwZwR1AeAR5oHBk39n4b1IBvkq9j1a3aiUds3KBGRo-2iOwLpMa1TdqC9xwsJaOMOvmjIlC-uFrfmJwmhnUQWD0w1hmQTDXNaMEyh3rZJBn-~R3BqftWZLItgumWbuDs-dbcOHpYavQNvnkhDZfbiIqUxWW9lQwhtZBe9mRSCN4808MYZ65lvgkt3VqwvdmE8vsCmiA__"
          alt=""
          className=" h-[5rem] w-[5rem]"
        />
        <span className="font-bold text-2xl">LKay Media</span>
      </div>
      <div className="flex items-center justify-between w-[25rem] text-[1rem] text-[#7D7D7D] ">
        <span className='hover:text-white cursor-pointer'>Home</span>
        <span className='hover:text-white cursor-pointer'>About</span>
        <span className='hover:text-white cursor-pointer'>Contact Us</span>
      </div>
      <button className=" w-[6rem] font-bold h-[2.5rem] flex items-center justify-center bg-[linear-gradient(90deg,_#74D4ED_13.89%,_#A7A8FF_36.94%,_#C994DF_59.2%,_#DAB4FF_88.89%)] ">
        Join Us
      </button>
    </div>
  );
};

export default Navbar;
