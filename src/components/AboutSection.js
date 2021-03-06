import React from "react";
import wavingHand from "../img/waving_hand.png";
//Styled
import styled from "styled-components";
// import { Handwave } from "../styles";

const AboutSection = () => {
  return (
    <div>
      <Handwave>
        <img
          class="object-scale h-10"
          src={wavingHand}
          alt="waving hand emoji"
        />
      </Handwave>

      <div>Hi I'm Alex</div>
    </div>
  );
};

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
    } /* The following five values can be played with to make the waving more or less extreme */
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
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default AboutSection;
