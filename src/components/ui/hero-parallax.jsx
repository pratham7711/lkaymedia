"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import ReelCard from "./ReelCard";
import title from '../../assets/desktop.jpg'
import titleMobile from '../../assets/mobile.jpg'


export const HeroParallax = ({ products }) => {
  console.log(products);
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className=" h-[270vh] md:h-[300vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
      className="mt-96"
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.key} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.key} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-0">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.key} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    
      <img 
        srcSet={window.innerWidth <= 768 ? titleMobile : title}
        src={title}
        alt="Descriptive Alt Text"
        className="w-full h-auto absolute"
      />
    
  );
};

export const ProductCard = ({ product, translate }) => {
  console.log("from Thumbnail", product);

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-[30rem] w-[25rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl">
        <ReelCard embed={product.embed} url={product.url} platform={product.platform} />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};