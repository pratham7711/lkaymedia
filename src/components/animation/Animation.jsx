import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const Carousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(null);

  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const slides = [
    {
      img: 'image/img1.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      img: 'image/img2.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      img: 'image/img3.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      img: 'image/img4.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor sit amet...',
    },
  ];

  const showSlider = (type) => {
    if (type === 'next') {
      console.log('anuj kaushik');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (type === 'prev') {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  console.log('current slide is', currentSlide);

  useEffect(() => {
    const autoNext = setInterval(() => {
      showSlider('next');
    }, timeAutoNext);
    setAutoSlide(autoNext);
    return () => clearInterval(autoNext);
  }, []);

  return (
    <div className="carousel">
      <div className="list" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item ${currentSlide === index ? 'active' : ''}`}
          >
            <img src={slide.img} alt="slide" />
            <div className="content">
              <div className="author">{slide.author}</div>
              <div className="title">{slide.title}</div>
              <div className="topic">{slide.topic}</div>
              <div className="des">{slide.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* list thumbnail */}
      <div className="thumbnail" ref={thumbnailRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item ${currentSlide === index ? 'active' : ''}`}
          >
            <img src={slide.img} alt="thumbnail" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>

      {/* next prev */}
      <div className="arrows">
        <button id="prev" onClick={() => showSlider('prev')}>
          &lt;
        </button>
        <button id="next" onClick={() => showSlider('next')}>
          &gt;
        </button>
      </div>

      {/* time running */}
      <div className="time" />
    </div>
  );
};

export default Carousal;
