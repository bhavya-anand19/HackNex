import React from "react";
import HeroBg from "../../assets/without-bg.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";
import { Link } from "react-router-dom";

import "../../index.css";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-[#fff5ea] font-sora">
      <div className="flex flex-col-reverse lg:flex-row w-full gap-y-6 lg:gap-x-16 items-center padding-x">
        {/* Left Side */}
        <div className="flex flex-col justify-center py-8 lg:py-0 text-center lg:text-left w-full lg:w-1/2">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[550px] mx-auto lg:mx-0">
            <motion.h1
              variants={FadeRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug font-sora text-gray-900"
            >
              Preserving Your <span className="text-[#f0703a]">Happiness</span>
            </motion.h1>
            <motion.h2
              variants={FadeRight(0.7)}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 tracking-wide"
            >
              Keep Your Mind and Soul Healthy
            </motion.h2>
            <motion.p
              variants={FadeRight(1.0)}
              initial="hidden"
              animate="visible"
              className="text-gray-500 text-sm xl:text-base max-w-[550px] mx-auto lg:mx-0"
            >
              Discover new ways to nurture your mental and emotional well-being.
            </motion.p>
            <motion.div
              variants={FadeRight(1.3)}
              initial="hidden"
              animate="visible"
              className="flex flex-col min-[480px]:flex-row gap-4 md:gap-8 py-2 sm:py-0 justify-center lg:justify-start"
            >
              <div className="flex flex-wrap gap-4 xl:gap-7 justify-center">
                <Link to="/book-free-session" className="w-full sm:w-auto">
                  <button className="primaryBtn w-full sm:w-auto px-6 py-3 text-sm sm:text-base rounded-lg bg-gradient-to-r from-[#f0703a] to-[#f28850] hover:to-[#f07a46] transition-all duration-300 hover:scale-105">
                    Free Pre Diagnosis
                  </button>
                </Link>
                <button className="w-full primaryBtn sm:w-auto px-6 py-3 text-sm sm:text-base rounded-lg bg-gradient-to-r from-[#f0703a] to-[#f28850] hover:to-[#f07a46] transition-all duration-300 hover:scale-105">
                  Find a Therapist
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[85%]">
          <motion.img
            variants={{
              hidden: { opacity: 0, scale: 0.9, x: 50 },
              visible: {
                opacity: 1,
                scale: 1,
                x: 0,
                transition: { duration: 1.2 },
              },
            }}
            initial="hidden"
            animate="visible"
            src={HeroBg}
            alt="Hero Illustration"
            className="w-3/4 md:w-3/5 lg:w-[70%] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
