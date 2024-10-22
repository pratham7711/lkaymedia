import React from 'react';
import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <img
          src="https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 869w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1169w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1469w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1738w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1769w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2069w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2338w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2369w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2669w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2938w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2969w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3269w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3538w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3569w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3869w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=4138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4138w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=4169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4169w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=4469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4469w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=4738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4738w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=4769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4769w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=5069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5069w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=5338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5338w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=5369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5369w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=5669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5669w, https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=5865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5865w"
          alt=""
          height={30}
          width={30}
          style={{ borderRadius: '100%', marginLeft: '1rem' }}
        />
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          framed_whips
        </span>
      </div>
      <div className={classes.content}>
        {/* add your animation here */}
        <video
          tabindex="-1"
          id="vjs_video_3_html5_api"
          class="vjs-tech"
          className={classes.video}
          loop=""
          muted="muted"
          autoplay=""
          src="https://cdn.pixabay.com/video/2021/04/19/71570-538974134_large.mp4"
        ></video>
      </div>
      <div className={classes.overview}>
        <p>70000+ likes</p>
        <p>Most liked among all </p>
        <p style={{ color: 'gray', fontWeight: 'lighter', fontSize: '15px' }}>
          Amazing song by: @Arijit Singh{' '}
        </p>
      </div>
    </div>
  );
};

export default Card;
