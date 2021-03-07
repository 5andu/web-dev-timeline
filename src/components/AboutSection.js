import React from "react";
import wavingHand from "../img/waving_hand.png";
//Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <div>
      <div class="bg-white pb-8 sm:pb-12 lg:pb-12 object-center">
  <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:pb-48">
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
      <div>
        <div>

    <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-pressed="false">
      <span class="sr-only">Use setting</span>
      <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
</button>
        </div>
        <div class="mt-20">
          
          <div class="mt-6 sm:max-w-xl">
            <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Hi I'm Alex <Handwave>
            <img
              class="object-scale h-12"
              src={wavingHand}
              alt="waving hand emoji"
            />
          </Handwave><br></br>this is my dev portfolio
            </h1>
            <p class="mt-6 text-xl text-gray-500">
            I just learned how to code recently, so I created this portfolio to showcase what I can do with code and No-code so far.
            </p>
          </div>
          <button
                class="block w-50 rounded-md border border-transparent px-5 py-3  mt-6 mb-20 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
              >
                Check it out
          </button>
          
        </div>
        

        <div class="lg:col-span-2 mb-4">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8" />
          <a target="_blank" rel="noopener noreferrer" href="https://alexglv.com">
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="w-16 h-16 rounded-full lg:w-16 lg:h-16" src="https://pbs.twimg.com/profile_images/1363620800960561160/gDT4i3Rn_400x400.jpg" alt="" />
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Personal Website</h3>
                  <p class="text-indigo-600">alexglv.com</p>
                </div>
              </div>
          </a>
        </div>
        
        
        <div class="lg:col-span-2 mb-4">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8" />
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AlexandruGlv">
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img class="w-16 h-16 rounded-full lg:w-16 lg:h-16" src="https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg" alt="" />
              <div class="font-medium text-lg leading-6 space-y-1">
                <h3>Twitter</h3>
                <p class="text-indigo-600">@AlexandruGlv</p>
              </div>
            </div>
            </a>
        </div>

        <div class="lg:col-span-2 mb-4">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8" />
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCc03ebwuzIktdzqcAXkG1nA">
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img class="w-16 h-16 rounded-full lg:w-16 lg:h-16" src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579609-yumminkysocialmedia08_83079.png" alt="" />
              <div class="font-medium text-lg leading-6 space-y-1">
                <h3>Youtube Channel</h3>
                <p class="text-indigo-600">@Alexandru Golovatenco</p>
              </div>
            </div>
            </a>
        </div>

      </div>
    </div>

    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="hidden sm:block">
          <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
          <svg
            class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
            />
          </svg>
        </div>
        <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
          <img
            class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
            src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>
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
