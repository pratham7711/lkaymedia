import React from 'react';
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
      <div className=" h-[20rem] flex justify-between p-3 text-white gap-2">
        <div className="flex flex-col gap-2 text-center justify-center w-full">
          <span className="text-[3.5rem] font-extrabold">Results</span>
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
          <div className=" flex  items-center justify-center gap-3 mr-[12rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/1abb/cb66/aedd11bc72f95421edf38250b7ca17e9?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LrOOy4EjOLbdFKHcKdKroxL~BnvnsANkUv1mffjldgqoI61m340yVAuKtF0VKOvfVvf~kMcDSA82qcljfFhSJ-Q13xHdBJs1QVg9Dq8jnv9VSXcbBrCawPwsNFn16CMAsvDtPFl1-~RRcqFaKe7i4Qf7Wjchzz1RYP5J-Zn2f-BmsgWjeuhuynX3R0koovjdR7bF-u8BkgSiEbLbINPnWTEr7Tm2Mf~uMd08IdbbMTv7NC3dGVKcpThawF8umOrS2Rx9lGKrA4piCn-4ahs7PACTKbrZfqhKQ2AiGGOkdmEcLONUCbF7G1-e80g2Pynf0GY0TlN4P-h-1~YyxdcLhA__"
              className="h-[17rem] "
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/610e/3cbe/a1de3302f69e13c2db6337342ec400f5?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fylFY3rum9PJ1mIrQxl3K71tnO3ReSWpS41C3t-J0Hj-Y3e6xoNVVGOajHObauYZTa43iTEReoymq~v8HznM7HuGCCIMqtY4Pud49JNqzni6HXN0iJV3xyJX0PgIZruP~KiqOkOcMXt4LKllLh~2sNmMG3CpFtWQ0Yy8HgcY3pcaXqHLHfwcRBdsuX2Uf7ff~0XRKEbYbzKQ0Xtxg-Banj-46ftYC5-6F~DQskPUGutm8e2qDcRihnVa8DDPOH1XQtb6lB9eAubznU~weGfCcdAguVXgFBmLfnqRLIO2Rg8~u~BvF3rjtZstuHjoum57o4wPewxCN~~OqTZ06-3M5A__"
              className="h-[17rem] w-[12rem] "
            />
          </div>
      </div>
    </div>
  );
};

export default Guides;
