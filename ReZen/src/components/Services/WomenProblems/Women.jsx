import React from "react";
import { Link } from "react-router-dom";
import women from "../../../assets/women1.jpg";
import WomenFAQ from "./WomenFaq";
import { SupportSection, NotSure } from "../Consult";
import BodyProblems from "./BodyProblems";
import MythFactSection from "./MythFact";
import { Toaster } from "react-hot-toast";

function WomenHero() {
  return (
    <section className="w-full py-16 lg:py-10 padding-x items-center bg-[#ffd8c2] flex flex-col-reverse lg:flex-row gap-10">
      {/* Left Side: Text */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-balance">
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold text-darker">
          Empowering Women's Wellness
        </h2>
        <p className="text-base text-gray-600">
          Women's health is more than just physical well-being. It's about
          mental strength, emotional support, and creating balance in life. Our
          platform offers the resources you need to nurture and care for your
          overall wellness. Let’s build a stronger, healthier future together.
        </p>
        <Link to="/book-free-session">
          <button className="primaryBtn text-sm sm:text-base">
            Book Free Session
          </button>
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <img
          src={women} // replace with actual image path
          alt="Women's Wellness"
          className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md mx-auto"
        />
      </div>
    </section>
  );
}

function Women() {
  return (
    <main className="overflow-x-hidden font-sora">
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <WomenHero />
      <BodyProblems />
      <NotSure />
      <MythFactSection />
      <WomenFAQ />
      <SupportSection />
    </main>
  );
}

export default Women;
