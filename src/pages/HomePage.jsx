import React from "react";
import Banner from "../components/Banner";
import classes from "./HomePage.module.css";
import CountUp from "react-countup";
import profile from "../assets/profile.jpg";
import Display from "../components/Display";

const HomePage = () => {
  return (
    <div className={classes.body}>
      <Banner />
      <div className={classes.content}>
        <div className={classes.countContainer}>
          <div className={classes.headingContainer}>
            <p className={classes.text}>PLACEMENTS BY</p>
            <h1 className={classes.heading}>'Lkay Media'</h1>
          </div>
          <div style={{textAlign:"center"}}>
            <div className={classes.counter}>
            <CountUp
              className={classes.count}
              enableScrollSpy
              start={0}
              end={50}
              duration={3}
            />{" "}
            <h2 className={classes.count}>K+</h2>
          </div>
          <p style={{color:"#c6c6c6",letterSpacing:"2px",marginTop:"2px"}}>REELS</p>
          </div>
          <div style={{textAlign:"center"}}>
          <div className={classes.counter}>
            <CountUp
              className={classes.count}
              enableScrollSpy
              start={0}
              end={3}
              duration={3}
            />{" "}
            <h2 className={classes.count}>B+</h2>
          </div>
          <p style={{color:"#c6c6c6",letterSpacing:"2px",marginTop:"2px"}}>VIEWS</p>
          </div>
          <div className={classes.profile}>
          <a
                  href="https://www.instagram.com/lkaymedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.profileimage}
                  style={{ textDecoration: 'none', color: 'inherit' ,padding:"4px"}}
                >
                  <img className={classes.image} src={profile} alt="Profile" />
                  </a>
            <div className={classes.cardContent}>
              <div className={classes.info}>
              <a
                  href="https://www.instagram.com/lkaymedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h3>LKay Media</h3>
                </a>
                <p style={{color:"gray"}}>Advertising/marketing</p>
                <p>Making your music viral</p>
              </div>
            </div>
          </div>
        </div>
        <Display/>
      </div>
    </div>
  );
};

export default HomePage;
