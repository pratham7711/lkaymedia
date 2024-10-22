import React from 'react'
import classes from './Banner.module.css';
import video from '../assets/background.mp4';
const Banner = () => {
  return (
    <div className={classes.body}>
      <video className={classes.video} src={video} autoPlay loop muted />
      <div className={classes.content}>
        <h1>Hello Banner</h1>
      </div>
    </div>
  );
}

export default Banner;