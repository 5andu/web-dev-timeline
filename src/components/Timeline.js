import React from "react";
import { motion } from "framer-motion";

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

const Timeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
    >
      <body class="antialiased text-gray-800">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl text-center pb-5">
          My dev timeline
        </h1>
        <div class="relative container mx-auto flex flex-col space-y-8 px-6 md:px-2">
          <div class="absolute z-0 w-2 h-full rounded-full bg-gray-800 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
          {/* Project 1: Wordpress*/}
          <div class="relative z-10">
            <img src={Project1} alt="" class="timeline-img" />
            <div class="timeline-container-right">
              <div class="timeline-pointer-right" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-indigo-100 text-indigo-800">
                  WordPress
                </span>
                <span class="timeline-badge bg-gray-100 text-gray-800">
                  CMS
                </span>

                <h2 class="text-xl font-bold py-0.5">
                  My first client project
                </h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  2018
                </span>

                <p>
                  After creating my first business at 16 (
                  <a
                    href="https://alexglv.com/projects/tiger-bands"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-bold hover:underline text-indigo-500"
                  >
                    and failing
                  </a>
                  ), co-founding a{" "}
                  <a
                    href="https://alexglv.com/projects/noche-paris"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-bold hover:underline text-indigo-500"
                  >
                    clothing brand{" "}
                  </a>
                  at 17, I gained experience building websites which made me
                  able to get my first gig in 2018 at 18!
                </p>
                <div class="flex justify-center mt-3">
                  <button class="timeline-button">
                    <a
                      href="https://europedemenagementgroupage.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">View Website</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Webflow */}
          <div class="relative z-10">
            <img src={Project2} alt="" class="timeline-img" />
            <div class="timeline-container-left">
              <div class="timeline-pointer-left" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-indigo-100 text-indigo-800">
                  Webflow
                </span>
                <span class="timeline-badge bg-gray-100 text-gray-800">
                  CMS
                </span>
                <h2 class="text-xl font-bold py-0.5">My first marketing job</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  2019
                </span>
                <p>
                  After a job in sales, my past experiences allowed me to get a
                  marketing job in the startup{" "}
                  <a
                    href="https://bankin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-bold hover:underline text-indigo-500"
                  >
                    Bankin'{" "}
                  </a>
                  during one year, where I learned a lot about paid ads, design,
                  and content creation. I also created a page for them on
                  Webflow, on which I got more comfortable thanks to{" "}
                  <a
                    href="https://university.webflow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-bold hover:underline text-indigo-500"
                  >
                    Webflow University
                  </a>
                  .
                </p>
                <div class="flex justify-center mt-3">
                  <button class="timeline-button">
                    <a
                      href="https://bankin.com/fr/referral.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">View Landing Page</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Ruby */}
          <div class="relative z-10">
            <img src={Project3} alt="" class="timeline-img" />
            <div class="timeline-container-right ">
              <div class="timeline-pointer-right" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-red-100 text-red-800">Ruby</span>
                <span class="timeline-badge bg-gray-100 text-gray-800">
                  Coding Basics
                </span>
                <h2 class="text-xl font-bold py-0.5">Time to actually code</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q2 2020
                </span>
                <p>
                  After a few projects and some client work on Wordpress,
                  Webflow, Wix, and Shopify, I finally started learning how to
                  code. I began with a ruby course from the{" "}
                  <a
                    href="https://www.founderhacker.com/fundamentals/issc0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-bold hover:underline text-indigo-500"
                  >
                    Founder Hacker{" "}
                  </a>
                  course, which teaches the fundamentals of code (CLI, git,
                  APIs, Ruby, OOP, db). It helped a lot!
                </p>
              </div>
            </div>
          </div>

          {/* Project 4: HTML & CSS */}
          <div class="relative z-10">
            <img src={Project4} alt="" class="timeline-img" />
            <div class="timeline-container-left">
              <div class="timeline-pointer-left" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-light-orange text-dark-orange">
                  HTML
                </span>
                <span class="timeline-badge bg-blue-100 text-blue-800">
                  CSS
                </span>
                <h2 class="text-xl font-bold py-0.5">
                  First web pages by hand{" "}
                </h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q3 2020
                </span>
                <p>
                  At this point, I understood the basics of coding, but I hadn't
                  built a proper web page by hand yet, so I quickly learned HTML
                  & CSS on Skillshare, and built a few websites to start doing a
                  bit of Frontend.
                </p>
                <div class="flex justify-center mt-3">
                  <button class="block rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a
                      href="https://html-css-alexandru.tiiny.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">View Websites</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5: Front End Mentor */}
          <div class="relative z-10">
            <img src={Project5} alt="" class="timeline-img" />
            <div class="timeline-container-right">
              <div class="timeline-pointer-right" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-light-orange text-dark-orange">
                  HTML
                </span>
                <span class="timeline-badge bg-blue-100 text-blue-800">
                  CSS
                </span>
                <span class="timeline-badge bg-yellow-100 text-yellow-800">
                  JS
                </span>
                <h2 class="text-xl font-bold py-0.5">Frontend Mentor</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q4 2020
                </span>
                <p>
                  I wanted to practice without just following a course step by
                  step, so I did 2 challenges on Front-end-Mentor, which mainly
                  used what I had just learned. I also had to learn a bit of
                  JavaScript to do them.
                </p>
                <div class="flex justify-center mt-3">
                  <button class="block rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a
                      href="https://front-end-mentor.tiiny.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">View Websites</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 6: JS */}
          <div class="relative z-10">
            <img src={Project6} alt="" class="timeline-img" />
            <div class="timeline-container-left">
              <div class="timeline-pointer-left" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-light-orange text-dark-orange">
                  HTML
                </span>
                <span class="timeline-badge bg-blue-100 text-blue-800">
                  CSS
                </span>
                <span class="timeline-badge bg-yellow-100 text-yellow-800">
                  JS
                </span>
                <h2 class="text-xl font-bold py-0.5">Learning JavaScript</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q4 2020
                </span>
                <p>
                  I then went on and learned JavaScript with a course from the
                  YouTuber Dev Ed, and made a few cool projects thanks to it.
                </p>
                <div class="flex justify-center mt-3">
                  <button class="block rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a
                      href="https://javascript.tiiny.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">View Websites</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 7: React */}
          <div class="relative z-10">
            <img src={Project7} alt="" class="timeline-img" />
            <div class="timeline-container-right">
              <div class="timeline-pointer-right" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-light-orange text-dark-orange">
                  HTML
                </span>
                <span class="timeline-badge bg-blue-100 text-blue-800">
                  CSS
                </span>
                <span class="timeline-badge bg-yellow-100 text-yellow-800">
                  JS
                </span>
                <span class="timeline-badge bg-light-cyan text-dark-cyan">
                  React
                </span>
                <h2 class="text-xl font-bold py-0.5">Learning React</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q4 2020
                </span>
                <p>
                  As I was finishing to learn JS, Dev Ed also released a React
                  course, so I followed it and built a few other projects with
                  it. The music player was pretty fun! I now had a better
                  understanding of Frontend development.
                </p>
                <div class="flex justify-center mt-3">
                  <button class="block rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a
                      href="https://react-music-player-91z1l9r5e-alexandru.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">View Website</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 8: Notion Course */}
          <div class="relative z-10">
            <img src={Project8} alt="" class="timeline-img" />
            <div class="timeline-container-left">
              <div class="timeline-pointer-left" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-blue-100 text-blue-800">
                  Swipe Pages
                </span>
                <h2 class="text-xl font-bold py-0.5">Taking a little break</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q4 2020
                </span>
                <p>
                  I needed a little pause with code, so I tried to launch an
                  online course in partnership with a youtuber, but we ended up
                  not being a good fit together, so I'll probably do it on my
                  own at some point. the landing page looks clean though and was
                  fun to design!
                </p>
                <div class="flex justify-center mt-3">
                  <button class="block rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a
                      href="https://www.apprendrenotion.com/closed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">View Landing Page</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 9: Coding Accelerator */}
          <div class="relative z-10">
            <img src={Project9} alt="" class="timeline-img" />
            <div class="timeline-container-right">
              <div class="timeline-pointer-right" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-red-100 text-red-800">Ruby</span>
                <span class="timeline-badge bg-gray-100 text-gray-800">
                  Reinforcing Fundamentals
                </span>
                <h2 class="text-xl font-bold py-0.5">
                  Joining Coding Accelerator
                </h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q1 2021
                </span>
                <p>
                  The CMO of the company I work for gave me some advice on
                  learning how to code, and told me that I didn't focus enough
                  on the basics, so I joined this program which helps you become
                  a fullstack developer to practice more. It helps a lot and
                  makes me more confident in my skills.
                </p>
                <div class="flex justify-center mt-3">
                  <button class="block rounded-md border border-transparent bg-gray-700 text-base font-medium text-white shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a
                      href="https://joincodingnow.com/coding-accelerator"
                      // FIND REFERRAL
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">
                        Check out Coding Accelerator
                      </p>
                    </a>
                  </button>
                </div>
                <p class="flex justify-center">(the course is in French)</p>
              </div>
            </div>
          </div>

          {/* Project 10: Go Rails Course */}
          <div class="relative z-10">
            <img src={Project10} alt="" class="timeline-img" />
            <div class="timeline-container-left">
              <div class="timeline-pointer-left" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-red-100 text-red-800">
                  Ruby on Rails
                </span>
                <span class="timeline-badge bg-light-orange text-dark-orange">
                  HTML
                </span>
                <span class="timeline-badge bg-blue-100 text-blue-800">
                  CSS
                </span>

                <h2 class="text-xl font-bold py-0.5">Learning Ruby on Rails</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q1 2021
                </span>
                <p>
                  While following Coding Accelerator, I started learning Ruby on
                  Rails to be able to build web apps, to do so, I followed a
                  course from Gorails by Chris Oliver which taught me how to
                  build a tweet scheduling web app.
                </p>
                <div class="flex justify-center mt-3">
                  <button class="block rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a
                      href="https://social-tweaks.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p class="px-1 py-2 sm:px-4">View Web App</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 11: Final Project */}
          <div class="relative z-10">
            <img src={Project11} alt="" class="timeline-img" />
            <div class="timeline-container-right">
              <div class="timeline-pointer-right" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-light-orange text-dark-orange">
                  HTML
                </span>
                <span class="timeline-badge bg-blue-100 text-blue-800">
                  CSS
                </span>
                <span class="timeline-badge bg-yellow-100 text-yellow-800">
                  JS
                </span>
                <span class="timeline-badge bg-light-cyan text-dark-cyan">
                  React
                </span>
                <h2 class="text-xl font-bold py-0.5">This Portfolio</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q1 2021
                </span>
                <p>
                  This portfolio uses all the Frontend languages I learned so
                  far, plus Tailwind CSS, which I had to learn in order to build
                  the website you are on.
                </p>
              </div>
            </div>
          </div>

          {/* Project 12: Final P */}
          <div class="relative z-10">
            <img src={Project12} alt="" class="timeline-img" />
            <div class="timeline-container-left">
              <div class="timeline-pointer-left" aria-hidden="true"></div>
              <div class="bg-white p-6 rounded-md shadow-sm">
                <span class="timeline-badge bg-red-100 text-red-800">
                  Ruby on Rails
                </span>
                <span class="timeline-badge bg-light-orange text-dark-orange">
                  HTML
                </span>
                <span class="timeline-badge bg-blue-100 text-blue-800">
                  CSS
                </span>
                <span class="timeline-badge bg-yellow-100 text-yellow-800">
                  JS
                </span>
                <span class="timeline-badge bg-light-cyan text-dark-cyan">
                  React
                </span>
                <h2 class="text-xl font-bold py-0.5">The final project</h2>
                <span class="timeline-date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="mr-1.5 h-3 w-3 text-indigo-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Q1 2021
                </span>
                <p>
                  And finally this project, which uses everything I have learned
                  so far ! :)
                </p>
                <div class="flex justify-center mt-3">
                  <button class="block rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <p class="px-1 py-2 sm:px-4">Available soon</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <div class="pb-20"></div>
    </motion.div>
  );
};

export default Timeline;