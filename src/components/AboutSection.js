import React from "react";
import wavingHand from "../img/waving_hand.png";

import { Link } from "react-router-dom";

//Components
import SocialModal from "../components/SocialModal";
//Styled
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";

class AboutSection extends React.Component {
  //States
  state = {
    show: false,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  // Component
  render() {
    return (
      <div className="AboutSection">
        <div>
          <SocialModal
            onClose={this.showModal}
            show={this.state.show}
          ></SocialModal>
        </div>
        <div class="h-auto flex items-center justify-center">
          <div class="bg-white pb-8 sm:pb-12 lg:pb-12 object-center">
            <div class="pt-8 overflow-hidden sm:pt-12 lg:relative">
              <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                <div class="flex-row items-center">
                  <div class="mt-12">
                    <div class="sm:max-w-xl">
                      <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        class="text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl"
                      >
                        Hi I'm Alex{" "}
                        <Handwave>
                          <motion.img
                            whileHover={{ scale: 1.2 }}
                            class="object-scale h-12 cursor-pointer"
                            src={wavingHand}
                            alt="waving hand emoji"
                            onClick={(e) => {
                              this.showModal();
                            }}
                          />
                        </Handwave>
                        <br></br>this is my dev portfolio
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                        class="mt-6 text-xl text-gray-500"
                      >
                        I just learned how to code recently, so I created this
                        portfolio to showcase what I can do with code and
                        No-code so far.
                      </motion.p>
                    </div>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 2 } }}
                      class="block rounded-md border border-transparent mt-6 mb-12 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <Link to="/portfolio">
                        <p class="px-5 py-3 sm:px-10">Check it out</p>
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </div>

              <div class="sm:mx-auto">
                {/* Activate these when video is posted */}
                {/* <div class="sm:hidden sm:relative sm:mt-14 sm:py-4 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
                  <motion.iframe
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2 } }}
                    class="rounded-lg"
                    width="352"
                    height="198"
                    src="https://youtube.com/embed/K24H6b0msrc"
                  ></motion.iframe>
                </div>
                <div class="hidden sm:block  sm:relative sm:mt-14 sm:py-4 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
                  <motion.iframe
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2 } }}
                    class="rounded-lg"
                    width="560"
                    height="315"
                    src="https://youtube.com/embed/K24H6b0msrc"
                  ></motion.iframe>
                </div> */}
                <div class="sm:block  sm:relative sm:my-10 py-5 rounded md lg:absolute  lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center items-center text-center bg-indigo-200 font-bold text-lg">
                  <p class="md:pt-40  ">Video about code coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Styled Components
const Handwave = styled.div`
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default AboutSection;
