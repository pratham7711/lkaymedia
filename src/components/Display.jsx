import React from 'react';
import classes from './Display.module.css';
import ImageSlider from './carousal/ImageCarousal'

const Display = () => {
  return (
    <div className={classes.body}>
      <div className={classes.heading}>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Campaigns We Arranged
        </span>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Results After Campaigns
        </span>
      </div>
      
      <ImageSlider/>
  
    </div>
  );
};

export default Display;
