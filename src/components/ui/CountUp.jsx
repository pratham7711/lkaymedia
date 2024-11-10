import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ start = 0, end, duration = 2, onComplete }) => {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const countUpRef = useRef(null);
  const increment = (end - start) / (duration * 60); // Calculate increment per frame (assuming 60 FPS)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(countUpRef.current); // Stop observing after it comes into view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return; // Only run the count up if in view

    let animationFrameId;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds
      const newCount = Math.min(start + increment * elapsedTime * 60, end); // Calculate new count

      setCount(Math.floor(newCount)); // Update state with the new count

      if (newCount < end) {
        animationFrameId = requestAnimationFrame(updateCount); // Continue the animation
      } else {
        if (onComplete) onComplete(); // Call onComplete callback if provided
      }
    };

    animationFrameId = requestAnimationFrame(updateCount); // Start the animation

    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup on unmount
    };
  }, [start, end, duration, onComplete, isInView]);

  return <span ref={countUpRef}>{count}</span>; // Render the count
};

export default CountUp;
