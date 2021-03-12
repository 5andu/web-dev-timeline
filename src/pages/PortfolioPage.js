import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Timeline from "../components/Timeline";
//Images

//Framer Motion & Animation
import { motion } from "framer-motion";
import { pageSlider2, pageAnimation, sliderContainer } from "../animation";

const PortfolioPage = () => {
  return (
    <div>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        class="bg-indigo-50 h-full"
      >
        <motion.div variant={sliderContainer}>
          <Frame1 variants={pageSlider2}></Frame1>
          <Frame2 variants={pageSlider2}></Frame2>
          <Frame3 variants={pageSlider2}></Frame3>
          <Frame4 variants={pageSlider2}></Frame4>
        </motion.div>

        <div class="flex justify-center pt-5">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            class="block rounded-md border border-transparent mb-12 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <Link to="/">
              <p class="px-3 py-3 sm:px-8">Back</p>
            </Link>
          </motion.button>
        </div>
        <Timeline />
      </motion.div>
    </div>
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
  z-index: 2;
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

export default PortfolioPage;
