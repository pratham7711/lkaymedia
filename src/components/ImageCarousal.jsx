import React from 'react';
import MouseIcon from '../assets/MouseIcon';
import DownArrowIcon from '../assets/DownArrowIcon';
import AudioSpectrum from '../assets/AudioSpectrum';
import BarLine from '../assets/BarLine';
import PlayIcon from '../assets/PlayIcon';
import CropIcon from '../assets/CropIcon';

const ImageCarousal = () => {
  return (
    <div className="h-auto flex gap-[2rem] p-5 justify-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/23ec/7b2a/576358eb842065ce46d05ba89225e9d7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L1fKw1pBDNmQ41bYRAlHujcIByy8oNGIqnDDuKUuWkZ71k1w7qehK9vEQgWc2DU3cSfgBKzwyWdAkV6eSSbGkucXcRp5ToB3s8aaRTuIcBBx-ykUF5uHjfX3bqsT31hhyQ3BkXh~VsI8NW8savBgv88Ue96sCoxCR~ZsHR-rTBYOo1iPFNRW1TVCSumhycNlTfJ-mtb8dm1OphJ89vPeNR3oPiBTqboUj64YV1AOtGCl8cHerFWURhcmWa0hceoEInfRDnF24-9zQwNpfA3B8HlLL6y9go0T8U5Uxuwo0kACg~cOzWxrqpCjNNWR5r0bxDl6wxMTLMRNDSlE-558iQ__"
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
        src="https://s3-alpha-sig.figma.com/img/fa26/0116/c319a470c30f465e5b2ec3aeedfd66a4?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=prNbHmOdqHR~hCNJ1N~eFsBWdgMENE5oKZAezRdM0QdniL~nhrylVoeKQ3qMG8Qq84RXk4CXOMa17B5PnH2RrIpOhgGgY3E~eVfxTWAAJdPpVuLZDeIEA41Ug-hjqzzZGI0d1qimNqIlclM4NGORLIL1M5flBALGPVizsmGYnaN2AplKsLA8BdUUMPYqOCMmXnX9VZ45yjxUhCbWT8H~ZNa8JKwMudeiHUVS-MZ5I2hqJblZetmWaJlMOSTLH~~WXilHiE~4VZHbjMxO-YtERVSErnscryZJb4V5nPhm~chnUSDerKkATKO~Q63cWRswV6cpJbaE7LF9MFtcay0C-w__"
        alt=""
        className="w-[20rem] h-[28rem]"
      />
    </div>
  );
};

export default ImageCarousal;
