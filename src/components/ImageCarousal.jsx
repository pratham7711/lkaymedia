import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import Image1 from "../../assets/adele_skyfall.webp";
import Image2 from "../../assets/diewithsmilecover.jpg";
import Image3 from "../../assets/myeyes.webp";
import skyfall from "../../assets/skyfall.mp3";
import diewithsmile from "../../assets/diewithsmile.mp3";
import myeyes from "../../assets/myeyes.mp3";

const songs = [
  { image: Image1, name: "Skyfall", artist: "Adele", audio: skyfall },
  { image: Image2, name: "Die with a Smile", artist: "Lady Gaga", audio: diewithsmile },
  { image: Image3, name: "My Eyes", artist: "Travis Scott", audio: myeyes }
];

const ImageCarousal = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [audio, setAudio] = useState(null);

  const playSong = (audioUrl) => {
    if (audio) audio.pause();
    const newAudio = new Audio(audioUrl);
    setAudio(newAudio);
    newAudio.play();
  };

  const handleImageClick = (index, audioUrl) => {
    if (selectedIndex === index) {
      if (audio) audio.pause();
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
      playSong(audioUrl);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {songs.map((song, index) => (
        <div key={index} className="relative group  rounded-lg shadow-[0px_0px_20px_1px_rgba(125,125,125,1)] m-5 w-full sm:w-[15rem] sm:h-[20rem]">
          <img
            src={song.image}
            alt={song.name}
            className={`w-full h-[20rem] rounded-lg transition-transform duration-300
              ${selectedIndex === index ? "scale-105 shadow-lg" : "hover:scale-105"}`}
            onClick={() => handleImageClick(index, song.audio)}
          />
          {selectedIndex === index ? (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
              <FaPlay className="text-3xl mb-2" />
              <h2 className="text-xl font-bold">{song.name}</h2>
              <p className="text-sm opacity-80">{song.artist}</p>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-lg">Click to Play</p>
              <FaPlay className="text-3xl mb-2" />
              <h2 className="text-xl font-bold">{song.name}</h2>
              <p className="text-sm opacity-80">{song.artist}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageCarousal;
