import React from "react";
import AboutSection from "../components/AboutSection";
import InfiniteCarousel from "../components/InfiniteCarousel";

import styled from "styled-components";
// import { Link } from "react-router-dom";

//Framer Motion & Animation
import { motion } from "framer-motion";
import { pageSlider, pageAnimation, sliderContainer } from "../animation";

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variant={sliderContainer}>
        <Frame1 variants={pageSlider}></Frame1>
        <Frame2 variants={pageSlider}></Frame2>
        <Frame3 variants={pageSlider}></Frame3>
        <Frame4 variants={pageSlider}></Frame4>
      </motion.div>

      <AboutSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
      >
        <InfiniteCarousel />
      </motion.div>
    </motion.div>
  );
};

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  /* top: 10%; */
  width: 100%;
  height: 100vh;
  background: rgba(79, 70, 229);
  z-index: 3;
`;

const Frame2 = styled(Frame1)`
  background: rgba(99, 102, 241);
`;

const Frame3 = styled(Frame1)`
  background: rgba(129, 140, 248);
`;

const Frame4 = styled(Frame1)`
  background: rgba(165, 180, 252);
`;

export default Home;
