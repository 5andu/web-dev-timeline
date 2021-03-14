import React from "react";

//Styled
import styled from "styled-components";

//Import visuals
import Project1 from "../img/project_visual_01.jpg";
import Project2 from "../img/project_visual_02.jpg";
import Project3 from "../img/project_visual_03.jpg";
import Project4 from "../img/project_visual_04.jpg";
import Project5 from "../img/project_visual_05.jpg";
import Project6 from "../img/project_visual_06.jpg";
import Project7 from "../img/project_visual_07.jpg";
import Project8 from "../img/project_visual_08.jpg";
import Project9 from "../img/project_visual_09.jpg";
import Project10 from "../img/project_visual_10.jpg";
import Project11 from "../img/project_visual_11.jpg";
import Project12 from "../img/project_visual_12.jpg";

class InfiniteCarousel extends React.Component {
  // Component
  render() {
    return (
      <div class="flex align-center justify-center ">
        <Slider>
          <SlideTrack>
            <Slide>
              <img src={Project1} height="150" width="150" alt="EDG Logo" />
            </Slide>
            <Slide>
              <img src={Project2} height="150" width="150" alt="Bankin' Logo" />
            </Slide>
            <Slide>
              <img
                src={Project3}
                height="150"
                width="150"
                alt="Founder Hacker Logo"
              />
            </Slide>
            <Slide>
              <img src={Project4} height="150" width="150" alt="HTML & CSS" />
            </Slide>
            <Slide>
              <img
                src={Project5}
                height="150"
                width="150"
                alt="Front End Mentor"
              />
            </Slide>
            <Slide>
              <img
                src={Project6}
                height="150"
                width="150"
                alt="JavaScript Logo"
              />
            </Slide>
            <Slide>
              <img src={Project7} height="150" width="150" alt="React Logo" />
            </Slide>
            <Slide>
              <img
                src={Project8}
                height="150"
                width="150"
                alt="Notion Course Logo"
              />
            </Slide>
            <Slide>
              <img
                src={Project9}
                height="150"
                width="150"
                alt="Coding Accelerator Logo"
              />
            </Slide>
            <Slide>
              <img
                src={Project10}
                height="150"
                width="150"
                alt="Go Rails Logo"
              />
            </Slide>
            <Slide>
              <img
                src={Project11}
                height="150"
                width="150"
                alt="This Portfolio Logo"
              />
            </Slide>
            <Slide class="slide">
              <img
                src={Project12}
                height="150"
                width="150"
                alt="Final Project Logo"
              />
            </Slide>
            <Slide class="slide">
              <img src={Project1} height="150" width="150" alt="EDG Logo" />
            </Slide>
            <Slide>
              <img src={Project2} height="150" width="150" alt="Bankin' Logo" />
            </Slide>
            <Slide>
              <img
                src={Project3}
                height="150"
                width="150"
                alt="Founder Hacker Logo"
              />
            </Slide>
            <Slide>
              <img src={Project4} height="150" width="150" alt="HTML & CSS" />
            </Slide>
            <Slide>
              <img
                src={Project5}
                height="150"
                width="150"
                alt="Front End Mentor"
              />
            </Slide>
            <Slide>
              <img
                src={Project6}
                height="150"
                width="150"
                alt="JavaScript Logo"
              />
            </Slide>
            <Slide>
              <img src={Project7} height="150" width="150" alt="React Logo" />
            </Slide>
          </SlideTrack>
        </Slider>
      </div>
    );
  }
}

//Styled Components

const Slider = styled.div`
  background: white;
  height: 150px;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  /* width: 960px; */

  &::before,
  &::after {
    /* @include white-gradient; */
    content: "";
    height: 150px;
    position: absolute;
    width: 150px;
    z-index: 2;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

const SlideTrack = styled.div`
  /* animation-name: scroll-animation; */
  animation: scroll-animation 40s linear infinite;
  display: flex;
  width: calc(250px * 14);

  // Animation
  @keyframes scroll-animation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-150px * 7));
    }
  }
`;

const Slide = styled.div`
  height: 100px;
  width: 250px;
`;

export default InfiniteCarousel;
