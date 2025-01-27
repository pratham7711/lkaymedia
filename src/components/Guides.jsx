import Image1 from '../../assets/third-image.png'
import Image2 from '../../assets/fourth-image.png'
import Image3 from '../../assets/fifth-image.png'


const Guides = () => {
  return (
    <div className=" h-auto flex flex-col">
      <div className=" h-[20rem] flex items-center justify-between p-3 text-white gap-2 ">
        <div className="flex flex-col gap-2 items-start justify-center  ml-[7rem] w-auto ">
          <span className="text-[2.5rem] font-bold">
            Connect with
            <br />
            Trending Influencers
          </span>
          <p className="text-sm text-[#7D7D7D]">
            Partenering your work with top influencers to ensure maximum reach.
          </p>
        </div>
        <img
          src={Image1}
          alt=""
          className="h-[16rem] mr-[15rem]"
        />
      </div>
      <div className=" h-[20rem] flex items-center justify-between p-3 text-white   gap-2">
        <div className="flex flex-col gap-2 items-start justify-center  ml-[7rem] w-auto ">
          <img
            src={Image2}
            alt=""
            className="h-[16rem] "
          />
        </div>

        <div className="flex flex-col gap-2 items-end justify-center w-auto mr-[15rem] ">
          <span className="text-[2.5rem] font-bold">
            Craft Viral-Worthy
            <br />
            Content
          </span>
          <p className="text-sm text-[#7D7D7D] ">
            Designing reels and posts that capture attention and spark
            engagement.
          </p>
        </div>
      </div>
      <div className=" h-[20rem] flex items-center justify-between p-3 text-white   gap-2">
        <div className="flex flex-col gap-2 items-start justify-center  ml-[7rem] w-auto ">
          <span className="text-[2.5rem] font-bold">
            Drive Real and
            <br />
            Tangible Results
          </span>
          <p className="text-sm text-[#7D7D7D]">
            Turning your creativity into trends that resonate with millions.
          </p>
        </div>
        <img
         src={Image3}
          className="h-[16rem] mr-[12rem]  mb-[5rem]"
        />
      </div>
      <div className=" h-[20rem] flex justify-between p-3 text-white gap-2 my-[10rem] mt-[8rem]">
        <div className="flex flex-col gap-2 text-center jusyify-center w-full">
          <span className="text-[3.5rem] text-center mb-11 font-extrabold">Results</span>
          <div className="w-full h-auto flex items-center justify-around pl-50 pr-30 ml-5">
            <div className="flex flex-col text-center justify-center">
              <span className="font-extrabold text-[3.5rem] text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
                580+
              </span>
              <p className="text-[1.5rem] text-[#dedede] font-black">Campaigns</p>
            </div>
            <div className="flex flex-col text-center justify-center">
              <span className="font-extrabold text-[3.5rem] text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
                7.5B+
              </span>
              <p className="text-[1.5rem] text-[#dedede] font-black">Views</p>
            </div>
            <div className="flex flex-col text-center justify-center ">
              <span className="font-extrabold text-[3.5rem] text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
                820M+
              </span>
              <p className="text-[1.5rem] text-[#dedede] font-black">Managed Following</p>
            </div>
          </div>
          <p className="text-[3rem] tracking-wide font-extrabold text-[#ffffff] mt-20">
            Organically across all Socials !
          </p>
        </div>
          {/* <div className=" flex  items-center justify-center gap-3 mr-[12rem]">
            <img
              src={Image5}
              className="h-[17rem] "
            />
            <img
              src={Image6}
              className="h-[17rem] w-[12rem] "
            />
          </div> */}
      </div>
    </div>
  );
};

export default Guides;
