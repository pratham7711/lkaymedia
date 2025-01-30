import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import Image1 from "../../assets/adele_skyfall.webp";
import Image3 from "../../assets/myeyes.webp";
import Image2 from "../../assets/diewithsmilecover.jpg";

const songs = [
  { image: Image1, name: "Skyfall", artist: "Adele", audio: "../../assets/skyfall.mp3" },
  { image: Image2, name: "Die with a Smile", artist: "Lady Gaga", audio: "../../assets/diewithsmile.mp3" },
  { image: Image3, name: "My Eyes", artist: "Travis Scott", audio: "../../assets/myeyes.mp3" }
];

const ImageCarousal = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [audio, setAudio] = useState(null);
  const containerRef = useRef(null);

  const playSong = (audioUrl) => {
    if (audio) {
      audio.pause();    }
    const newAudio = new Audio(audioUrl); 
    setAudio(newAudio);
    newAudio.play();
  };

  const handleImageClick = (index, audioUrl) => {
    console.log(index , audioUrl , audio);
    
    if (selectedIndex === index) {
      if (audio) {
        console.log("should pause");
        audio.pause();
      }
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
      playSong(audioUrl);
    }
  };

  return (
    <div>
       <h1 className="text-transparent h-[4rem] bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text text-5xl font-bold my-12 align-center text-center">
      Our Campaigns
    </h1>
    <div className="h-auto flex gap-8 p-5 justify-center" ref={containerRef}>
      {songs.map((song, index) => (
        <div key={index} className="relative">
          {/* Image */}
          <img
            src={song.image}
            alt={song.name}
            className={`w-[15rem] h-[20rem] rounded-lg 
              transition-all duration-300 transform 
              shadow-[0_0_15px_rgba(255,255,255,0.2)] 
              hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] 
              hover:scale-105 
              ${selectedIndex === index ? "scale-110 shadow-[0_0_50px_rgba(255,255,255,0.8)]" : ""}`}
            onClick={() => handleImageClick(index, song.audio)}
          />

          {selectedIndex === index && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 rounded-lg transition-opacity duration-300"
                onClick={() => handleImageClick(index, song.audio)}>
              <FaPlay className="text-3xl mb-2" />
              <h2 className="text-xl font-bold">{song.name}</h2>
              <p className="text-sm opacity-80">{song.artist}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageCarousal;
