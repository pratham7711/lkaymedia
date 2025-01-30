import { FaChevronDown } from "react-icons/fa"; // Import the downward arrow icon

const Banner = () => {
  return (
    <div className="text-white h-auto mt-[4rem] mb-[6rem] flex flex-col items-center">
      <span className="w-[80%] text-center text-[3.6rem] font-bold">
        <span className="text-transparent text-center bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
          Beats to Buzz , Tracks to Trends
        </span>
      </span>
      <span className="text-xl text-center mt-[5rem] leading-loose tracking-wider text-[#e9e9e9] w-[40rem] mt-[2rem]">
        We specialize in elevating your music and connecting it with the right audience through our extensive network of influencers
      </span>

      {/* Scroll Down Indicator */}
      <div className="mt-[8rem]">
        <FaChevronDown className="text-white text-3xl animate-bounce" />
      </div>
    </div>
  );
};

export default Banner;
