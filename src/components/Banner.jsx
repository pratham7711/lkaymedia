

const Banner = () => {
  return (
    <div className="text-white h-auto mt-[1rem] mb-[3rem] flex flex-col items-center ">
      <span className="w-[80%] text-center text-[3rem] font-bold">
        {/* Make your beats{' '} */}
        <span className="text-transparent text-center bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
        Beats to Buzz , Tracks to Trends
        </span>
      </span>
      <span className=" w-[42rem] text-center text-[3.5rem] font-bold ml-[1rem]">
        {' '}
        {/* with{' '} */}
          {/* <span className="text-transparent text-center bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
          Tracks to Trends
          </span>{' '} */}
        {/* support */}
      </span>
      <span className="text-xl text-center leading-loose tracking-wider text-[#e9e9e9] w-[40rem] mt-[2rem]">
      We specialize in elevating your music and connecting it with the right audience through our extensive network of influencers
      </span>
    </div>
  );
};

export default Banner;
