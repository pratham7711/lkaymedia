import React, { useEffect, useRef } from 'react';
import client1 from '../assets/images-gigapixel.jpg';
import client2 from '../assets/TRBL+UPDATE.png';
import client3 from '../assets/sony-music-large-logo.jpg';
import client4 from '../assets/pcr.jpeg';
import client5 from '../assets/channels4_profile.jpg';

const ClientCarousel = () => {
  const carouselRef = useRef(null);
  const requestRef = useRef();
  const lastTimeRef = useRef(0);
  const positionRef = useRef(0); // Track the current position of the carousel
  const speed = 0.1; // Adjust the speed here

  const moveCarousel = (time) => {
    if (lastTimeRef.current) {
      const deltaTime = time - lastTimeRef.current; // Calculate the time difference
      positionRef.current -= (deltaTime * speed); // Update position based on time
      carouselRef.current.style.transform = `translateX(${positionRef.current}px)`;

      // Reset position to create a loop effect
      if (positionRef.current <= -carouselRef.current.scrollWidth / 2) {
        positionRef.current += carouselRef.current.scrollWidth / 2; // Move back to the start
      }
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(moveCarousel); // Request the next frame
  };

  useEffect(() => {
    // Set the initial position to align the first image to the center
    positionRef.current = -carouselRef.current.scrollWidth / 4; // Start midway
    carouselRef.current.style.transform = `translateX(${positionRef.current}px)`;

    requestRef.current = requestAnimationFrame(moveCarousel); // Start the animation

    return () => {
      cancelAnimationFrame(requestRef.current); // Clean up on unmount
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full h-96 py-10">
      <h1 className="text-center text-2xl font-bold text-gray-800">Our Clients</h1>
      <div
        className="flex"
        ref={carouselRef}
        style={{ transform: `translateX(0px)` }} // Initialize transform
      >
        {/* Original images */}
        <img src={client1} alt="Client 1" className="h-40 mx-6 my-10" />
        <img src={client2} alt="Client 2" className="h-40 mx-6 my-10" />
        <img src={client3} alt="Client 3" className="h-40 mx-6 my-10" />
        <img src={client4} alt="Client 4" className="h-40 mx-6 my-10" />
        <img src={client5} alt="Client 5" className="h-40 mx-6 my-10" />
        {/* Duplicate images for continuous effect */}
        <img src={client1} alt="Client 1" className="h-40 mx-6 my-10" />
        <img src={client2} alt="Client 2" className="h-40 mx-6 my-10" />
        <img src={client3} alt="Client 3" className="h-40 mx-6 my-10" />
        <img src={client4} alt="Client 4" className="h-40 mx-6 my-10" />
        <img src={client5} alt="Client 5" className="h-40 mx-6 my-10" />
        <img src={client1} alt="Client 1" className="h-40 mx-6 my-10" />
        <img src={client2} alt="Client 2" className="h-40 mx-6 my-10" />
        <img src={client3} alt="Client 3" className="h-40 mx-6 my-10" />
        <img src={client4} alt="Client 4" className="h-40 mx-6 my-10" />
        <img src={client5} alt="Client 5" className="h-40 mx-6 my-10" /><img src={client1} alt="Client 1" className="h-40 mx-6 my-10" />
        <img src={client2} alt="Client 2" className="h-40 mx-6 my-10" />
        <img src={client3} alt="Client 3" className="h-40 mx-6 my-10" />
        <img src={client4} alt="Client 4" className="h-40 mx-6 my-10" />
        <img src={client5} alt="Client 5" className="h-40 mx-6 my-10" /><img src={client1} alt="Client 1" className="h-40 mx-6 my-10" />
        <img src={client2} alt="Client 2" className="h-40 mx-6 my-10" />
        <img src={client3} alt="Client 3" className="h-40 mx-6 my-10" />
        <img src={client4} alt="Client 4" className="h-40 mx-6 my-10" />
        <img src={client5} alt="Client 5" className="h-40 mx-6 my-10" />
      </div>
    </div>
  );
};

export default ClientCarousel; 