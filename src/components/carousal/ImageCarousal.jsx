import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './ImageCarousal.module.css';
import Card from './Card';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1638, 
        settings: {
          slidesToShow: 1, 
         
        },
      },
      {
        breakpoint:1246,
        settings:{
          slidesToShow:2
        }
      },
      {
        breakpoint:732,
        settings:{
          slidesToShow:1
        }
      }
    ],
  };

  return (
    <div className={classes.sliderContainer}>
      <Slider {...settings}>
        {imageData.map((image, index) => (
          <div key={index}>
            <Card />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${classes.arrow} ${classes.nextArrow}`} onClick={onClick}>
      &#10095;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${classes.arrow} ${classes.prevArrow}`} onClick={onClick}>
      &#10094;
    </div>
  );
};

const imageData = [
  {
    src: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/jBilling.png',
  },
  {
    src: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/payleadr.svg',
  },
  {
    src: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/patra_logo_black.png',
  },
  {
    src: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/certvault.svg',
  },
  {
    src: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/heffins.png',
  },
  {
    src: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/Revierjagd-Luzern-300x113.png',
  },
  {
    src: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/kfm.webp',
  },
  {
    src: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/fm.webp',
  },
];

export default ImageSlider;
