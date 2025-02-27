import React from "react";
import { Link } from "react-router-dom";
import ocd from "../../../assets/ocd1.png";
import OcdSymptoms from "./OcdSymptoms";
import { NotSure, SupportSection } from "../Consult";

import OcdFaq from "./OcdFaq";
import { Toaster } from "react-hot-toast";

function OcdHero() {
  return (
    <section className="w-full py-16 lg:py-10 padding-x items-center bg-[#ffd8c2] flex flex-col-reverse lg:flex-row gap-10">
      {/* Left Side: Text */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-balance">
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold text-darker">
          Manage OCD Together
        </h2>
        <p className="text-base text-gray-600">
          Facing challenges with OCD? You're not alone. Our platform provides
          guidance and tools to help you manage symptoms and take back control
          of your life. Let's work together toward a balanced mind and healthier
          habits.
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
          src={ocd} // replace with actual OCD image path
          alt="Managing OCD"
          className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md mx-auto"
        />
      </div>
    </section>
  );
}

function Ocd() {
  return (
    <main className="overflow-x-hidden font-sora">
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <OcdHero />
      <OcdSymptoms />
      <NotSure />
      <OcdFaq />
      <SupportSection />
    </main>
  );
}

export default Ocd;
