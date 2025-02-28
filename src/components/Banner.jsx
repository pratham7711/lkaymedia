import { FaChevronDown } from "react-icons/fa"; // Import the downward arrow icon

const Banner = () => {
  return (
    <div className="text-white h-auto mt-20 mb-20 flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Main Heading */}
      <h1 className="w-full max-w-4xl text-center text-3xl md:text-5xl font-bold leading-tight animate-fadeInUp">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74D4ED] via-[#A7A8FF] to-[#DAB4FF]">
          Beats to Buzz, Tracks to Trends
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-12 text-base md:text-xl text-center leading-relaxed tracking-wide text-[#e9e9e9] max-w-2xl animate-fadeInUp delay-200">
        We specialize in elevating your music and connecting it with the right audience through our extensive network of influencers.
      </p>

      {/* Scroll Down Indicator */}
      {/* <div className="mt-12 animate-bounce hidden sm:block">
        <FaChevronDown className="text-white text-3xl md:text-4xl" />
      </div> */}
    </div>
  );
};

export default Banner;
