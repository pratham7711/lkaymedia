import React from 'react';
import MouseIcon from '../assets/MouseIcon';
import DownArrowIcon from '../assets/DownArrowIcon';
import AudioSpectrum from '../assets/AudioSpectrum';
import BarLine from '../assets/BarLine';
import PlayIcon from '../assets/PlayIcon';
import CropIcon from '../assets/CropIcon';
import Image1 from '../../assets/first-image.png'
import Image3 from '../../assets/third-image.png'

const ImageCarousal = () => {
  return (
    <div className="h-auto flex gap-[2rem] p-5 justify-center">
      <img
        src={Image1}
        alt=""
        className="w-[20rem] h-[28rem]"
      />
      <div className="flex flex-col relative">
        <div className="h-[8rem] flex flex-col gap-2 items-center justify-center text-white">
          <span className="text-[12px]">Scroll down for more</span>
          <MouseIcon />
          <DownArrowIcon />
        </div>

        <img
          src="https://ladygaganow.net/albums/Artworks/Singles/die%20with%20a%20smile/large.single_cover.jpg.81ff8509862c28c8d2eb0addcf2020e6.jpg"
          alt=""
          className="w-[20rem] h-[20rem]"
        />

        <div className="absolute top-[20rem]  left-[1rem]  h-[12rem] w-[18rem] flex flex-col gap-2 items-center justify-center text-white bg-black bg-opacity-50">
          <span className="text-[12px] font-bold">
            Your Music. Their Reels.
          </span>
          <span className="text-[12px] font-bold">Instant Fame.</span>
          <span className="text-[#7D7D7D] text-[10px]">
            Book your appointment now
          </span>
          <AudioSpectrum />
          <BarLine />
          <div className=" w-full flex items-center justify-between p-2 text-[10px]">
            <div className="flex gap-2 items-center justify-center">
              <PlayIcon />
              <span>Play Video</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span>00:48</span>
              <CropIcon />
            </div>
          </div>
        </div>
      </div>

      <img
        src={Image3}
        alt=""
        className="w-[20rem] h-[28rem]"
      />
    </div>
  );
};

export default ImageCarousal;
