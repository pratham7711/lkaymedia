import React, { useEffect, useState } from 'react';
import classes from './Display.module.css';
import ImageSlider from './carousal/ImageCarousal';

const Display = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.body}>
      <div className={classes.heading}>
        <span className={classes.campaignHeading1}>Campaigns We Arranged</span>
        {windowWidth > 1246 && (
          <span className={classes.campaignHeading2}>
            Results After Campaigns
          </span>
        )}
      </div>

      <div className={classes.container}>
        <ImageSlider />
        {windowWidth <= 1246 && (
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
            <span
              
              className={classes.campaignHeading2}
            >
              Results After Campaigns
            </span>
          </div>
        )}

        <ImageSlider />
      </div>
    </div>
  );
};

export default Display;
