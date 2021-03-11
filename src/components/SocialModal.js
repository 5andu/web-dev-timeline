import React from "react";
import { motion } from "framer-motion";
import personalWebsiteImage from "../img/alexandru_face.jpg";
import twitterLogo from "../img/twitter_logo.png";
import youtubeLogo from "../img/youtube_logo.jpg";

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { ease: "easeInOut", duration: 0.25 },
              }}
              class="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={this.onClose}
            >
              <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
            </motion.div>

            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { ease: "easeInOut", duration: 0.25 },
              }}
              class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div>
                  <h3
                    class="text-3xl leading-8 font-bold text-gray-800 text-center pb-6"
                    id="modal-headline"
                  >
                    You can say hello here !
                  </h3>
                  <div class="mx-2">
                    <div class="lg:col-span-2 mb-4 ">
                      <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8 " />

                      <div class="flex items-center space-x-4 lg:space-x-6">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://alexglv.com"
                        >
                          <img
                            class="w-16 h-16 rounded-full lg:w-16 lg:h-16"
                            src={personalWebsiteImage}
                            alt="My personal Website image"
                          />
                        </a>
                        <div class="font-medium text-lg leading-6 space-y-1">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://alexglv.com"
                          >
                            <h3 class="pb-1">On my Website</h3>
                            <p class="text-indigo-600">alexglv.com</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="lg:col-span-2 mb-4">
                      <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8" />

                      <div class="flex items-center space-x-4 lg:space-x-6">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/AlexandruGlv"
                        >
                          <img
                            class="w-16 h-16 rounded-full lg:w-16 lg:h-16"
                            src={twitterLogo}
                            alt="Twitter logo"
                          />
                        </a>
                        <div class="font-medium text-lg leading-6 space-y-1">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/AlexandruGlv"
                          >
                            <h3 class="pb-1">On Twitter</h3>

                            <p class="text-indigo-600">@AlexandruGlv</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="lg:col-span-2 mb-4">
                      <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8" />

                      <div class="flex items-center space-x-4 lg:space-x-6">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.youtube.com/channel/UCc03ebwuzIktdzqcAXkG1nA"
                        >
                          <img
                            class="w-16 h-16 rounded-full lg:w-16 lg:h-16"
                            src={youtubeLogo}
                            alt="YouTube Logo"
                          />
                        </a>
                        <div class="font-medium text-lg leading-6 space-y-1">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/channel/UCc03ebwuzIktdzqcAXkG1nA"
                          >
                            <h3 class="pb-1">On Youtube</h3>
                            <p class="text-indigo-600">
                              @Alexandru Golovatenco
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-5 flex justify-center">
                {/* Make the following button toggle off the modal state */}
                <button
                  onClick={this.onClose}
                  exit={{
                    opacity: 0,
                    transition: { ease: "easeOut", duration: 0.5 },
                  }}
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-md"
                >
                  Go back
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool.isRequired,
// };
